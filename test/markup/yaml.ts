export default [
    `---
# comment
string_1: "Bar"
string_2: 'bar'
string_3: bar
inline_keys_ignored: sompath/name/file.jpg
keywords_in_yaml:
  - true
  - false
  - TRUE
  - FALSE
  - 21
  - 21.0
  - !!str 123
"quoted_key": &foobar
  bar: foo
  foo:
  "foo": bar

reference: *foobar

multiline_1: |
  Multiline
  String
multiline_2: >
  Multiline
  String
multiline_3: "
  Multiline string
  "

ansible_variables: "foo {{variable}}"

array_nested:
- a
- b: 1
  c: 2
- b
- comment`,
    `<span class="hljs-meta">---</span>
<span class="hljs-comment"># comment</span>
<span class="hljs-attr">string_1:</span> <span class="hljs-string">"Bar"</span>
<span class="hljs-attr">string_2:</span> <span class="hljs-string">\'bar\'</span>
<span class="hljs-attr">string_3:</span> <span class="hljs-string">bar</span>
<span class="hljs-attr">inline_keys_ignored:</span> <span class="hljs-string">sompath/name/file.jpg</span>
<span class="hljs-attr">keywords_in_yaml:</span>
<span class="hljs-bullet">  -</span> <span class="hljs-literal">true</span>
<span class="hljs-bullet">  -</span> <span class="hljs-literal">false</span>
<span class="hljs-bullet">  -</span> <span class="hljs-literal">TRUE</span>
<span class="hljs-bullet">  -</span> <span class="hljs-literal">FALSE</span>
<span class="hljs-bullet">  -</span> <span class="hljs-number">21</span>
<span class="hljs-bullet">  -</span> <span class="hljs-number">21.0</span>
<span class="hljs-bullet">  -</span> <span class="hljs-type">!!str</span> <span class="hljs-number">123</span>
<span class="hljs-attr">"quoted_key":</span> <span class="hljs-meta">&amp;foobar</span>
<span class="hljs-attr">  bar:</span> <span class="hljs-string">foo</span>
<span class="hljs-attr">  foo:</span>
<span class="hljs-attr">  "foo":</span> <span class="hljs-string">bar</span>

<span class="hljs-attr">reference:</span> <span class="hljs-meta">*foobar</span>

<span class="hljs-attr">multiline_1:</span> <span class="hljs-string">|
  Multiline
  String
</span><span class="hljs-attr">multiline_2:</span> <span class="hljs-string">&gt;
  Multiline
  String
</span><span class="hljs-attr">multiline_3:</span> <span class="hljs-string">"
  Multiline string
  "</span>

<span class="hljs-attr">ansible_variables:</span> <span class="hljs-string">"foo <span class="hljs-template-variable">{{variable}}</span>"</span>

<span class="hljs-attr">array_nested:</span>
<span class="hljs-bullet">-</span> <span class="hljs-string">a</span>
<span class="hljs-attr">- b:</span> <span class="hljs-number">1</span>
<span class="hljs-attr">  c:</span> <span class="hljs-number">2</span>
<span class="hljs-bullet">-</span> <span class="hljs-string">b</span>
<span class="hljs-bullet">-</span> <span class="hljs-string">comment</span>`
];

export const strings = [
    `key: value
key: 'some value'
key: "some value"
key: |
  multi-string
  value
key: true`,
    `<span class="hljs-attr">key:</span> <span class="hljs-string">value</span>
<span class="hljs-attr">key:</span> <span class="hljs-string">'some value'</span>
<span class="hljs-attr">key:</span> <span class="hljs-string">"some value"</span>
<span class="hljs-attr">key:</span> <span class="hljs-string">|
  multi-string
  value
</span><span class="hljs-attr">key:</span> <span class="hljs-literal">true</span>`
];
