import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';

export const editorOptions: monaco.editor.IStandaloneEditorConstructionOptions =
  {
    acceptSuggestionOnCommitCharacter: true,
    acceptSuggestionOnEnter: 'on',
    accessibilitySupport: 'auto',
    autoClosingBrackets: 'always',
    autoIndent: 'full',
    automaticLayout: true,
    bracketPairColorization: {
      enabled: true,
    },
    codeLens: true,
    colorDecorators: true,
    contextmenu: true,
    cursorBlinking: 'blink',
    cursorSmoothCaretAnimation: 'off',
    cursorStyle: 'line',
    disableLayerHinting: false,
    disableMonospaceOptimizations: false,
    dragAndDrop: false,
    fixedOverflowWidgets: false,
    folding: true,
    foldingStrategy: 'auto',
    fontLigatures: false,
    formatOnPaste: false,
    formatOnType: false,
    hideCursorInOverviewRuler: false,
    links: true,
    mouseWheelZoom: false,
    multiCursorMergeOverlapping: true,
    multiCursorModifier: 'alt',
    overviewRulerBorder: true,
    overviewRulerLanes: 2,
    quickSuggestions: true,
    quickSuggestionsDelay: 100,
    readOnly: false,
    renderControlCharacters: false,
    renderFinalNewline: 'on',
    renderLineHighlight: 'all',
    renderWhitespace: 'none',
    revealHorizontalRightPadding: 30,
    roundedSelection: true,
    rulers: [],
    scrollBeyondLastColumn: 5,
    scrollBeyondLastLine: true,
    selectOnLineNumbers: true,
    selectionClipboard: true,
    selectionHighlight: true,
    showFoldingControls: 'mouseover',
    smoothScrolling: false,
    suggestOnTriggerCharacters: true,
    wordBasedSuggestions: true,
    wordSeparators: '~!@#$%^&*()-=+[{]}|;:\'",.<>/?',
    wordWrap: 'on',
    wordWrapBreakAfterCharacters: '\t})]?|&,;',
    wordWrapBreakBeforeCharacters: '{([+',
    wordWrapColumn: 80,
    wrappingIndent: 'none',
  };

export const htmlDefaultTemplate: string = '<div>Hello World!</div>';
export const htmlDefaultTemplate2: string = `
<!-- You can remove all the code below and start from a clean slate -->

<h1>This is heading 1</h1>
<h2>This is heading 2</h2>
<h3>This is heading 3</h3>
<h4>This is heading 4</h4>
<h5>This is heading 5</h5>
<h6>This is heading 6</h6>

<p>Here is a paragraph of text.</p>
<hr />

<abbr>Specifies abbreviations.</abbr>
<br />
<b>It is used to bold text.</b>

<br />
<cite>It specifies the work title.</cite>
<br />
<code>Specifies text in computer code.</code>
<br />
<strong>Used for describing important text.</strong>
<br />
<i>Formats text in document to italic text.</i>
<br />
<strike>Skrike through text</strike>
<br />
<a href="https://google.com">Go to google</a>

<ul>
    <li>Unordered Item 1</li>
    <li>Unordered Item 2</li>
    <li>Unordered Item 3</li>
    <li>Unordered Item 4</li>
</ul>

<ol>
    <li>Unordered Item 1</li>
    <li>Unordered Item 2</li>
    <li>Unordered Item 3</li>
    <li>Unordered Item 4</li>
</ol>
`;
export const cssDefaultTemplate: string = `body {
  margin: 0;
  padding: 0;
}
`;

export const cssDefaultTemplate2: string = `h1 {
  color: green;
}
`;
