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
