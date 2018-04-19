export default [
    `function $initHighlight(block, cls) {
  try {
    if (cls.search(/\\bno\\-highlight\\b/) != -1)
      return process(block, true, 0x0F) +
             \` class="\${cls}"\`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }
}

export  $initHighlight;`,
    `<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">$initHighlight</span>(<span class="hljs-params">block, cls</span>) </span>{
  <span class="hljs-keyword">try</span> {
    <span class="hljs-keyword">if</span> (cls.search(<span class="hljs-regexp">/\\bno\\-highlight\\b/</span>) != <span class="hljs-number">-1</span>)
      <span class="hljs-keyword">return</span> process(block, <span class="hljs-literal">true</span>, <span class="hljs-number">0x0F</span>) +
             <span class="hljs-string">\` class="<span class="hljs-subst">\${cls}</span>"\`</span>;
  } <span class="hljs-keyword">catch</span> (e) {
    <span class="hljs-comment">/* handle exception */</span>
  }
  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span> / <span class="hljs-number">2</span>; i &lt; classes.length; i++) {
    <span class="hljs-keyword">if</span> (checkCondition(classes[i]) === <span class="hljs-literal">undefined</span>)
      <span class="hljs-built_in">console</span>.log(<span class="hljs-string">\'undefined\'</span>);
  }
}

<span class="hljs-keyword">export</span>  $initHighlight;`
];

export const sample1 = [
    `// This was mis-detected as HSP and Perl because parsing of
// keywords in those languages allowed adjacent dots

window.requestAnimationFrame(function render() {
  var pos = state.pos;

  canvasEl.width = 500;
  canvasEl.height = 300;

  if (dpad.right) {
    pos.x += 3;
  } else if (dpad.left) {
    pos.x -= 3;
  }

  ctx.fillStyle = '#AF8452';
  ctx.fillRect(pos.x + 5, pos.y - 10, 10, 10);

  window.requestAnimationFrame(render);
});`,
    `<span class="hljs-comment">// This was mis-detected as HSP and Perl because parsing of</span>
<span class="hljs-comment">// keywords in those languages allowed adjacent dots</span>

<span class="hljs-built_in">window</span>.requestAnimationFrame(<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">render</span>(<span class="hljs-params"></span>) </span>{
  <span class="hljs-keyword">var</span> pos = state.pos;

  canvasEl.width = <span class="hljs-number">500</span>;
  canvasEl.height = <span class="hljs-number">300</span>;

  <span class="hljs-keyword">if</span> (dpad.right) {
    pos.x += <span class="hljs-number">3</span>;
  } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (dpad.left) {
    pos.x -= <span class="hljs-number">3</span>;
  }

  ctx.fillStyle = <span class="hljs-string">\'#AF8452\'</span>;
  ctx.fillRect(pos.x + <span class="hljs-number">5</span>, pos.y - <span class="hljs-number">10</span>, <span class="hljs-number">10</span>, <span class="hljs-number">10</span>);

  <span class="hljs-built_in">window</span>.requestAnimationFrame(render);
});`
];

export const short_plain = [
    `const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
}`,
    `<span class="hljs-keyword">const</span> cluster = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'cluster\'</span>);
<span class="hljs-keyword">const</span> numCPUs = <span class="hljs-built_in">require</span>(<span class="hljs-string">\'os\'</span>).cpus().length;

<span class="hljs-keyword">if</span> (cluster.isMaster) {
  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span>; i &lt; numCPUs; i++) {
    cluster.fork();
  }
}`
];

export const arrow_functions = [
    `var f = x => x;
f(x => x + (y=2, z=undefined, ...rest) => y);
() => null;`,
    `<span class="hljs-keyword">var</span> f = <span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> x;
f(<span class="hljs-function"><span class="hljs-params">x</span> =&gt;</span> x + <span class="hljs-function">(<span class="hljs-params">y=<span class="hljs-number">2</span>, z=<span class="hljs-literal">undefined</span>, ...rest</span>) =&gt;</span> y);
<span class="hljs-function"><span class="hljs-params">()</span> =&gt;</span> <span class="hljs-literal">null</span>;`
];

export const classes = [
    `
class Car extends Vehicle {
  constructor(speed, cost) {
    super(speed);

    var c = Symbol('cost');
    this[c] = cost;

    this.intro = \`This is a car runs at
      \${speed}.\`;
  }
}`,
    `<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Car</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">Vehicle</span> </span>{
  <span class="hljs-keyword">constructor</span>(speed, cost) {
    <span class="hljs-keyword">super</span>(speed);

    <span class="hljs-keyword">var</span> c = <span class="hljs-built_in">Symbol</span>(<span class="hljs-string">'cost'</span>);
    <span class="hljs-keyword">this</span>[c] = cost;

    <span class="hljs-keyword">this</span>.intro = <span class="hljs-string">\`This is a car runs at
      <span class="hljs-subst">\${speed}</span>.\`</span>;
  }
}`
];

export const default_parameters = [
    `function visibleTodoFilter(state = 'watch', action) {}`,
    `<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">visibleTodoFilter</span>(<span class="hljs-params">state = <span class="hljs-string">'watch'</span>, action</span>) </span>{}
`
];

export const jsx = [
    `var jsx = <node/>;
var jsx = <node><child/></node>;
var jsx = <node>...<child>...</child></node>;
var jsx = <div><span><br /></span></div>;
var x = 5;
return (<node attr="value"></node>);`,
    `<span class="hljs-keyword">var</span> jsx = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">node</span>/&gt;</span></span>;
<span class="hljs-keyword">var</span> jsx = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">node</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">child</span>/&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">node</span>&gt;</span></span>;
<span class="hljs-keyword">var</span> jsx = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">node</span>&gt;</span>...<span class="hljs-tag">&lt;<span class="hljs-name">child</span>&gt;</span>...<span class="hljs-tag">&lt;/<span class="hljs-name">child</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">node</span>&gt;</span></span>;
<span class="hljs-keyword">var</span> jsx = <span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">br</span> /&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></span>;
<span class="hljs-keyword">var</span> x = <span class="hljs-number">5</span>;
<span class="hljs-keyword">return</span> (<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">node</span> <span class="hljs-attr">attr</span>=<span class="hljs-string">"value"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">node</span>&gt;</span></span>);`
];

export const keywords = [
    `function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
             ' class=""';
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      return /\d+[\s/]/g;
  }
}`,
    `<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">$initHighlight</span>(<span class="hljs-params">block, cls</span>) </span>{
  <span class="hljs-keyword">try</span> {
    <span class="hljs-keyword">if</span> (cls.search(<span class="hljs-regexp">/\bno\-highlight\b/</span>) != <span class="hljs-number">-1</span>)
      <span class="hljs-keyword">return</span> process(block, <span class="hljs-literal">true</span>, <span class="hljs-number">0x0F</span>) +
             <span class="hljs-string">' class=""'</span>;
  } <span class="hljs-keyword">catch</span> (e) {
    <span class="hljs-comment">/* handle exception */</span>
  }
  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> i = <span class="hljs-number">0</span> / <span class="hljs-number">2</span>; i &lt; classes.length; i++) {
    <span class="hljs-keyword">if</span> (checkCondition(classes[i]) === <span class="hljs-literal">undefined</span>)
      <span class="hljs-keyword">return</span> <span class="hljs-regexp">/\d+[\s/]/g</span>;
  }
}`
];

export const method_call = [
    `x.continue(0);`,
    `x.continue(<span class="hljs-number">0</span>);`
];

export const modules = [
    `//------ underscore.js ------
export default function (obj) {};
export function each(obj, iterator, context) {};
export { each as forEach };
export function something() {};

//------ main.js ------
import _, { each, something as otherthing } from 'underscore';`,
    `<span class="hljs-comment">//------ underscore.js ------</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-function"><span class="hljs-keyword">function</span> (<span class="hljs-params">obj</span>) </span>{};
<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">each</span>(<span class="hljs-params">obj, iterator, context</span>) </span>{};
<span class="hljs-keyword">export</span> { each <span class="hljs-keyword">as</span> forEach };
<span class="hljs-keyword">export</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">something</span>(<span class="hljs-params"></span>) </span>{};

<span class="hljs-comment">//------ main.js ------</span>
<span class="hljs-keyword">import</span> _, { each, something <span class="hljs-keyword">as</span> otherthing } <span class="hljs-keyword">from</span> <span class="hljs-string">'underscore'</span>;`
];

export const object_attrs = [
    `{
  key: value,
  key2: value,
  'key-3': value,
  key4: false ? undefined : true
}`,
    `{
  <span class="hljs-attr">key</span>: value,
  <span class="hljs-attr">key2</span>: value,
  <span class="hljs-string">'key-3'</span>: value,
  <span class="hljs-attr">key4</span>: <span class="hljs-literal">false</span> ? <span class="hljs-literal">undefined</span> : <span class="hljs-literal">true</span>
}`
];

export const shebang = [
    `#!/usr/bin/env node

var a = 1;`,
    `<span class="hljs-meta">#!/usr/bin/env node</span>

<span class="hljs-keyword">var</span> a = <span class="hljs-number">1</span>;`
];

export const template_string = [
    `\`string \${foo + \`str\${undefined}ing\`}\`;`,
    `<span class="hljs-string">\`string <span class="hljs-subst">\${foo + <span class="hljs-string">\`str<span class="hljs-subst">\${<span class="hljs-literal">undefined</span>}</span>ing\`</span>}</span>\`</span>;`
];
