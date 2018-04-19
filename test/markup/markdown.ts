export default [
    `# hello world

you can write text [with links](http://example.com) inline or [link references][1].

* one _thing_ has *em*phasis
* two __things__ are **bold**

[1]: http://example.com

---

hello world
===========

<this_is inline="xml"></this_is>

> markdown is so cool

    so are code segments

1. one thing (yeah!)
2. two thing \`i can write code\`, and \`more\` wipee!`,
    `<span class="hljs-section"># hello world</span>

you can write text [<span class="hljs-string">with links</span>](<span class="hljs-link">http://example.com</span>) inline or [<span class="hljs-string">link references</span>][<span class="hljs-symbol">1</span>].
<span class="hljs-bullet">
* </span>one <span class="hljs-emphasis">_thing_</span> has <span class="hljs-emphasis">*em*</span>phasis
<span class="hljs-bullet">* </span>two <span class="hljs-strong">__things__</span> are <span class="hljs-strong">**bold**</span>

[<span class="hljs-symbol">1</span>]: <span class="hljs-link">http://example.com</span>

---

<span class="hljs-section">hello world
===========</span>

<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">this_is</span> <span class="hljs-attr">inline</span>=<span class="hljs-string">"xml"</span>&gt;</span></span><span class="xml"><span class="hljs-tag">&lt;/<span class="hljs-name">this_is</span>&gt;</span></span>

<span class="hljs-quote">&gt; markdown is so cool</span>

<span class="hljs-code">    so are code segments</span>
<span class="hljs-bullet">
1. </span>one thing (yeah!)
<span class="hljs-bullet">2. </span>two thing <span class="hljs-code">\`i can write code\`</span>, and <span class="hljs-code">\`more\`</span> wipee!`,
];

export const code = [
    `    var code = true;


\`\`\`javascript
var code = true;
\`\`\`

Inline \`code\`, and \`more code\`.`,
    `<span class="hljs-code">    var code = true;</span>


<span class="hljs-code">\`\`\`javascript
var code = true;
\`\`\`</span>

Inline <span class="hljs-code">\`code\`</span>, and <span class="hljs-code">\`more code\`</span>.`
];
