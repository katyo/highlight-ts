export default [
    `<!DOCTYPE html>
<title>Title</title>

<style>body {width: 500px;}</style>

<script type="application/javascript">
  function $init() {return true;}
</script>

<body>
  <p checked class="title" id='title'>Title</p>
  <!-- here goes the rest of the page -->
</body>`,
    `<span class="hljs-meta">&lt;!DOCTYPE html&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">title</span>&gt;</span>Title<span class="hljs-tag">&lt;/<span class="hljs-name">title</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">style</span>&gt;</span><span class="css"><span class="hljs-selector-tag">body</span> {<span class="hljs-attribute">width</span>: <span class="hljs-number">500px</span>;}</span><span class="hljs-tag">&lt;/<span class="hljs-name">style</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">script</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"application/javascript"</span>&gt;</span><span class="javascript">
  <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">$init</span>(<span class="hljs-params"></span>) </span>{<span class="hljs-keyword">return</span> <span class="hljs-literal">true</span>;}
</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span>

<span class="hljs-tag">&lt;<span class="hljs-name">body</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">p</span> <span class="hljs-attr">checked</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"title"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">\'title\'</span>&gt;</span>Title<span class="hljs-tag">&lt;/<span class="hljs-name">p</span>&gt;</span>
  <span class="hljs-comment">&lt;!-- here goes the rest of the page --&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">body</span>&gt;</span>`
];

export const groovy_julia = [
    `<SOAP-ENV:Envelope xmlns:SOAP-ENV="..." xmlns:ns1="..." xmlns:xsi="...">
  <SOAP-ENV:Body>

  </SOAP-ENV:Body>
</SOAP-ENV:Envelope>`,
    `<span class="hljs-tag">&lt;<span class="hljs-name">SOAP-ENV:Envelope</span> <span class="hljs-attr">xmlns:SOAP-ENV</span>=<span class="hljs-string">"..."</span> <span class="hljs-attr">xmlns:ns1</span>=<span class="hljs-string">"..."</span> <span class="hljs-attr">xmlns:xsi</span>=<span class="hljs-string">"..."</span>&gt;</span>
  <span class="hljs-tag">&lt;<span class="hljs-name">SOAP-ENV:Body</span>&gt;</span>

  <span class="hljs-tag">&lt;/<span class="hljs-name">SOAP-ENV:Body</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">SOAP-ENV:Envelope</span>&gt;</span>`
];

export const js = [
    `<iframe x="y"></iframe>`,
    `<span class="hljs-tag">&lt;<span class="hljs-name">iframe</span> <span class="hljs-attr">x</span>=<span class="hljs-string">"y"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">iframe</span>&gt;</span>`
];

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
