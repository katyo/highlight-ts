export default [
    `{ stdenv, foo, bar ? false, ... }:

/*
 * foo
 */

let
  a = 1; # just a comment
  b = null;
  c = toString 10;
in stdenv.mkDerivation rec {
  name = "foo-\${version}";
  version = "1.3";

  configureFlags = [ "--with-foo2" ] ++ stdenv.lib.optional bar "--with-foo=\${ with stdenv.lib; foo }"

  postInstall = ''
    \${ if true then "--\${test}" else false }
  '';

  meta = with stdenv.lib; {
    homepage = https://nixos.org;
  };
}`,
    `{ stdenv, foo, bar ? <span class="hljs-literal">false</span>, ... }:

<span class="hljs-comment">/*
 * foo
 */</span>

<span class="hljs-keyword">let</span>
  <span class="hljs-attr">a</span> = <span class="hljs-number">1</span>; <span class="hljs-comment"># just a comment</span>
  <span class="hljs-attr">b</span> = <span class="hljs-literal">null</span>;
  <span class="hljs-attr">c</span> = <span class="hljs-built_in">toString</span> <span class="hljs-number">10</span>;
<span class="hljs-keyword">in</span> stdenv.mkDerivation <span class="hljs-keyword">rec</span> {
  <span class="hljs-attr">name</span> = <span class="hljs-string">"foo-<span class="hljs-subst">\${version}</span>"</span>;
  <span class="hljs-attr">version</span> = <span class="hljs-string">"1.3"</span>;

  <span class="hljs-attr">configureFlags</span> = [ <span class="hljs-string">"--with-foo2"</span> ] ++ stdenv.lib.optional bar <span class="hljs-string">"--with-foo=<span class="hljs-subst">\${ <span class="hljs-keyword">with</span> stdenv.lib; foo }</span>"</span>

  <span class="hljs-attr">postInstall</span> = <span class="hljs-string">\'\'
    <span class="hljs-subst">\${ <span class="hljs-keyword">if</span> <span class="hljs-literal">true</span> <span class="hljs-keyword">then</span> <span class="hljs-string">"--<span class="hljs-subst">\${test}</span>"</span> <span class="hljs-keyword">else</span> <span class="hljs-literal">false</span> }</span>
  \'\'</span>;

  <span class="hljs-attr">meta</span> = <span class="hljs-keyword">with</span> stdenv.lib; {
    <span class="hljs-attr">homepage</span> = https://nixos.org;
  };
}`
];
