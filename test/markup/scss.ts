export default [
    `@import "compass/reset";

// variables
$colorGreen: #008000;
$colorGreenDark: darken($colorGreen, 10);

@mixin container {
    max-width: 980px;
}

// mixins with parameters
@mixin button($color:green) {
    @if ($color == green) {
        background-color: #008000;
    }
    @else if ($color == red) {
        background-color: #B22222;
    }
}

button {
    @include button(red);
}

div,
.navbar,
#header,
input[type="input"] {
    font-family: "Helvetica Neue", Arial, sans-serif;
    width: auto;
    margin: 0 auto;
    display: block;
}

.row-12 > [class*="spans"] {
    border-left: 1px solid #B5C583;
}

// nested definitions
ul {
    width: 100%;
    padding: {
        left: 5px; right: 5px;
    }
  li {
      float: left; margin-right: 10px;
      .home {
          background: url('http://placehold.it/20') scroll no-repeat 0 0;
    }
  }
}

.banner {
    @extend .container;
}

a {
  color: $colorGreen;
  &:hover { color: $colorGreenDark; }
  &:visited { color: #c458cb; }
}

@for $i from 1 through 5 {
    .span#{$i} {
        width: 20px*$i;
    }
}

@mixin mobile {
  @media screen and (max-width : 600px) {
    @content;
  }
}`,
    `@<span class="hljs-keyword">import</span> <span class="hljs-string">"compass/reset"</span>;

<span class="hljs-comment">// variables</span>
<span class="hljs-variable">$colorGreen</span>: <span class="hljs-number">#008000</span>;
<span class="hljs-variable">$colorGreenDark</span>: darken(<span class="hljs-variable">$colorGreen</span>, <span class="hljs-number">10</span>);

@<span class="hljs-keyword">mixin</span> container {
    <span class="hljs-attribute">max-width</span>: <span class="hljs-number">980px</span>;
}

<span class="hljs-comment">// mixins with parameters</span>
@<span class="hljs-keyword">mixin</span> button(<span class="hljs-variable">$color</span>:green) {
    @<span class="hljs-keyword">if</span> (<span class="hljs-variable">$color</span> == green) {
        <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#008000</span>;
    }
    @<span class="hljs-keyword">else</span> if (<span class="hljs-variable">$color</span> == red) {
        <span class="hljs-attribute">background-color</span>: <span class="hljs-number">#B22222</span>;
    }
}

<span class="hljs-selector-tag">button</span> {
    @<span class="hljs-keyword">include</span> button(red);
}

<span class="hljs-selector-tag">div</span>,
<span class="hljs-selector-class">.navbar</span>,
<span class="hljs-selector-id">#header</span>,
<span class="hljs-selector-tag">input</span><span class="hljs-selector-attr">[type="input"]</span> {
    <span class="hljs-attribute">font-family</span>: <span class="hljs-string">"Helvetica Neue"</span>, Arial, sans-serif;
    <span class="hljs-attribute">width</span>: auto;
    <span class="hljs-attribute">margin</span>: <span class="hljs-number">0</span> auto;
    <span class="hljs-attribute">display</span>: block;
}

<span class="hljs-selector-class">.row-12</span> &gt; <span class="hljs-selector-attr">[class*="spans"]</span> {
    <span class="hljs-attribute">border-left</span>: <span class="hljs-number">1px</span> solid <span class="hljs-number">#B5C583</span>;
}

<span class="hljs-comment">// nested definitions</span>
<span class="hljs-selector-tag">ul</span> {
    <span class="hljs-attribute">width</span>: <span class="hljs-number">100%</span>;
    <span class="hljs-attribute">padding</span>: {
        left: <span class="hljs-number">5px</span>; <span class="hljs-attribute">right</span>: <span class="hljs-number">5px</span>;
    }
  <span class="hljs-selector-tag">li</span> {
      <span class="hljs-attribute">float</span>: left; <span class="hljs-attribute">margin-right</span>: <span class="hljs-number">10px</span>;
      <span class="hljs-selector-class">.home</span> {
          <span class="hljs-attribute">background</span>: url(<span class="hljs-string">\'http://placehold.it/20\'</span>) scroll no-repeat <span class="hljs-number">0</span> <span class="hljs-number">0</span>;
    }
  }
}

<span class="hljs-selector-class">.banner</span> {
    @<span class="hljs-keyword">extend</span> .container;
}

<span class="hljs-selector-tag">a</span> {
  <span class="hljs-attribute">color</span>: <span class="hljs-variable">$colorGreen</span>;
  &amp;:hover { <span class="hljs-attribute">color</span>: <span class="hljs-variable">$colorGreenDark</span>; }
  &amp;:visited { <span class="hljs-attribute">color</span>: <span class="hljs-number">#c458cb</span>; }
}

@<span class="hljs-keyword">for</span> <span class="hljs-variable">$i</span> from 1 through 5 {
    <span class="hljs-selector-class">.span</span>#{<span class="hljs-variable">$i</span>} {
        <span class="hljs-attribute">width</span>: <span class="hljs-number">20px</span>*<span class="hljs-variable">$i</span>;
    }
}

@<span class="hljs-keyword">mixin</span> mobile {
  @<span class="hljs-keyword">media</span> screen and (max-width : 600px) {
    @<span class="hljs-keyword">content</span>;
  }
}`
];
