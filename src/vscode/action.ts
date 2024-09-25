import * as vscode from 'vscode'
import { 全局变量 } from '../global/global'

export class 自定义代码动作提供程序 implements vscode.CodeActionProvider {
  public provideCodeActions(
    文档: vscode.TextDocument,
    范围: vscode.Range,
    _上下文: vscode.CodeActionContext,
    _取消标记: vscode.CancellationToken,
  ): vscode.ProviderResult<(vscode.Command | vscode.CodeAction)[]> {
    var 代码动作: vscode.CodeAction[] = []

    var 编辑器 = vscode.window.activeTextEditor
    var 文件路径 = 编辑器?.document.uri.fsPath
    if (!文件路径) return 代码动作

    var 开始位置 = 文档.offsetAt(范围.start)
    var 结束位置 = 文档.offsetAt(范围.end)
    var 选择部分的文本 = 文档.getText(范围)

    if (开始位置 != 结束位置) {
      var 生成zod描述 = new vscode.CodeAction('生成zod描述', vscode.CodeActionKind.QuickFix)
      生成zod描述.command = {
        command: `${全局变量.插件名称}.genZod`,
        title: '生成zod描述',
        arguments: [选择部分的文本],
      }
      代码动作.push(生成zod描述)
    }

    return 代码动作
  }
}
