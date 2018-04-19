export const strings = [
    `f'{name}'
f"{name + 5}"
>>> f"""
... {
...    name
... }
... """
rf"{name}"
fr"{name}"
f"{name + f'{name}'}"`,
    `<span class="hljs-string">f'<span class="hljs-subst">{name}</span>'</span>
<span class="hljs-string">f"<span class="hljs-subst">{name + <span class="hljs-number">5</span>}</span>"</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-string">f"""
<span class="hljs-meta">... </span><span class="hljs-subst">{
<span class="hljs-meta">... </span>   name
<span class="hljs-meta">... </span>}</span>
<span class="hljs-meta">... </span>"""</span>
<span class="hljs-string">rf"<span class="hljs-subst">{name}</span>"</span>
<span class="hljs-string">fr"<span class="hljs-subst">{name}</span>"</span>
<span class="hljs-string">f"<span class="hljs-subst">{name + <span class="hljs-string">f'<span class="hljs-subst">{name}</span>'</span>}</span>"</span>`
];

export const function_header = [
    `def f(x: int) -> None:
    pass`,
    `<span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">f</span><span class="hljs-params">(x: int)</span> -&gt; <span class="hljs-keyword">None</span>:</span>
    <span class="hljs-keyword">pass</span>`
];

export const matrix_multiplication = [
    `@meta
class C:

    @decorator
    def f(self, H, V, beta, r):
        S = (H @ beta - r).T @ inv(H @ V @ H.T) @ (H @ beta - r)
        return S`,
    `<span class="hljs-meta">@meta</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">C</span>:</span>

<span class="hljs-meta">    @decorator</span>
    <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">f</span><span class="hljs-params">(self, H, V, beta, r)</span>:</span>
        S = (H @ beta - r).T @ inv(H @ V @ H.T) @ (H @ beta - r)
        <span class="hljs-keyword">return</span> S`
];
