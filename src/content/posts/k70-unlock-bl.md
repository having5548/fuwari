---
title: 小米骁龙8Gen2解锁BL保姆级教程（红米K70/小米13全系）
published: 2026-05-30T10:00:00.000Z
updated: 2026-05-30T10:00:00.000Z
description: '小米骁龙8Gen2机型(Xiaomi-QC解锁BL工具v1.4)解锁Bootloader完整教程，涵盖红米K70、小米13全系、K60Pro、平板6SPro。无视168小时、无视售后降级拉黑，支持高版本系统补丁。解锁有风险，非必要请勿操作！'
image: ''
tags: [红米K70, 解BL锁, 小米, 刷机, 骁龙8Gen2, BL解锁, Xiaomi-QC]
lang: zh_CN
pinned: true
prerenderAll: true
---

<p><span style="color: #e03e2d;"><strong>⚠️ 重要提醒：解锁有风险！非必要请不要解锁！</strong></span></p>
<p>解锁Bootloader会使手机处于"裸奔"状态，安全性会大大降低！请谨慎考虑后再决定是否操作。本教程只写给真正有需要解锁或者降级的用户。</p>
<p><span style="color: #e03e2d;"><strong>⚠️ 本方案需宽容提权写入工程abl进行操作，有变砖风险，如因误操作导致变砖请自行承担后果。请仔细阅读教程后再操作！</strong></span></p>
<p>📢 本教程仅供个人学习研究，请勿用于非法用途。</p>
<hr>

<div style="background: linear-gradient(135deg, #1a0a0a, #2d0a0a); border: 3px solid #ff2020; border-radius: 16px; padding: 30px 24px; margin: 24px 0; text-align: center; box-shadow: 0 0 30px rgba(255,0,0,0.15);">
  <p style="font-size: 32px; font-weight: 900; color: #ff4444; margin: 0 0 8px 0; text-shadow: 0 0 20px rgba(255,0,0,0.4); letter-spacing: 2px;">
    ⚠️ Xiaomi-QC解锁BL工具v1.4 ⚠️
  </p>
  <p style="font-size: 22px; font-weight: 800; color: #ffaa00; margin: 4px 0 12px 0;">
    已更新 8G2 · 8G3 · 8E · 8E5 高版本轮椅一键解锁
  </p>
  <p style="font-size: 18px; font-weight: 700; color: #ffffff; margin: 8px 0 4px 0;">
    🚨 进行教程之前，<span style="color: #ff4444;">必须先下载澎湃工具箱</span>确认自己的字库为非恺侠字库！
  </p>
  <p style="font-size: 16px; color: #cccccc; margin: 12px 0 0 0;">
    🔗 澎湃工具箱下载地址：
    <a href="https://wwwzo.lanzoue.com/iaqpq3qpk9ih" target="_blank" style="color: #ffaa00; font-weight: 700; font-size: 18px; text-decoration: underline;">
      https://wwwzo.lanzoue.com/iaqpq3qpk9ih
    </a>
    <br>
    <span style="color: #ffaa00;">📌 密码：azm8</span>
  </p>
</div>

<hr>
<h2>📱 适用平台与机型</h2>
<p><strong>Xiaomi-QC解锁BL工具v1.4</strong> 现已支持以下平台一键解锁：</p>
<ul>
<li><strong>骁龙8 Gen 2</strong>（本教程详解）</li>
<li><strong>骁龙8 Gen 3</strong>（高版本请选高版本专用方案）</li>
<li><strong>骁龙8e / 8e5</strong></li>
</ul>
<p>本教程以 <strong>骁龙8Gen2</strong> 平台为例，适用以下机型（无视168小时等待，无视售后降级拉黑）：</p>
<ul>
<li>小米13 / 13 Pro / 13 Ultra</li>
<li>红米K70 / K70 Pro / K70E</li>
<li>红米K60 Pro</li>
<li>小米平板6S Pro</li>
</ul>
<hr>
<h2>📋 准备工作</h2>
<h3>硬件要求</h3>
<ul>
<li>一根好用的数据线（不要用垃圾线刷机，建议原装线）</li>
<li>一台正常使用的Windows电脑（建议Win10及以上）</li>
<li><strong>笔记本电脑请插电源操作</strong>，否则USB接口可能供电不足导致刷机失败</li>
<li><strong>台式机请使用机箱后面主板USB接口</strong>，前面板容易供电不足</li>
<li>一个清醒的脑子 + 仔细阅读教程的耐心</li>
</ul>
<h3>下载所需文件</h3>
<ol>
<li><p><strong>Xiaomi-QC解锁BL工具v1.4</strong> — 解锁工具箱（密码通过组织内获取，工具完全免费，请警惕倒卖行为，工具箱承诺无任何病毒和格机脚本，请放心使用）</p>
</li>
<li><p><strong>对应机型工程小包</strong> ⬇️ 点击下方链接下载：</p>
<p>👉 <strong>小米8Gen2解锁BL工程小包</strong>（提取码：mlrr）<br>
<a href="https://1812230881.share.123pan.cn/123pan/Id6rVv-q6ox3" target="_blank"><strong>https://1812230881.share.123pan.cn/123pan/Id6rVv-q6ox3</strong></a></p>
<p><strong>⚠️ 务必使用本教程提供的工程小包</strong>，避免其他不确定性因素！<br>
请根据机型下载对应的小包，红米K70和小米平板6SPro有专用包，其他机型对应下载即可。</p>
</li>
<li><p><strong>官方线刷包</strong> — 解锁后需要完整线刷官方包，推荐以下渠道下载：</p>
<ul>
<li><a href="https://rom.wugov.com/" target="_blank">小米官方包售后直链不限速</a></li>
<li><a href="https://www.hyperos.fans/zh/devices/" target="_blank">澎湃官方包下载站</a></li>
<li><a href="https://xiaomirom.com/" target="_blank">小米官方包下载站</a></li>
</ul>
</li>
</ol>
<p>💡 推荐使用 <a href="https://www.123912.com/s/Id6rVv-3pd13" target="_blank">去广告版WinRAR</a> 解压文件，Win自带解压功能较弱。</p>
<hr>
<h2>📌 系统版本兼容说明</h2>
<table style="border-collapse: collapse; width: 100%;">
<thead>
<tr style="background-color: #2d2d2d;">
<th style="border: 1px solid #555; padding: 8px; text-align: center;">机型</th>
<th style="border: 1px solid #555; padding: 8px; text-align: center;">最高可宽容版本</th>
</tr>
</thead>
<tbody>
<tr>
<td style="border: 1px solid #555; padding: 8px;">红米K70</td>
<td style="border: 1px solid #555; padding: 8px; text-align: center;">3.0.9</td>
</tr>
<tr>
<td style="border: 1px solid #555; padding: 8px;">红米K60 Pro</td>
<td style="border: 1px solid #555; padding: 8px; text-align: center;">3.0.4</td>
</tr>
<tr>
<td style="border: 1px solid #555; padding: 8px;">小米平板6S Pro</td>
<td style="border: 1px solid #555; padding: 8px; text-align: center;">3.0.6</td>
</tr>
<tr>
<td style="border: 1px solid #555; padding: 8px;">其他机型</td>
<td style="border: 1px solid #555; padding: 8px; text-align: center;">3.0.300 前</td>
</tr>
</tbody>
</table>
<ul>
<li><strong>2月前补丁的系统版本</strong>：直接使用本教程的工具宽容解锁即可</li>
<li><strong>2月及更高补丁的系统版本</strong>：需要使用本教程完整流程</li>
<li><strong>正式版超过3.300</strong>：无法宽容，需要想办法降级后再操作</li>
<li><strong>MIUI14（安卓13）</strong>：无法宽容，请最低升级到澎湃OS1</li>
<li>小米13系列有基于安卓14的MIUI14，可以宽容</li>
</ul>
<hr>

<div style="background: linear-gradient(135deg, #1a0a00, #2d1a00); border: 3px solid #ff8800; border-radius: 16px; padding: 30px 24px; margin: 24px 0; text-align: center; box-shadow: 0 0 30px rgba(255,136,0,0.15);">
  <p style="font-size: 30px; font-weight: 900; color: #ff8800; margin: 0 0 8px 0; text-shadow: 0 0 20px rgba(255,136,0,0.3); letter-spacing: 2px;">
    🚨 开始操作前必看！🚨
  </p>
  <p style="font-size: 20px; font-weight: 800; color: #ff4444; margin: 8px 0;">
    ⚡ 非恺侠字库高版本解锁 = 必变砖！只能去售后！⚡
  </p>
  <p style="font-size: 17px; font-weight: 600; color: #ffdd88; margin: 12px 0; line-height: 1.7;">
    请务必先用澎湃工具箱确认你的字库类型！<br>
    只有 <span style="color: #00ff88; font-weight: 900;">非恺侠字库</span> 手机才能解锁！
  </p>
  <p style="font-size: 16px; font-weight: 700; color: #ffffff; margin: 12px 0 8px 0;">
    ✅ 下图这种字库信息就可以操作解锁：
  </p>
  <img src="/images/k70%20unlock.jpg" alt="可解锁字库示例" style="max-width: 100%; border-radius: 12px; border: 2px solid #00ff88; margin: 8px 0;">
  <p style="font-size: 14px; color: #00ff88; margin: 4px 0 16px 0;">✅ 这种就可以 — 非恺侠字库</p>

  <p style="font-size: 16px; font-weight: 700; color: #ffffff; margin: 12px 0 8px 0;">
    ❌ 下图这种字库信息就不要操作：
  </p>
  <img src="/images/k70%20not%20unlock.jpg" alt="不可解锁字库示例" style="max-width: 100%; border-radius: 12px; border: 2px solid #ff4444; margin: 8px 0;">
  <p style="font-size: 14px; color: #ff4444; margin: 4px 0 0 0;">❌ 这种就不行 — 高版本补丁的非恺侠字库强行解锁必变砖！</p>
</div>

<hr>
<h2>🔧 正式解锁步骤（8Gen2版）</h2>

<h3>步骤一：解压与安装驱动</h3>
<ol>
<li>右键下载的压缩包，使用WinRAR解压到文件夹（路径不要有空格和括号）</li>
<li>以管理员身份运行工具箱，进入主菜单</li>
<li>选择 <strong>7 — 安装驱动</strong></li>
<li>安装完成后选择<strong>否，不重启电脑</strong>（adb/fastboot驱动不需要重启）</li>
</ol>

<h3>步骤二：宽容提权</h3>
<ol>
<li>手机打开开发者选项和 <strong>USB调试</strong></li>
<li>进入工具箱选择 <strong>Xiaomi-8G2一键解锁BL</strong></li>
<li>用数据线连接电脑，工具箱会自动检查SELinux状态然后开始宽容</li>
<li>如果提示宽容失败，说明漏洞已被修复，请检查系统版本是否在兼容范围内</li>
</ol>
<p><span style="color: #e67e22;"><strong>💡 2K分辨率机型注意：</strong></span> 有2K分辨率的机型（如小米13 Pro/Ultra）在澎湃1宽容会导致分辨率异常变大。建议先取消锁屏密码，重启后开启2K分辨率，宽容完毕后再去设置里改回1080P。</p>

<h3>步骤三：写入工程abl</h3>
<ol>
<li>宽容后工具会自动识别机型代号</li>
<li><strong>OS2 / OS3 系统</strong>：选 <strong>方案1</strong> 写入工程abl（有临时root的也可以选方案2）</li>
<li><strong>MIUI14 / OS1 系统</strong>：先宽容后，安装新版KernelSU越狱获取临时Root权限，在超级用户中授权Shell，然后选 <strong>方案2</strong> 写入工程abl</li>
<li>写入完成后手机<strong>会自动重启到Fastboot模式</strong></li>
</ol>

<h3>步骤四：刷入工程小包</h3>
<ol>
<li>重启到Fastboot后，工具会检查是否拥有刷写权限</li>
<li>确认后开始刷入工程小包</li>
<li><strong>⚠️ 务必使用本教程提供的工程小包</strong>，不要混用其他来源的小包，以排除不确定性因素</li>
<li>红米K70和平板6SPro请使用专用包，其他机型对应自己的机型下载即可</li>
<li>注意检查刷机包路径文件夹，不要有空格或括号，否则会导致线刷失败</li>
</ol>
<p><span style="color: #e03e2d;"><strong>⚠️ K70 与 小米平板6SPro 特别提醒：</strong></span><br>
这两个机型刷的是K60Pro的工程小包来做到解锁，所以刷完以后<strong>屏幕不显示（黑屏）</strong>，但实际上是可以进Fastboot模式的，<strong>不是黑砖</strong>！别慌！<br>
至于酷安上其他工具和教程导致fastboot都进不去的，大概率是直接把解锁用的boot镜像flash进去了，或者小包有问题，又或者是分区表改的有问题，然后导致变成了真黑砖。</p>

<h3>步骤五：机型选择（仅K70/6SPro需要）</h3>
<ol>
<li>刷完工程小包后，工具会提示选择机型</li>
<li><strong>红米K70 选 1</strong>，<strong>平板6SPro 选 2</strong>，其他机型直接选 <strong>3 跳过</strong></li>
<li>因为K70和Pad6SPro刷了K60Pro的小包，机型代号会变成K60Pro的，为了保证后续写入分区表不出错，这里需要手动干预</li>
<li>工具会自动检测Fastboot设备，以工具箱检测信息和电脑设备管理器顶部显示的 <strong>Android Bootloader</strong> 设备为准</li>
</ol>

<h3>步骤六：启动解锁镜像</h3>
<ol>
<li>解锁bootloader的镜像启动后，出现<strong>花屏/白屏/黑屏</strong>都是正常现象</li>
<li><strong>K70 / 6SPro（全程黑屏）</strong>：工具显示启动后，自己数10个数，然后<strong>长按开机键5-10秒</strong>，它会自动进Fastboot模式，工具箱显示识别后立刻松开，千万不要多按</li>
<li><strong>其他机型</strong>：会呈现白屏/花屏或黑屏状态，等待10秒左右，然后手动进入Fastboot模式（长按开机键黑屏后，同时按住音量下键+开机键）</li>
<li>如果没解锁成功，会再启动一次，然后重复该步骤</li>
</ol>
<p>重新进入Fastboot后你就会发现—— <strong>Bootloader已经解锁成功！</strong><br>
<code>unlocked: yes</code> ✅ 随后工具箱会自动还原官方分区表。<br>
如果有人使用其他教程卡在这一步的，可以使用工具箱主页的 <strong>还原分区表</strong> 功能，然后再去线刷。</p>

<hr>
<h2>📥 步骤七：线刷官方包（必须完成）</h2>
<p>解锁后由于刷了工程小包，<strong>必须完整线刷一遍官方包</strong>才能正常使用。耐心等待线刷完成，这时候你就完成了全部解锁流程！</p>

<h3>7.1 选择正确的刷机脚本</h3>
<p>解压官方线刷包，找到刷机脚本文件夹：</p>
<p><strong>⚠️ 一定要选 flash_all.bat 脚本，不要选 flash_all_lock.bat（那个会上锁）！</strong></p>

<h3>7.2 修改脚本 — K70 / 平板6SPro 必须操作</h3>
<p>由于这两个机型刷完工程小包后机型代号会变，并且还有crc校验，会导致线刷报错。用记事本编辑 <code>flash_all.bat</code>：</p>
<ul>
<li>找到 <code>::erase opcust</code> 这一行，把<strong>上面的crc校验和机型验证部分全部删除</strong></li>
<li>保存后再执行刷机</li>
</ul>

<h3>7.3 修改脚本 — 小米13系列 / K60Pro</h3>
<p>线刷澎湃时可能会遇到 <code>cust</code> 分区报错：<br>
<code>FAILED (remote:'Requested download size is more than max allowed</code></p>
<p>这是因为cust.img超出分区大小了（cust分区是小米塞推广预装软件的分区，从澎湃1开始已取消，老机型升新版系统会有此问题）。解决方案：</p>
<ul>
<li>在 <code>flash_all.bat</code> 中找到 <code>cust</code> 那一行，<strong>整行删除保存</strong>后再刷</li>
</ul>

<h3>7.4 执行刷机</h3>
<ul>
<li>以管理员身份运行修改后的 <code>flash_all.bat</code></li>
<li>耐心等待线刷完成（K70和平板6SPro此时就可以<strong>成功亮屏</strong>了）</li>
<li>看到开机界面，解锁全部完成 🎉</li>
</ul>

<hr>
<h2>❌ 报错处理</h2>

<h3>🔴 crclist 报错</h3>
<p>小米13系列和K60Pro线刷官方包时在crclist报错：右键编辑 <code>flash_all.bat</code>，删除掉crc校验部分，保存后重刷。</p>

<h3>🔴 路径报错</h3>
<p>提示 "此时不应有 xxx" 或 "No such file or directory"：</p>
<ul>
<li>这是路径问题，路径有空格和括号会导致报错</li>
<li>把整个文件夹改成纯数字或纯英文路径，重刷即可</li>
</ul>

<h3>🔴 cust分区报错</h3>
<p>参考上方 <strong>7.3 修改脚本</strong> 部分，删除flash_all.bat中的cust一行即可。</p>

<hr>
<h2>⚠️ 注意事项</h2>

<h3>解锁后的影响</h3>
<ul>
<li>手机数据会被<strong>全部清除</strong>，请提前备份重要数据</li>
<li>银行App、金融类App可能无法正常使用</li>
<li>某些游戏和应用可能检测到解锁状态而拒绝运行</li>
<li>系统OTA更新可能失败，需要手动线刷完整包</li>
<li>部分售后可能拒绝为解锁设备提供保修服务</li>
</ul>

<h3>再次强调</h3>
<ul>
<li>解锁会使手机安全防护大幅降低，请谨慎权衡</li>
<li>非必要请不要解锁自己的设备</li>
<li>刷机有变砖风险，请严格按照教程操作</li>
<li>工具箱完全免费，请警惕倒卖行为</li>
<li>工具箱承诺没有植入任何病毒和格机脚本，请放心使用</li>
</ul>

<hr>
<h2>❓ 常见问题（FAQ）</h2>

<h3>Q1: 解锁后如何重新上锁？</h3>
<p>在Fastboot模式下执行 <code>fastboot oem lock</code> 命令即可重新上锁，但数据也会被清除。也可以在线刷时使用 <code>flash_all_lock.bat</code> 脚本。</p>

<h3>Q2: 解锁后还能收到系统更新吗？</h3>
<p>可以收到，但增量更新可能会失败。建议使用完整包手动更新，或刷入第三方Recovery来管理更新。</p>

<h3>Q3: K70 / 6SPro 刷完黑屏怎么办？</h3>
<p>这两个机型刷的是K60Pro的工程小包，解锁全程黑屏属于<strong>正常现象</strong>。实际上设备处于Fastboot模式，工具箱能正常识别。耐心等待工具操作完成即可，不要强制重启或断开数据线。</p>

<h3>Q4: 宽容提示失败怎么办？</h3>
<p>说明漏洞已被修复。请检查系统版本是否在兼容范围内：MIUI14安卓13无法宽容需升级到OS1，正式版超过3.300需要先降级。K70最高3.0.9，K60Pro最高3.0.4，6SPro最高3.0.6。</p>

<h3>Q5: 变砖了怎么救？</h3>
<p>如果只是fastboot进不去但还能进9008模式，可以使用9008免授权引导重新刷入工程abl。如果9008都进不去，可能需要售后拆机维修。</p>

<h3>Q6: 8Gen3 / 8e 其他平台怎么解？</h3>
<p>本工具v1.4已支持8Gen3（高版本请选高版本专用方案，写完工程abl后后续步骤一致）和8e/8e5平台。8e高版本非铠侠机型可以参考 @微笑97 的9008写工程abl方案，写完后进fastboot使用本工具箱继续操作。</p>

<hr>
<p style="text-align: center; color: #999;">
本教程内容整理自酷安社区 @莫离然然、@Littlenine、@微笑97 等大佬的教程，感谢各位的无私分享与配合测试。<br>
工具箱完全免费，密码和卡密采用进入组织获取的方式，解锁工具下载和更多帮助请关注酷安 @莫离然然 的主页动态。<br>
本教程仅为技术分享，操作后果请自行承担。如果以上内容引起不适请立即关闭。
</p>
