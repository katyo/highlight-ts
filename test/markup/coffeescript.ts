export const division = [
    `# Divisions
x = 6/foo/i
x = 6 /foo
x = 6 / foo
x = 6 /foo * 2/gm
x = f /foo
x = f / foo / gm
x = f /foo * 2/6`,
    `<span class="hljs-comment"># Divisions</span>
x = <span class="hljs-number">6</span>/foo/i
x = <span class="hljs-number">6</span> /foo
x = <span class="hljs-number">6</span> / foo
x = <span class="hljs-number">6</span> /foo * <span class="hljs-number">2</span>/gm
x = f /foo
x = f / foo / gm
x = f /foo * <span class="hljs-number">2</span>/<span class="hljs-number">6</span>
`
];

export const functions = [
    `returnNull = -> null
returnTrue = () -> true
square = (x) -> x * x

npmWishlist.sha256 = (str) ->
    throw new Error()

str.split(" ").map((m) -> m.charCodeAt(0))

fs.readFile("package.json", "utf-8", (err, content) ->
  data = JSON.parse(content)

  data.version
)`,
    `<span class="hljs-function"><span class="hljs-title">returnNull</span> = -&gt;</span> <span class="hljs-literal">null</span>
<span class="hljs-function"><span class="hljs-title">returnTrue</span> = <span class="hljs-params">()</span> -&gt;</span> <span class="hljs-literal">true</span>
<span class="hljs-function"><span class="hljs-title">square</span> = <span class="hljs-params">(x)</span> -&gt;</span> x * x

npmWishlist.sha256 = <span class="hljs-function"><span class="hljs-params">(str)</span> -&gt;</span>
    <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> Error()

str.split(<span class="hljs-string">" "</span>).map(<span class="hljs-function"><span class="hljs-params">(m)</span> -&gt;</span> m.charCodeAt(<span class="hljs-number">0</span>))

fs.readFile(<span class="hljs-string">"package.json"</span>, <span class="hljs-string">"utf-8"</span>, <span class="hljs-function"><span class="hljs-params">(err, content)</span> -&gt;</span>
  data = JSON.parse(content)

  data.version
)`
];

export const regex = [
    `# Regexps
x = /\\//
x = /\\n/
x = /ab\\/ ab/
x = f /6 * 2/ - 3
x = f /foo * 2/gm
x = if true then /\\n/ else /[.,]+/
x = ///^key-#{key}-\\d+///`,
    `<span class="hljs-comment"># Regexps</span>
x = <span class="hljs-regexp">/\\//</span>
x = <span class="hljs-regexp">/\\n/</span>
x = <span class="hljs-regexp">/ab\\/ ab/</span>
x = f <span class="hljs-regexp">/6 * 2/</span> - <span class="hljs-number">3</span>
x = f <span class="hljs-regexp">/foo * 2/gm</span>
x = <span class="hljs-keyword">if</span> <span class="hljs-literal">true</span> <span class="hljs-keyword">then</span> <span class="hljs-regexp">/\\n/</span> <span class="hljs-keyword">else</span> <span class="hljs-regexp">/[.,]+/</span>
x = <span class="hljs-regexp">///^key-<span class="hljs-subst">#{key}</span>-\\d+///</span>`
];
