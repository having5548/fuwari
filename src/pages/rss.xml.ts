import { getImage } from "astro:assets";
import { getCollection } from "astro:content";
import { profileConfig, siteConfig } from "@/config";
import rss from "@astrojs/rss";
import type { RSSFeedItem } from "@astrojs/rss";
import type { APIContext, ImageMetadata } from "astro";
import MarkdownIt from "markdown-it";
import { parse as htmlParser } from "node-html-parser";
import sanitizeHtml from "sanitize-html";

const markdownParser = new MarkdownIt();

// 动态导入文章内用到的图片，用于把相对路径替换为构建后的地址
const imagesGlob = import.meta.glob("/src/content/**/*.{jpeg,jpg,png,gif,webp}");

/**
 * 整理正文：
 * 1. 去掉与文章标题重复的首个一级标题（订阅器里标题会单独展示）；
 * 2. 把 `::github{repo="a/b"}` 这类站点自定义指令换成普通链接，否则订阅器里会显示裸指令文本；
 * 3. 丢弃其余未知指令行，避免 `::xxx{...}` 泄漏到阅读器。
 */
function normalizeBody(raw: string): string {
	return raw
		.replace(/^\uFEFF/, "")
		.replace(/^\s*#\s+[^\n]*\n+/, "")
		.replace(/::github\{repo=["']([^"']+)["']\}/g, (_match: string, repo: string) => {
			return `[GitHub 仓库：${repo}](https://github.com/${repo})`;
		})
		.replace(/^\s*::[\w-]+\{[^}]*\}\s*$/gm, "");
}

export async function GET(context: APIContext) {
	if (!context.site) {
		throw Error("site not set");
	}

	const posts = await getCollection("posts", ({ data }) => {
		return import.meta.env.PROD ? data.draft !== true : true;
	});

	// 订阅源严格按发布时间倒序，不跟随站内「置顶优先」的排序
	posts.sort((a, b) => {
		return new Date(b.data.published).valueOf() - new Date(a.data.published).valueOf();
	});

	const feed: RSSFeedItem[] = [];
	let lastBuildDate = new Date(0);

	for (const post of posts) {
		const body = markdownParser.render(normalizeBody(post.body ?? ""));
		const html = htmlParser.parse(body);
		const images = html.querySelectorAll("img");

		for (const img of images) {
			const src = img.getAttribute("src");
			if (!src) continue;

			// 相对路径的文章图片：走 Astro 图片管线，替换成构建后的绝对地址
			if (src.startsWith("./") || src.startsWith("../")) {
				const importPath = src.startsWith("./")
					? `/src/content/posts/${src.slice(2)}`
					: `/src/content/${src.replace(/^\.\.\//, "")}`;

				const loader = imagesGlob[importPath];
				if (loader) {
					const mod = (await loader()) as { default: ImageMetadata };
					if (mod?.default) {
						const optimized = await getImage({ src: mod.default });
						img.setAttribute("src", new URL(optimized.src, context.site).href);
					}
				}
			} else if (src.startsWith("/")) {
				// `public` 目录下的图片：直接拼成线上绝对地址
				img.setAttribute("src", new URL(src, context.site).href);
			}
		}

		const updatedAt = post.data.updated ? new Date(post.data.updated) : new Date(post.data.published);
		if (updatedAt.valueOf() > lastBuildDate.valueOf()) {
			lastBuildDate = updatedAt;
		}

		feed.push({
			title: post.data.title,
			description: post.data.description,
			pubDate: new Date(post.data.published),
			link: `/posts/${post.slug}/`,
			categories: post.data.tags,
			customData: `<dc:creator>${profileConfig.name}</dc:creator>`,
			content: sanitizeHtml(html.toString(), {
				allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
				allowedAttributes: {
					...sanitizeHtml.defaults.allowedAttributes,
					img: ["src", "alt", "title", "width", "height", "loading"],
				},
			}),
		});
	}

	return rss({
		title: `${siteConfig.title} - ${siteConfig.subtitle || "技术博客"}`,
		description: siteConfig.subtitle || "No description",
		site: context.site,
		items: feed,
		xmlns: {
			atom: "http://www.w3.org/2005/Atom",
			dc: "http://purl.org/dc/elements/1.1/",
		},
		customData: [
			`<language>${siteConfig.lang}</language>`,
			`<lastBuildDate>${lastBuildDate.toUTCString()}</lastBuildDate>`,
			`<atom:link href="${new URL("rss.xml", context.site).href}" rel="self" type="application/rss+xml"/>`,
			"<generator>Astro + Fuwari</generator>",
			"<ttl>30</ttl>",
		].join(""),
	});
}
