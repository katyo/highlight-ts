export const example = [
    `/* Maxima computer algebra system */

print ("mumble");

/* this
  /* this is
    /* this is a nested comment */ nested comment
   */ comment
 */

sin(%pi); /* should be highlighted again */

/* programming keywords */

if a then b elseif c then d else f;
for x:1 thru 10 step 2 do print(x);
for z:-2 while z < 0 do print(z);
for m:0 unless m > 10 do print(m);
for x in [1, 2, 3] do print(x);
foo and bar or not baz;

/* different kinds of integers */

ibase : 18 $
[0, 1234, 1234., 0abcdefgh];
reset (ibase) $

/* strings */

s1 : "\\"now\\" is";
s2 : "the 'time' for all good men";
print (s1, s2, "to come to the aid",
  "of their country");

/* expressions */

foo (x, y, z) :=
  if x > 1 + y
    then z - x*y
  elseif y <= 100!
    then x/(y + z)^2
  else z - y . x . y;
`,
    `<span class="hljs-comment">/* Maxima computer algebra system */</span>

<span class="hljs-built_in">print</span> (<span class="hljs-string">"mumble"</span>);

<span class="hljs-comment">/* this
  <span class="hljs-comment">/* this is
    <span class="hljs-comment">/* this is a nested comment */</span> nested comment
   */</span> comment
 */</span>

<span class="hljs-built_in">sin</span>(<span class="hljs-literal">%pi</span>); <span class="hljs-comment">/* should be highlighted again */</span>

<span class="hljs-comment">/* programming keywords */</span>

<span class="hljs-keyword">if</span> a <span class="hljs-keyword">then</span> b <span class="hljs-keyword">elseif</span> c <span class="hljs-keyword">then</span> d <span class="hljs-keyword">else</span> f;
<span class="hljs-keyword">for</span> x:<span class="hljs-number">1</span> <span class="hljs-keyword">thru</span> <span class="hljs-number">10</span> <span class="hljs-keyword">step</span> <span class="hljs-number">2</span> <span class="hljs-keyword">do</span> <span class="hljs-built_in">print</span>(x);
<span class="hljs-keyword">for</span> z:-<span class="hljs-number">2</span> <span class="hljs-keyword">while</span> z &lt; <span class="hljs-number">0</span> <span class="hljs-keyword">do</span> <span class="hljs-built_in">print</span>(z);
<span class="hljs-keyword">for</span> m:<span class="hljs-number">0</span> <span class="hljs-keyword">unless</span> m &gt; <span class="hljs-number">10</span> <span class="hljs-keyword">do</span> <span class="hljs-built_in">print</span>(m);
<span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>] <span class="hljs-keyword">do</span> <span class="hljs-built_in">print</span>(x);
foo <span class="hljs-keyword">and</span> bar <span class="hljs-keyword">or</span> <span class="hljs-keyword">not</span> baz;

<span class="hljs-comment">/* different kinds of integers */</span>

<span class="hljs-built_in">ibase</span> : <span class="hljs-number">18</span> $
[<span class="hljs-number">0</span>, <span class="hljs-number">1234</span>, <span class="hljs-number">1234</span>., <span class="hljs-number">0abcdefgh</span>];
<span class="hljs-built_in">reset</span> (<span class="hljs-built_in">ibase</span>) $

<span class="hljs-comment">/* strings */</span>

s1 : <span class="hljs-string">"\\"now\\" is"</span>;
s2 : <span class="hljs-string">"the 'time' for all good men"</span>;
<span class="hljs-built_in">print</span> (s1, s2, <span class="hljs-string">"to come to the aid"</span>,
  <span class="hljs-string">"of their country"</span>);

<span class="hljs-comment">/* expressions */</span>

foo (x, y, z) :=
  <span class="hljs-keyword">if</span> x &gt; <span class="hljs-number">1</span> + y
    <span class="hljs-keyword">then</span> z - x*y
  <span class="hljs-keyword">elseif</span> y &lt;= <span class="hljs-number">100</span>!
    <span class="hljs-keyword">then</span> x/(y + z)^<span class="hljs-number">2</span>
  <span class="hljs-keyword">else</span> z - y . x . y;`
];

export const numbers = [
    `0
0.
12345.
12345
0.0
123.45
0e0
0b0
12345e0
12345e123
12345e-123
12345e+123
12345b0
12345b123
12345b-123
12345b+123
1.2345e0
1.2345e123
1.2345e-123
1.2345e+123
1.2345b0
1.2345b123
1.2345b-123
1.2345b+123`,
    `<span class="hljs-number">0</span>
<span class="hljs-number">0</span>.
<span class="hljs-number">12345</span>.
<span class="hljs-number">12345</span>
<span class="hljs-number">0.0</span>
<span class="hljs-number">123.45</span>
<span class="hljs-number">0e0</span>
<span class="hljs-number">0b0</span>
<span class="hljs-number">12345e0</span>
<span class="hljs-number">12345e123</span>
<span class="hljs-number">12345e-123</span>
<span class="hljs-number">12345e+123</span>
<span class="hljs-number">12345b0</span>
<span class="hljs-number">12345b123</span>
<span class="hljs-number">12345b-123</span>
<span class="hljs-number">12345b+123</span>
<span class="hljs-number">1.2345e0</span>
<span class="hljs-number">1.2345e123</span>
<span class="hljs-number">1.2345e-123</span>
<span class="hljs-number">1.2345e+123</span>
<span class="hljs-number">1.2345b0</span>
<span class="hljs-number">1.2345b123</span>
<span class="hljs-number">1.2345b-123</span>
<span class="hljs-number">1.2345b+123</span>`
];

export const symbols = [
    `/* symbolic constants */

[true, false, unknown, inf, minf, ind,
 und, %e, %i, %pi, %phi, %gamma];

/* built-in variables */

[_, __, %, %%, linel, simp, dispflag,
 stringdisp, lispdisp, %edispflag];

/* built-in functions */

[sin, cosh, exp, atan2, sqrt, log, struve_h,
 sublist_indices, read_array];

/* user-defined symbols */

[foo, ?bar, baz%, quux_mumble_blurf];`,
    `<span class="hljs-comment">/* symbolic constants */</span>

[<span class="hljs-literal">true</span>, <span class="hljs-literal">false</span>, <span class="hljs-literal">unknown</span>, <span class="hljs-literal">inf</span>, <span class="hljs-literal">minf</span>, <span class="hljs-literal">ind</span>,
 <span class="hljs-literal">und</span>, <span class="hljs-literal">%e</span>, <span class="hljs-literal">%i</span>, <span class="hljs-literal">%pi</span>, <span class="hljs-literal">%phi</span>, <span class="hljs-literal">%gamma</span>];

<span class="hljs-comment">/* built-in variables */</span>

[<span class="hljs-symbol">_</span>, <span class="hljs-symbol">__</span>, <span class="hljs-symbol">%</span>, <span class="hljs-symbol">%%</span>, <span class="hljs-built_in">linel</span>, <span class="hljs-built_in">simp</span>, <span class="hljs-built_in">dispflag</span>,
 <span class="hljs-built_in">stringdisp</span>, <span class="hljs-built_in">lispdisp</span>, <span class="hljs-built_in">%edispflag</span>];

<span class="hljs-comment">/* built-in functions */</span>

[<span class="hljs-built_in">sin</span>, <span class="hljs-built_in">cosh</span>, <span class="hljs-built_in">exp</span>, <span class="hljs-built_in">atan2</span>, <span class="hljs-built_in">sqrt</span>, <span class="hljs-built_in">log</span>, <span class="hljs-built_in">struve_h</span>,
 <span class="hljs-built_in">sublist_indices</span>, <span class="hljs-built_in">read_array</span>];

<span class="hljs-comment">/* user-defined symbols */</span>

[foo, ?bar, baz%, quux_mumble_blurf];`
];
