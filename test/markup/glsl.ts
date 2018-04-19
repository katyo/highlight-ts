export default [
    `// vertex shader
#version 150
in  vec2 in_Position;
in  vec3 in_Color;

out vec3 ex_Color;
void main(void) {
    gl_Position = vec4(in_Position.x, in_Position.y, 0.0, 1.0);
    ex_Color = in_Color;
}


// geometry shader
#version 150

layout(triangles) in;
layout(triangle_strip, max_vertices = 3) out;

void main() {
  for(int i = 0; i < gl_in.length(); i++) {
    gl_Position = gl_in[i].gl_Position;
    EmitVertex();
  }
  EndPrimitive();
}


// fragment shader
#version 150
precision highp float;

in  vec3 ex_Color;
out vec4 gl_FragColor;

void main(void) {
    gl_FragColor = vec4(ex_Color, 1.0);
}`,
    `<span class="hljs-comment">// vertex shader</span>
<span class="hljs-meta">#version 150</span>
<span class="hljs-keyword">in</span>  <span class="hljs-type">vec2</span> in_Position;
<span class="hljs-keyword">in</span>  <span class="hljs-type">vec3</span> in_Color;

<span class="hljs-keyword">out</span> <span class="hljs-type">vec3</span> ex_Color;
<span class="hljs-type">void</span> main(<span class="hljs-type">void</span>) {
    <span class="hljs-built_in">gl_Position</span> = <span class="hljs-type">vec4</span>(in_Position.x, in_Position.y, <span class="hljs-number">0.0</span>, <span class="hljs-number">1.0</span>);
    ex_Color = in_Color;
}


<span class="hljs-comment">// geometry shader</span>
<span class="hljs-meta">#version 150</span>

<span class="hljs-keyword">layout</span>(<span class="hljs-keyword">triangles</span>) <span class="hljs-keyword">in</span>;
<span class="hljs-keyword">layout</span>(<span class="hljs-keyword">triangle_strip</span>, <span class="hljs-keyword">max_vertices</span> = <span class="hljs-number">3</span>) <span class="hljs-keyword">out</span>;

<span class="hljs-type">void</span> main() {
  <span class="hljs-keyword">for</span>(<span class="hljs-type">int</span> i = <span class="hljs-number">0</span>; i &lt; <span class="hljs-built_in">gl_in</span>.<span class="hljs-built_in">length</span>(); i++) {
    <span class="hljs-built_in">gl_Position</span> = <span class="hljs-built_in">gl_in</span>[i].<span class="hljs-built_in">gl_Position</span>;
    <span class="hljs-built_in">EmitVertex</span>();
  }
  <span class="hljs-built_in">EndPrimitive</span>();
}


<span class="hljs-comment">// fragment shader</span>
<span class="hljs-meta">#version 150</span>
<span class="hljs-keyword">precision</span> <span class="hljs-keyword">highp</span> <span class="hljs-type">float</span>;

<span class="hljs-keyword">in</span>  <span class="hljs-type">vec3</span> ex_Color;
<span class="hljs-keyword">out</span> <span class="hljs-type">vec4</span> <span class="hljs-built_in">gl_FragColor</span>;

<span class="hljs-type">void</span> main(<span class="hljs-type">void</span>) {
    <span class="hljs-built_in">gl_FragColor</span> = <span class="hljs-type">vec4</span>(ex_Color, <span class="hljs-number">1.0</span>);
}`
];
