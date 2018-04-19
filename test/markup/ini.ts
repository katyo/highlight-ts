export default [
    `; boilerplate
[package]
name = "some_name"
authors = ["Author"]
description = "This is \\
a description"

[[lib]]
name = \${NAME}
default = True
auto = no
counter = 1_000`,
    `<span class="hljs-comment">; boilerplate</span>
<span class="hljs-section">[package]</span>
<span class="hljs-attr">name</span> = <span class="hljs-string">"some_name"</span>
<span class="hljs-attr">authors</span> = [<span class="hljs-string">"Author"</span>]
<span class="hljs-attr">description</span> = <span class="hljs-string">"This is \\
a description"</span>
<span class="hljs-section">
[[lib]]</span>
<span class="hljs-attr">name</span> = <span class="hljs-variable">\${NAME}</span>
<span class="hljs-attr">default</span> = <span class="hljs-literal">True</span>
<span class="hljs-attr">auto</span> = <span class="hljs-literal">no</span>
<span class="hljs-attr">counter</span> = <span class="hljs-number">1_000</span>`
];
