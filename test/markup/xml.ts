export const space_attributes = [
    `<img src ="/pics/foo.jpg">
<img src= "/pics/foo.jpg">
<img src = "/pics/foo.jpg">`,
    `<span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span> =<span class="hljs-string">"/pics/foo.jpg"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>= <span class="hljs-string">"/pics/foo.jpg"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span> = <span class="hljs-string">"/pics/foo.jpg"</span>&gt;</span>`
];

export const unquoted_attributes = [
    `<img src="/pics/foo.jpg">
<img src='/pics/foo.jpg'>
<img src=/pics/foo.jpg>
<img src=/pics/>
<img src=/pics />
<img alt=''/>
<img alt/>
<img alt=''>
<img alt>`,
    `<span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"/pics/foo.jpg"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">'/pics/foo.jpg'</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">/pics/foo.jpg</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">/pics/</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">/pics</span> /&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">''</span>/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">alt</span>/&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">''</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">alt</span>&gt;</span>`
];
