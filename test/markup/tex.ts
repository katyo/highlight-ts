export default [
    `\\documentclass{article}
\\usepackage[koi8-r]{inputenc}
\\hoffset=0pt
\\voffset=.3em
\\tolerance=400
\\newcommand{\\eTiX}{\\TeX}
\\begin{document}
\\section*{Highlight.js}
\\begin{table}[c|c]
$\\frac 12\\, + \\, \\frac 1{x^3}\\text{Hello \\! world}$ & \\textbf{Goodbye\\~ world} \\\\\\eTiX $ \\pi=400 $
\\end{table}
Ch\\'erie, \\c{c}a ne me pla\\^\\i t pas! % comment \\b
G\\"otterd\\"ammerung~45\\%=34.
$$
    \\int\\limits_{0}^{\\pi}\\frac{4}{x-7}=3
$$
\\end{document}`,
    `<span class="hljs-tag">\\<span class="hljs-name">documentclass</span><span class="hljs-string">{article}</span></span>
<span class="hljs-tag">\\<span class="hljs-name">usepackage</span><span class="hljs-string">[koi8-r]</span><span class="hljs-string">{inputenc}</span></span>
<span class="hljs-tag">\\<span class="hljs-name">hoffset</span>=<span class="hljs-number">0pt</span></span>
<span class="hljs-tag">\\<span class="hljs-name">voffset</span>=<span class="hljs-number">.3em</span></span>
<span class="hljs-tag">\\<span class="hljs-name">tolerance</span>=<span class="hljs-number">400</span></span>
<span class="hljs-tag">\\<span class="hljs-name">newcommand</span><span class="hljs-string">{\\eTiX}</span><span class="hljs-string">{\\TeX}</span></span>
<span class="hljs-tag">\\<span class="hljs-name">begin</span><span class="hljs-string">{document}</span></span>
<span class="hljs-tag">\\<span class="hljs-name">section*</span><span class="hljs-string">{Highlight.js}</span></span>
<span class="hljs-tag">\\<span class="hljs-name">begin</span><span class="hljs-string">{table}</span><span class="hljs-string">[c|c]</span></span>
<span class="hljs-formula">$<span class="hljs-tag">\\<span class="hljs-name">frac</span></span> 12<span class="hljs-tag">\\<span class="hljs-name">,</span></span> + <span class="hljs-tag">\\<span class="hljs-name">,</span></span> <span class="hljs-tag">\\<span class="hljs-name">frac</span></span> 1{x^3}<span class="hljs-tag">\\<span class="hljs-name">text</span><span class="hljs-string">{Hello \\! world}</span></span>$</span> &amp; <span class="hljs-tag">\\<span class="hljs-name">textbf</span><span class="hljs-string">{Goodbye\\~ world}</span></span> <span class="hljs-tag">\\<span class="hljs-name">\\</span></span><span class="hljs-tag">\\<span class="hljs-name">eTiX</span></span> <span class="hljs-formula">$ <span class="hljs-tag">\\<span class="hljs-name">pi</span>=<span class="hljs-number">400</span></span> $</span>
<span class="hljs-tag">\\<span class="hljs-name">end</span><span class="hljs-string">{table}</span></span>
Ch<span class="hljs-tag">\\<span class="hljs-name">\'</span></span>erie, <span class="hljs-tag">\\<span class="hljs-name">c</span><span class="hljs-string">{c}</span></span>a ne me pla<span class="hljs-tag">\\<span class="hljs-name">^</span></span><span class="hljs-tag">\\<span class="hljs-name">i</span></span> t pas! <span class="hljs-comment">% comment \\b</span>
G<span class="hljs-tag">\\<span class="hljs-name">"</span></span>otterd<span class="hljs-tag">\\<span class="hljs-name">"</span></span>ammerung~45<span class="hljs-tag">\\<span class="hljs-name">%</span>=<span class="hljs-number">34</span></span>.
<span class="hljs-formula">$$
    <span class="hljs-tag">\\<span class="hljs-name">int</span></span><span class="hljs-tag">\\<span class="hljs-name">limits</span></span>_{0}^{<span class="hljs-tag">\\<span class="hljs-name">pi</span></span>}<span class="hljs-tag">\\<span class="hljs-name">frac</span><span class="hljs-string">{4}</span><span class="hljs-string">{x-7}</span>=<span class="hljs-number">3</span></span>
$$</span>
<span class="hljs-tag">\\<span class="hljs-name">end</span><span class="hljs-string">{document}</span></span>`
];
