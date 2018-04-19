export default [
    `@import "fruits";

@rhythm: 1.5em;

@media screen and (min-resolution: 2dppx) {
    body {font-size: 125%}
}

section > .foo + #bar:hover [href*="less"] {
    margin:     @rhythm 0 0 @rhythm;
    padding:    calc(5% + 20px);
    background: #f00ba7 url(http://placehold.alpha-centauri/42.png) no-repeat;
    background-image: linear-gradient(-135deg, wheat, fuchsia) !important ;
    background-blend-mode: multiply;
}

@font-face {
    font-family: /* ? */ 'Omega';
    src: url('../fonts/omega-webfont.woff?v=2.0.2');
}

.icon-baz::before {
    display:     inline-block;
    font-family: "Omega", Alpha, sans-serif;
    content:     "\f085";
    color:       rgba(98, 76 /* or 54 */, 231, .75);
}`,
    `<span class="hljs-keyword">@import</span> <span class="hljs-string">"fruits"</span>;

<span class="hljs-variable">@rhythm:</span> <span class="hljs-number">1.5em</span>;

<span class="hljs-keyword">@media</span> screen and (<span class="hljs-attribute">min-resolution</span>: <span class="hljs-number">2dppx</span>) {
    <span class="hljs-selector-tag">body</span> {<span class="hljs-attribute">font-size</span>: <span class="hljs-number">125%</span>}
}

<span class="hljs-selector-tag">section</span> &gt; <span class="hljs-selector-class">.foo</span> + <span class="hljs-selector-id">#bar</span><span class="hljs-selector-pseudo">:hover</span> <span class="hljs-selector-attr">[href*="less"]</span> {
    <span class="hljs-attribute">margin</span>:     <span class="hljs-variable">@rhythm</span> <span class="hljs-number">0</span> <span class="hljs-number">0</span> <span class="hljs-variable">@rhythm</span>;
    <span class="hljs-attribute">padding</span>:    calc(<span class="hljs-number">5%</span> + <span class="hljs-number">20px</span>);
    <span class="hljs-attribute">background</span>: <span class="hljs-number">#f00ba7</span> url(<span class="hljs-string">http://placehold.alpha-centauri/42.png</span>) no-repeat;
    <span class="hljs-attribute">background-image</span>: linear-gradient(-<span class="hljs-number">135deg</span>, wheat, fuchsia) <span class="hljs-meta">!important</span> ;
    <span class="hljs-attribute">background-blend-mode</span>: multiply;
}

<span class="hljs-keyword">@font-face</span> {
    <span class="hljs-attribute">font-family</span>: <span class="hljs-comment">/* ? */</span> <span class="hljs-string">'Omega'</span>;
    <span class="hljs-attribute">src</span>: url(<span class="hljs-string">'../fonts/omega-webfont.woff?v=2.0.2'</span>);
}

<span class="hljs-selector-class">.icon-baz</span><span class="hljs-selector-pseudo">::before</span> {
    <span class="hljs-attribute">display</span>:     inline-block;
    <span class="hljs-attribute">font-family</span>: <span class="hljs-string">"Omega"</span>, Alpha, sans-serif;
    <span class="hljs-attribute">content</span>:     <span class="hljs-string">"\f085"</span>;
    <span class="hljs-attribute">color</span>:       rgba(<span class="hljs-number">98</span>, <span class="hljs-number">76</span> <span class="hljs-comment">/* or 54 */</span>, <span class="hljs-number">231</span>, .<span class="hljs-number">75</span>);
}`
];

export const selectors = [
    `#foo {
    tag #bar {}
    > #bar {}
    #bar {}
    &#bar {}
    &:hover {}
    height: ~"@{height}px";
}`,
    `<span class="hljs-selector-id">#foo</span> {
    <span class="hljs-selector-tag">tag</span> <span class="hljs-selector-id">#bar</span> {}
    &gt; <span class="hljs-selector-id">#bar</span> {}
    <span class="hljs-selector-id">#bar</span> {}
    <span class="hljs-selector-tag">&amp;</span><span class="hljs-selector-id">#bar</span> {}
    <span class="hljs-selector-tag">&amp;</span><span class="hljs-selector-pseudo">:hover</span> {}
    <span class="hljs-attribute">height</span>: <span class="hljs-string">~"@{height}px"</span>;
}`
];
