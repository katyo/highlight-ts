export const infix = [
    `infix 3 \`foo\`
infixl 6 \`bar\`
infixr 9 \`baz\``,
    `<span class="hljs-keyword">infix</span> <span class="hljs-number">3</span> \`foo\`
<span class="hljs-keyword">infixl</span> <span class="hljs-number">6</span> \`bar\`
<span class="hljs-keyword">infixr</span> <span class="hljs-number">9</span> \`baz\``
];

export const nested_comments = [
    `{- this is a {- nested -} comment -}`,
    `<span class="hljs-comment">{- this is a <span class="hljs-comment">{- nested -}</span> comment -}</span>`
];
