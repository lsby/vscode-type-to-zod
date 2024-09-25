import * as vscode from 'vscode'

export type 全局变量类型 = {
  插件名称: string
}
export var 全局变量: 全局变量类型

async function 初始化全局变量(): Promise<void> {
  var 插件名称 = 'lsby-vscode-type-to-zod'

  全局变量 = {
    插件名称: 插件名称,
  }
}
初始化全局变量().catch(console.error)

vscode.workspace.onDidChangeConfiguration(async () => {
  await 初始化全局变量()
})
