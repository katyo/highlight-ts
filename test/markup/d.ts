export default [
    `#!/usr/bin/rdmd
// Computes average line length for standard input.
import std.stdio;

/+
  this is a /+ nesting +/ comment
+/

enum COMPILED_ON = __TIMESTAMP__;  // special token

enum character = '©';
enum copy_valid = '&copy;';
enum backslash_escaped = '\\\\';

// string literals
enum str = \`hello "world"!\`;
enum multiline = r"lorem
ipsum
dolor";  // wysiwyg string, no escapes here allowed
enum multiline2 = "sit
amet
\\"adipiscing\\"
elit.";
enum hex = x"66 6f 6f";   // same as "foo"

#line 5

// float literals
enum f = [3.14f, .1, 1., 1e100, 0xc0de.01p + 100];

static if (something == true) {
    import std.algorithm;
}

void main() pure nothrow @safe {
    ulong lines = 0;
    double sumLength = 0;
    foreach(line; stdin.byLine()) {
        ++lines;
        sumLength += line.length;
    }
    writeln("Average line length: ",
        lines ? sumLength / lines : 0);
}`,
    `<span class="hljs-meta">#!/usr/bin/rdmd</span>
<span class="hljs-comment">// Computes average line length for standard input.</span>
<span class="hljs-keyword">import</span> std.stdio;

<span class="hljs-comment">/+
  this is a <span class="hljs-comment">/+ nesting +/</span> comment
+/</span>

<span class="hljs-keyword">enum</span> COMPILED_ON = <span class="hljs-keyword">__TIMESTAMP__</span>;  <span class="hljs-comment">// special token</span>

<span class="hljs-keyword">enum</span> character = <span class="hljs-string">\'©\'</span>;
<span class="hljs-keyword">enum</span> copy_valid = <span class="hljs-string">\'&amp;copy;\'</span>;
<span class="hljs-keyword">enum</span> backslash_escaped = <span class="hljs-string">\'\\\\\'</span>;

<span class="hljs-comment">// string literals</span>
<span class="hljs-keyword">enum</span> str = <span class="hljs-string">\`hello "world"!\`</span>;
<span class="hljs-keyword">enum</span> multiline = <span class="hljs-string">r"lorem
ipsum
dolor"</span>;  <span class="hljs-comment">// wysiwyg string, no escapes here allowed</span>
<span class="hljs-keyword">enum</span> multiline2 = <span class="hljs-string">"sit
amet
\\"adipiscing\\"
elit."</span>;
<span class="hljs-keyword">enum</span> hex = <span class="hljs-string">x"66 6f 6f"</span>;   <span class="hljs-comment">// same as "foo"</span>

<span class="hljs-meta">#line 5</span>

<span class="hljs-comment">// float literals</span>
<span class="hljs-keyword">enum</span> f = [<span class="hljs-number">3.14f</span>, .<span class="hljs-number">1</span>, <span class="hljs-number">1.</span>, <span class="hljs-number">1e100</span>, <span class="hljs-number">0</span>xc0de.01p + <span class="hljs-number">100</span>];

<span class="hljs-keyword">static</span> <span class="hljs-keyword">if</span> (something == <span class="hljs-literal">true</span>) {
    <span class="hljs-keyword">import</span> std.algorithm;
}

<span class="hljs-keyword">void</span> main() <span class="hljs-keyword">pure</span> <span class="hljs-keyword">nothrow</span> <span class="hljs-keyword">@safe</span> {
    <span class="hljs-built_in">ulong</span> lines = <span class="hljs-number">0</span>;
    <span class="hljs-built_in">double</span> sumLength = <span class="hljs-number">0</span>;
    <span class="hljs-keyword">foreach</span>(line; stdin.byLine()) {
        ++lines;
        sumLength += line.length;
    }
    writeln(<span class="hljs-string">"Average line length: "</span>,
        lines ? sumLength / lines : <span class="hljs-number">0</span>);
}`
];
