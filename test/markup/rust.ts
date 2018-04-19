export const comments = [
    `/* rust has
/* nested /* block */ */
*/ comments`,
    `<span class="hljs-comment">/* rust has
<span class="hljs-comment">/* nested <span class="hljs-comment">/* block */</span> */</span>
*/</span> comments`
];

export const numbers = [
    `123;
123usize;
123_usize;
0xff00;
0xff_u8;
0b1111111110010000;
0b1111_1111_1001_0000_i32;
0o764317;
0o764317_u16;
123.0;
0.1;
0.1f32;
12E+99_f64;`,
    `<span class="hljs-number">123</span>;
<span class="hljs-number">123usize</span>;
<span class="hljs-number">123_usize</span>;
<span class="hljs-number">0xff00</span>;
<span class="hljs-number">0xff_u8</span>;
<span class="hljs-number">0b1111111110010000</span>;
<span class="hljs-number">0b1111_1111_1001_0000_i32</span>;
<span class="hljs-number">0o764317</span>;
<span class="hljs-number">0o764317_u16</span>;
<span class="hljs-number">123.0</span>;
<span class="hljs-number">0.1</span>;
<span class="hljs-number">0.1f32</span>;
<span class="hljs-number">12E+99_f64</span>;`
];

export const strings = [
    `'a';
'\\n';
'\\x1A';
'\\u12AS';
'\\U1234ASDF';
b'a';

"hello";
b"hello";

r"hello";
r###"world"###;
r##" "###
"# "##;
`,
    `<span class="hljs-string">'a'</span>;
<span class="hljs-string">'\\n'</span>;
<span class="hljs-string">'\\x1A'</span>;
<span class="hljs-string">'\\u12AS'</span>;
<span class="hljs-string">'\\U1234ASDF'</span>;
<span class="hljs-string">b'a'</span>;

<span class="hljs-string">"hello"</span>;
<span class="hljs-string">b"hello"</span>;

<span class="hljs-string">r"hello"</span>;
<span class="hljs-string">r###"world"###</span>;
<span class="hljs-string">r##" "###
"# "##</span>;`
];

export const traits = [
    `fn sqr(i: i32) { i * i }
trait Minimum : Copy {}
pub trait Builder where Self: Sized + Iterator<Item=Event> {}`,
    `<span class="hljs-function"><span class="hljs-keyword">fn</span> <span class="hljs-title">sqr</span></span>(i: <span class="hljs-built_in">i32</span>) { i * i }
<span class="hljs-class"><span class="hljs-keyword">trait</span> <span class="hljs-title">Minimum</span></span> : <span class="hljs-built_in">Copy</span> {}
<span class="hljs-keyword">pub</span> <span class="hljs-class"><span class="hljs-keyword">trait</span> <span class="hljs-title">Builder</span></span> <span class="hljs-keyword">where</span> <span class="hljs-keyword">Self</span>: <span class="hljs-built_in">Sized</span> + <span class="hljs-built_in">Iterator</span>&lt;Item=Event&gt; {}`
];

export const types = [
    `type A: Trait;
type A;
type A = B;
type R<T> = m::R<T, ConcreteError>`,
    `<span class="hljs-class"><span class="hljs-keyword">type</span> <span class="hljs-title">A</span></span>: Trait;
<span class="hljs-class"><span class="hljs-keyword">type</span> <span class="hljs-title">A</span></span>;
<span class="hljs-class"><span class="hljs-keyword">type</span> <span class="hljs-title">A</span></span> = B;
<span class="hljs-class"><span class="hljs-keyword">type</span> <span class="hljs-title">R</span></span>&lt;T&gt; = m::R&lt;T, ConcreteError&gt;`
];

export const variables = [
    `let foo;
let mut bar;
let _foo_bar;`,
    `<span class="hljs-keyword">let</span> foo;
<span class="hljs-keyword">let</span> <span class="hljs-keyword">mut</span> bar;
<span class="hljs-keyword">let</span> _foo_bar;`
];
