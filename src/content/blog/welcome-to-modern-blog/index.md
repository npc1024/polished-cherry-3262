---
title: "openwrt锁定频段"
date: "2026-05-22"
description: "openwrt锁定频段"
tags: ["welcome", "introduction", "blog"]
---
锁定频段执行两条命令即可：
锁频：mmcli -m 0 --set-current-bands='频段名称'
例如锁b3：mmcli -m 0 --set-current-bands='eutran3'
重连：nmcli connection up modem
如果想开机锁频段编辑
/etc/rc.local文件
在exit 0上方加入要锁频的命令
modem命令
使用方法mmcli -m 0 -参数
如：mmcli -m 0 --set-current-bands='eutran3'
调制解调器命令选项:
-w，--monitor-state监视给定调制解调器的状态
-e，--enable启用给定的调制解调器
-d，--disable禁用给定的调制解调器
--set-power-state-on在调制解调器中设置全功率状态
--set-power-state-low在调制解调器中设置低功率状态
--set-power-state-off关闭调制解调器电源
-r，--reset重置给定的调制解调器
--factory-reset=/[CODE/]将给定的调制解调器重置为出厂状态
--command=/[COMMAND/]向调制解调器发送AT命令
--create-bearer=/["key=value，..."/]在给定的调制解调器中创建新的分组数据承载
--delete-bearer=/[PATH|INDEX/]从给定的调制解调器中删除数据承载
--set-current-capabilities =/[capability 1 | capability 2.../]设置当前的调制解调器功能。
--set-allowed-modes =/[mode 1 | mode 2.../]设置给定调制解调器中允许的模式。
--set-preferred-mode=/[MODE/]在给定的调制解调器中设置首选模式/(必须使用- set-allowed-modes/)给出允许的模式
--set-current-bands =/[band 1 | band 2.../]设置给定调制解调器要使用的频带。
--set-primary-sim-SLOT =/[SLOT NUMBER/]切换到所选的SIM卡插槽
--inhibit
-抑制调制解调器


Welcome aboard, and happy reading! 🚀
