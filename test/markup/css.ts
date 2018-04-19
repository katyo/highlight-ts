export default [
    `@font-face {
  font-family: Chunkfive; src: url('Chunkfive.otf');
}

body, .usertext {
  color: #F0F0F0; background: #600;
  font-family: Chunkfive, sans;
}

@import url(print.css);
@media print {
  a[href^=http]::after {
    content: attr(href)
  }
}`,
    `@<span class="hljs-keyword">font-face</span> {
  <span class="hljs-attribute">font-family</span>: Chunkfive; <span class="hljs-attribute">src</span>: <span class="hljs-built_in">url</span>(<span class="hljs-string">'Chunkfive.otf'</span>);
}

<span class="hljs-selector-tag">body</span>, <span class="hljs-selector-class">.usertext</span> {
  <span class="hljs-attribute">color</span>: <span class="hljs-number">#F0F0F0</span>; <span class="hljs-attribute">background</span>: <span class="hljs-number">#600</span>;
  <span class="hljs-attribute">font-family</span>: Chunkfive, sans;
}

@<span class="hljs-keyword">import</span> url(print.css);
@<span class="hljs-keyword">media</span> print {
  <span class="hljs-selector-tag">a</span><span class="hljs-selector-attr">[href^=http]</span><span class="hljs-selector-pseudo">::after</span> {
    <span class="hljs-attribute">content</span>: <span class="hljs-built_in">attr</span>(href)
  }
}`
];

export const pseudo_selector = [
    `li:not(.red){}
li:not(.red):not(.green){}`,
    `<span class="hljs-selector-tag">li</span><span class="hljs-selector-pseudo">:not(.red)</span>{}
<span class="hljs-selector-tag">li</span><span class="hljs-selector-pseudo">:not(.red)</span><span class="hljs-selector-pseudo">:not(.green)</span>{}`
];

export const url = [
    `div { background: url("foo/bar/baz.jpg") }
div { background: url('foo/bar/baz.jpg') }
div { background: url(foo/bar/baz.jpg) }
div { background-image: url(data:image/png;base64,TWFuIGlzIGRpc3=) }
div { background-image: url("data:image/png;base64,TWFuIGlzIGRpc3=") }
div { background-image: url('data:image/png;base64,TWFuIGlzIGRpc3=') }`,
    `<span class="hljs-selector-tag">div</span> { <span class="hljs-attribute">background</span>: <span class="hljs-built_in">url</span>(<span class="hljs-string">"foo/bar/baz.jpg"</span>) }
<span class="hljs-selector-tag">div</span> { <span class="hljs-attribute">background</span>: <span class="hljs-built_in">url</span>(<span class="hljs-string">'foo/bar/baz.jpg'</span>) }
<span class="hljs-selector-tag">div</span> { <span class="hljs-attribute">background</span>: <span class="hljs-built_in">url</span>(foo/bar/baz.jpg) }
<span class="hljs-selector-tag">div</span> { <span class="hljs-attribute">background-image</span>: <span class="hljs-built_in">url</span>(data:image/png;base64,TWFuIGlzIGRpc3=) }
<span class="hljs-selector-tag">div</span> { <span class="hljs-attribute">background-image</span>: <span class="hljs-built_in">url</span>(<span class="hljs-string">"data:image/png;base64,TWFuIGlzIGRpc3="</span>) }
<span class="hljs-selector-tag">div</span> { <span class="hljs-attribute">background-image</span>: <span class="hljs-built_in">url</span>(<span class="hljs-string">'data:image/png;base64,TWFuIGlzIGRpc3='</span>) }`
];
