import * as vscode from 'vscode'
import { 全局变量 } from './global/global'
import { 自定义代码动作提供程序 } from './vscode/action'
import { genZod } from './vscode/command'

var 插件名称 = 'lsby-vscode-type-to-zod'

export function activate(context: vscode.ExtensionContext): void {
  console.log(`${插件名称}: 插件开始运行`)

  context.subscriptions.push(vscode.commands.registerCommand(`${全局变量.插件名称}.genZod`, genZod))

  context.subscriptions.push(
    vscode.languages.registerCodeActionsProvider(['typescript', 'typescriptreact'], new 自定义代码动作提供程序(), {
      providedCodeActionKinds: [vscode.CodeActionKind.QuickFix],
    }),
  )
}

export function deactivate(): void {}
