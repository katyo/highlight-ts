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
