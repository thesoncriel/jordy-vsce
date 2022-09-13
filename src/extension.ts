// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

interface VscodeExplorerContextDto {
  '$mid': number;
  fsPath: string;
  external: string;
  path: string;
  scheme: string;
}

function executeFeatureModule(feature: string, sub: string) {
	const terminal = vscode.window.createTerminal(`jordy-cli-temp-${Date.now()}`);

	terminal.sendText(`npm run cli feat ${feature} ${sub}`);
	terminal.sendText('y');

	setTimeout(() => {
		terminal.dispose();
	}, 5000);
}

function executeSubModule(path: string, sub: string) {
	const terminal = vscode.window.createTerminal(`jordy-cli-temp-${Date.now()}`);

	terminal.sendText(`npm run cli sub ${path} ${sub}`);
	terminal.sendText('y');

	setTimeout(() => {
		terminal.dispose();
	}, 5000);
}

function executeUiComponent(path: string, componentName: string, type: string) {
	const terminal = vscode.window.createTerminal(`jordy-cli-temp-${Date.now()}`);

	terminal.sendText(`npm run cli ui ${path} ${componentName} ${type}`);
	terminal.sendText('y');

	setTimeout(() => {
		terminal.dispose();
	}, 5000);
}

function executeStorybook(path: string, type: string) {
	const terminal = vscode.window.createTerminal(`jordy-cli-temp-${Date.now()}`);

	terminal.sendText(`npm run cli sb ${path} ${type}`);
	terminal.sendText('y');

	setTimeout(() => {
		terminal.dispose();
	}, 5000);
}

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "jordy-vsce" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposableFeatAdd = vscode.commands.registerCommand('jordy-vsce.feat-add', (arg0: VscodeExplorerContextDto, arg1: VscodeExplorerContextDto[]) => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		// vscode.window.showInformationMessage(JSON.stringify(arg0) + '\n------\n' + JSON.stringify(arg1));

		const input1 = vscode.window.createInputBox();
		const input2 = vscode.window.createInputBox();

		input1.title = 'feature name ?';
		input2.title = 'sub name ?';

		input1.ignoreFocusOut = true;
		input2.ignoreFocusOut = true;

		input1.onDidAccept(() => {
			if (!input1.value.trim()) {
				input1.validationMessage = 'input please~';

				return;
			}
			input2.show();
		});

		input2.onDidAccept(() => {
			if (!input2.value.trim()) {
				input2.validationMessage = 'input please~';

				return;
			}
			input2.hide();
			
			executeFeatureModule(input1.value.trim(), input2.value.trim());
		});

		input1.show();
	});

	let disposableSubAdd = vscode.commands.registerCommand('jordy-vsce.sub-add', (arg0: VscodeExplorerContextDto, arg1: VscodeExplorerContextDto[]) => {
		const input = vscode.window.createInputBox();

		input.title = 'sub name ?';
		input.ignoreFocusOut = true;

		input.onDidAccept(() => {
			if (!input.value.trim()) {
				input.validationMessage = 'input please~';

				return;
			}
			input.hide();	
			executeSubModule(arg0.path, input.value.trim());
		});

		input.show();
	});

	let disposableUiAdd = vscode.commands.registerCommand('jordy-vsce.ui-add', (arg0: VscodeExplorerContextDto, arg1: VscodeExplorerContextDto[]) => {

		const input = vscode.window.createInputBox();

		input.title = 'component name ?';
		input.ignoreFocusOut = true;

		const pick = vscode.window.createQuickPick();

		pick.title = 'component type ?';
		pick.canSelectMany = false;
		
		input.onDidAccept(() => {
			if (!input.value.trim()) {
				input.validationMessage = 'input please~';

				return;
			}
			input.hide();	
			pick.show();
			vscode.window.showQuickPick([
				'normal', 'memo', 'dialog', 'imperative'
			])
			.then(pickValue => {
				pickValue && executeUiComponent(arg0.path, input.value.trim(), pickValue);
			});
		
		});

		input.show();
	});

	let disposableStorybookAdd = vscode.commands.registerCommand('jordy-vsce.sb-add', (arg0: VscodeExplorerContextDto, arg1: VscodeExplorerContextDto[]) => {
		const pick = vscode.window.createQuickPick();

		pick.title = 'component type ?';
		pick.canSelectMany = false;
		
		pick.show();
			vscode.window.showQuickPick([
				'normal', 'dialog', 'imperative'
			])
			.then(pickValue => {
				pickValue && executeStorybook(arg0.path, pickValue);
			});
	});

	context.subscriptions.push(disposableFeatAdd, disposableSubAdd, disposableUiAdd, disposableStorybookAdd);
}

// this method is called when your extension is deactivated
export function deactivate() {}
