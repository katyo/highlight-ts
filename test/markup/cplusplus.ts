export default [
    `#include <iostream>

int main(int argc, char *argv[]) {

  /* An annoying "Hello World" example */
  for (auto i = 0; i < 0xFFFF; i++)
    cout << "Hello, World!" << endl;

  char c = '\\n';
  unordered_map <string, vector<string> > m;
  m["key"] = "\\\\"; // this is an error

  return -2e3 + 12l;
}`,
    `<span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;iostream&gt;</span></span>

<span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">main</span><span class="hljs-params">(<span class="hljs-keyword">int</span> argc, <span class="hljs-keyword">char</span> *argv[])</span> </span>{

  <span class="hljs-comment">/* An annoying "Hello World" example */</span>
  <span class="hljs-keyword">for</span> (<span class="hljs-keyword">auto</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-number">0xFFFF</span>; i++)
    <span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-string">"Hello, World!"</span> &lt;&lt; <span class="hljs-built_in">endl</span>;

  <span class="hljs-keyword">char</span> c = <span class="hljs-string">'\\n'</span>;
  <span class="hljs-built_in">unordered_map</span> &lt;<span class="hljs-built_in">string</span>, <span class="hljs-built_in">vector</span>&lt;<span class="hljs-built_in">string</span>&gt; &gt; m;
  m[<span class="hljs-string">"key"</span>] = <span class="hljs-string">"\\\\"</span>; <span class="hljs-comment">// this is an error</span>

  <span class="hljs-keyword">return</span> <span class="hljs-number">-2e3</span> + <span class="hljs-number">12l</span>;
}`
];

export const comment = [
    `/*
To use this program, compile it -- if you can -- and then type something like:

chan -n 5000 -d 2 < input.txt

In this case, it will produce 5000 words of output, checking two-word groups.
(The explanation above describes two-word generation. If you type "-d 3",
the program will find three-word groups, and so on. Greater depths make more
sense, but they require more input text and take more time to process.)

http://www.eblong.com/zarf/markov/
*/


/* make cpp win deterministically over others with C block comments */
cout << endl;`,
    `<span class="hljs-comment">/*
To use this program, compile it -- if you can -- and then type something like:

chan -n 5000 -d 2 &lt; input.txt

In this case, it will produce 5000 words of output, checking two-word groups.
(The explanation above describes two-word generation. If you type "-d 3",
the program will find three-word groups, and so on. Greater depths make more
sense, but they require more input text and take more time to process.)

http://www.eblong.com/zarf/markov/
*/</span>


<span class="hljs-comment">/* make cpp win deterministically over others with C block comments */</span>
<span class="hljs-built_in">cout</span> &lt;&lt; <span class="hljs-built_in">endl</span>;`
];

export const expression_keywords = [
    `double x = exp(log(2)); // recognize built-ins
return 0;  // recognize keyword that started the expression`,
    `<span class="hljs-keyword">double</span> x = <span class="hljs-built_in">exp</span>(<span class="hljs-built_in">log</span>(<span class="hljs-number">2</span>)); <span class="hljs-comment">// recognize built-ins</span>
<span class="hljs-keyword">return</span> <span class="hljs-number">0</span>;  <span class="hljs-comment">// recognize keyword that started the expression</span>`
];

export const function_params = [
    `int f(
    int a = 1,
    char* b = "2", // Line comment
    double c = 3.0 /* Block comment */
);`,
    `<span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">f</span><span class="hljs-params">(
    <span class="hljs-keyword">int</span> a = <span class="hljs-number">1</span>,
    <span class="hljs-keyword">char</span>* b = <span class="hljs-string">"2"</span>, <span class="hljs-comment">// Line comment</span>
    <span class="hljs-keyword">double</span> c = <span class="hljs-number">3.0</span> <span class="hljs-comment">/* Block comment */</span>
)</span></span>;`
];

export const function_title = [
    `int main() {
  A a = new A();
  int b = b * sum(1, 2);
  if (a->check1())
    return 3;
  else if (a->check2())
    return 4;
  return a->result();
}`,
    `<span class="hljs-function"><span class="hljs-keyword">int</span> <span class="hljs-title">main</span><span class="hljs-params">()</span> </span>{
  A a = <span class="hljs-keyword">new</span> A();
  <span class="hljs-keyword">int</span> b = b * sum(<span class="hljs-number">1</span>, <span class="hljs-number">2</span>);
  <span class="hljs-keyword">if</span> (a-&gt;check1())
    <span class="hljs-keyword">return</span> <span class="hljs-number">3</span>;
  <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (a-&gt;check2())
    <span class="hljs-keyword">return</span> <span class="hljs-number">4</span>;
  <span class="hljs-keyword">return</span> a-&gt;result();
}`
];

export const number_literals = [
    `/* digit separators */
int number = 2'555'555'555; // digit separators
float exponentFloat = .123'456e3'000; // digit separators in floats
float suffixed = 3.000'001'234f // digit separators in suffixed numbers
char word[] = { '3', '\0' }; // make sure digit separators don't mess up chars
float negative = -123.0f; // negative floating point numbers
`,
    `<span class="hljs-comment">/* digit separators */</span>
<span class="hljs-keyword">int</span> number = <span class="hljs-number">2'555'555'555</span>; <span class="hljs-comment">// digit separators</span>
<span class="hljs-keyword">float</span> exponentFloat = <span class="hljs-number">.123'456e3'000</span>; <span class="hljs-comment">// digit separators in floats</span>
<span class="hljs-keyword">float</span> suffixed = <span class="hljs-number">3.000'001'234f</span> <span class="hljs-comment">// digit separators in suffixed numbers</span>
<span class="hljs-keyword">char</span> word[] = { <span class="hljs-string">'3'</span>, <span class="hljs-string">'\0'</span> }; <span class="hljs-comment">// make sure digit separators don't mess up chars</span>
<span class="hljs-keyword">float</span> negative = <span class="hljs-number">-123.0f</span>; <span class="hljs-comment">// negative floating point numbers</span>`
];

export const pointer_returns = [
    `// These will all work:
char** foo_bar();
char ** foo_bar();
char **foo_bar();`,
    `<span class="hljs-comment">// These will all work:</span>
<span class="hljs-function"><span class="hljs-keyword">char</span>** <span class="hljs-title">foo_bar</span><span class="hljs-params">()</span></span>;
<span class="hljs-function"><span class="hljs-keyword">char</span> ** <span class="hljs-title">foo_bar</span><span class="hljs-params">()</span></span>;
<span class="hljs-function"><span class="hljs-keyword">char</span> **<span class="hljs-title">foo_bar</span><span class="hljs-params">()</span></span>;`
];

export const preprocessor = [
    `#include <iostream>
#define foo 1<<16

#ifdef DEBUG
TYPE1 foo(void)
#else
int foo(void)
#endif
{ }

#define x(v) ((v))
# define x(v) ((v))
#  define x(v) ((v))`,
    `<span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;iostream&gt;</span></span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">define</span> foo 1&lt;&lt;16</span>

<span class="hljs-meta">#<span class="hljs-meta-keyword">ifdef</span> DEBUG</span>
<span class="hljs-function">TYPE1 <span class="hljs-title">foo</span><span class="hljs-params">(<span class="hljs-keyword">void</span>)</span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">else</span></span>
<span class="hljs-keyword">int</span> <span class="hljs-title">foo</span><span class="hljs-params">(<span class="hljs-keyword">void</span>)</span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">endif</span></span>
</span>{ }

<span class="hljs-meta">#<span class="hljs-meta-keyword">define</span> x(v) ((v))</span>
<span class="hljs-meta"># <span class="hljs-meta-keyword">define</span> x(v) ((v))</span>
<span class="hljs-meta">#  <span class="hljs-meta-keyword">define</span> x(v) ((v))</span>`
];

export const promitive_types = [
    `const uint64_t MAX_INT_64;

struct position_tag;`,
    `<span class="hljs-keyword">const</span> <span class="hljs-keyword">uint64_t</span> MAX_INT_64;

<span class="hljs-class"><span class="hljs-keyword">struct</span> <span class="hljs-title">position_tag</span>;</span>`
];

export const string_literals = [
    `// Unicode literals
auto str   = "Hello regular string";
auto utf8  = u8"Hello utf-8 string";
auto utf16 = u"Hello utf-16 string";
auto utf32 = U"Hello utf-32 string";

// Wide-character strings
auto wide_char = L"Hello wchar_t string";

// Raw string literals (multiline)
auto char_multi  = R"(Hello
normal
muliline
string.)";
auto utf8_multi  = u8R"(Hello
utf-8
muliline
string)";
auto utf16_multi = uR"(Hello
utf-16
muliline
string)";
auto utf32_multi = UR"(Hello
utf-32
muliline
string)";

// Meta strings
#include <stdio>
#include "lib.h"`,
    `<span class="hljs-comment">// Unicode literals</span>
<span class="hljs-keyword">auto</span> str   = <span class="hljs-string">"Hello regular string"</span>;
<span class="hljs-keyword">auto</span> utf8  = <span class="hljs-string">u8"Hello utf-8 string"</span>;
<span class="hljs-keyword">auto</span> utf16 = <span class="hljs-string">u"Hello utf-16 string"</span>;
<span class="hljs-keyword">auto</span> utf32 = <span class="hljs-string">U"Hello utf-32 string"</span>;

<span class="hljs-comment">// Wide-character strings</span>
<span class="hljs-keyword">auto</span> wide_char = <span class="hljs-string">L"Hello wchar_t string"</span>;

<span class="hljs-comment">// Raw string literals (multiline)</span>
<span class="hljs-keyword">auto</span> char_multi  = <span class="hljs-string">R"(Hello
normal
muliline
string.)"</span>;
<span class="hljs-keyword">auto</span> utf8_multi  = <span class="hljs-string">u8R"(Hello
utf-8
muliline
string)"</span>;
<span class="hljs-keyword">auto</span> utf16_multi = <span class="hljs-string">uR"(Hello
utf-16
muliline
string)"</span>;
<span class="hljs-keyword">auto</span> utf32_multi = <span class="hljs-string">UR"(Hello
utf-32
muliline
string)"</span>;

<span class="hljs-comment">// Meta strings</span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">&lt;stdio&gt;</span></span>
<span class="hljs-meta">#<span class="hljs-meta-keyword">include</span> <span class="hljs-meta-string">"lib.h"</span></span>`
];
