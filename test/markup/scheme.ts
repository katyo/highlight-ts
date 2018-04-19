export const lambda = [
    `(lambda (x y z) (+ y z))`,
    `(<span class="hljs-name"><span class="hljs-builtin-name">lambda</span></span> (x y z) (<span class="hljs-name"><span class="hljs-builtin-name">+</span></span> y z))`
];

export const quoted = [
    `(scheme 'a '(a quoted (list)) \`(quoted))`,
    `(<span class="hljs-name">scheme</span> <span class="hljs-symbol">'a</span> '(a quoted (list)) \`(quoted))`
];
