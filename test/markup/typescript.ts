export const classes = [
    `class Car extends Vehicle {
  constructor(speed, cost) {
    super(speed);

    var c = Symbol('cost');
    this[c] = cost;

    this.intro = \`This is a car runs at
      \${speed}.\`;
  }
}`,
    `<span class="hljs-keyword">class</span> Car <span class="hljs-keyword">extends</span> Vehicle {
  <span class="hljs-keyword">constructor</span>(<span class="hljs-params">speed, cost</span>) {
    <span class="hljs-keyword">super</span>(speed);

    <span class="hljs-keyword">var</span> c = Symbol(<span class="hljs-string">'cost'</span>);
    <span class="hljs-keyword">this</span>[c] = cost;

    <span class="hljs-keyword">this</span>.intro = <span class="hljs-string">\`This is a car runs at
      <span class="hljs-subst">\${speed}</span>.\`</span>;
  }
}`
];

export const functions = [
    `var noop = function() {};

var identity = function(foo) {
  return foo;
};

function println(value: string);

function getArray(): number[] {
  return [1, 2];
}`,
    `<span class="hljs-keyword">var</span> noop = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{};

<span class="hljs-keyword">var</span> identity = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">foo</span>) </span>{
  <span class="hljs-keyword">return</span> foo;
};

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">println</span>(<span class="hljs-params">value: <span class="hljs-built_in">string</span></span>)</span>;

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getArray</span>(<span class="hljs-params"></span>): <span class="hljs-title">number</span>[] </span>{
  <span class="hljs-keyword">return</span> [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>];
}`
];

export const jsx = [
    `export function getModuleInstanceState(node: Node): ModuleInstanceState {
    // A module is uninstantiated if it contains only
    // 1. interface declarations, type alias declarations
    if (node.kind === SyntaxKind.InterfaceDeclaration || node.kind === SyntaxKind.TypeAliasDeclaration) {
        return ModuleInstanceState.NonInstantiated;
    }
    // 2. const enum declarations
    else if (isConstEnumDeclaration(node)) {
        return ModuleInstanceState.ConstEnumOnly;
    }
    // 3. non-exported import declarations
    else if ((node.kind === SyntaxKind.ImportDeclaration || node.kind === SyntaxKind.ImportEqualsDeclaration) && !(node.flags & NodeFlags.Export)) {
        return ModuleInstanceState.NonInstantiated;
    }
    // 4. other uninstantiated module declarations.
    else if (node.kind === SyntaxKind.ModuleBlock) {
        let state = ModuleInstanceState.NonInstantiated;
        forEachChild(node, n => {
            switch (getModuleInstanceState(n)) {
                case ModuleInstanceState.NonInstantiated:
                    // child is non-instantiated - continue searching
                    return false;
                case ModuleInstanceState.ConstEnumOnly:
                    // child is const enum only - record state and continue searching
                    state = ModuleInstanceState.ConstEnumOnly;
                    return false;
                case ModuleInstanceState.Instantiated:
                    // child is instantiated - record state and stop
                    state = ModuleInstanceState.Instantiated;
                    return true;
            }
        });
        return state;
    }
    else if (node.kind === SyntaxKind.ModuleDeclaration) {
        return getModuleInstanceState((<ModuleDeclaration>node).body);
    }
    else {
        return ModuleInstanceState.Instantiated;
    }
}`,
    `<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getModuleInstanceState</span>(<span class="hljs-params">node: Node</span>): <span class="hljs-title">ModuleInstanceState</span> </span>{
    <span class="hljs-comment">// A module is uninstantiated if it contains only</span>
    <span class="hljs-comment">// 1. interface declarations, type alias declarations</span>
    <span class="hljs-keyword">if</span> (node.kind === SyntaxKind.InterfaceDeclaration || node.kind === SyntaxKind.TypeAliasDeclaration) {
        <span class="hljs-keyword">return</span> ModuleInstanceState.NonInstantiated;
    }
    <span class="hljs-comment">// 2. const enum declarations</span>
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (isConstEnumDeclaration(node)) {
        <span class="hljs-keyword">return</span> ModuleInstanceState.ConstEnumOnly;
    }
    <span class="hljs-comment">// 3. non-exported import declarations</span>
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> ((node.kind === SyntaxKind.ImportDeclaration || node.kind === SyntaxKind.ImportEqualsDeclaration) &amp;&amp; !(node.flags &amp; NodeFlags.Export)) {
        <span class="hljs-keyword">return</span> ModuleInstanceState.NonInstantiated;
    }
    <span class="hljs-comment">// 4. other uninstantiated module declarations.</span>
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (node.kind === SyntaxKind.ModuleBlock) {
        <span class="hljs-keyword">let</span> state = ModuleInstanceState.NonInstantiated;
        forEachChild(node, <span class="hljs-function"><span class="hljs-params">n</span> =&gt;</span> {
            <span class="hljs-keyword">switch</span> (getModuleInstanceState(n)) {
                <span class="hljs-keyword">case</span> ModuleInstanceState.NonInstantiated:
                    <span class="hljs-comment">// child is non-instantiated - continue searching</span>
                    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
                <span class="hljs-keyword">case</span> ModuleInstanceState.ConstEnumOnly:
                    <span class="hljs-comment">// child is const enum only - record state and continue searching</span>
                    state = ModuleInstanceState.ConstEnumOnly;
                    <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
                <span class="hljs-keyword">case</span> ModuleInstanceState.Instantiated:
                    <span class="hljs-comment">// child is instantiated - record state and stop</span>
                    state = ModuleInstanceState.Instantiated;
                    <span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;
            }
        });
        <span class="hljs-keyword">return</span> state;
    }
    <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (node.kind === SyntaxKind.ModuleDeclaration) {
        <span class="hljs-keyword">return</span> getModuleInstanceState((&lt;ModuleDeclaration&gt;node).body);
    }
    <span class="hljs-keyword">else</span> {
        <span class="hljs-keyword">return</span> ModuleInstanceState.Instantiated;
    }
}`
];

export const module_id = [
    `@Component({
  selector: 'my-example',
  directives: [SomeDirective],
  templateUrl: './my-example.component.html',
  moduleId: module.id,
  styles: [\`
    .my-example {
      padding: 5px;
    }
  \`]
})
export class MyExampleComponent {
  someProp: string = "blah";
}`,
    `<span class="hljs-meta">@Component</span>({
  selector: <span class="hljs-string">'my-example'</span>,
  directives: [SomeDirective],
  templateUrl: <span class="hljs-string">'./my-example.component.html'</span>,
  moduleId: <span class="hljs-built_in">module</span>.id,
  styles: [<span class="hljs-string">\`
    .my-example {
      padding: 5px;
    }
  \`</span>]
})
<span class="hljs-keyword">export</span> <span class="hljs-keyword">class</span> MyExampleComponent {
  someProp: <span class="hljs-built_in">string</span> = <span class="hljs-string">"blah"</span>;
}
`
];
