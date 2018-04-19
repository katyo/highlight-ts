export default [
    `O003 (DIAMOND SQUARE)
N2 G54 G90 G49 G80
N3 M6 T1 (1.ENDMILL)
N4 M3 S1800
N5 G0 X-.6 Y2.050
N6 G43  H1  Z.1
N7 G1 Z-.3 F50.
N8 G41 D1 Y1.45
N9 G1 X0 F20.
N10 G2 J-1.45
(CUTTER COMP CANCEL)
N11 G1 Z-.2 F50.
N12 Y-.990
N13 G40
N14 G0 X-.6 Y1.590
N15 G0 Z.1
N16 M5 G49 G28 G91 Z0
N17 CALL O9456
N18 #500=0.004
N19 #503=[#500+#501]
N20 VC45=0.0006
VS4=0.0007
N21 G90 G10 L20 P3 X5.Y4. Z6.567
N22 G0 X5000
N23 IF [#1 LT 0.370] GOTO 49
N24 X-0.678 Y+.990
N25 G84.3 X-0.1
N26 #4=#5*COS[45]
N27 #4=#5*SIN[45]
N28 VZOFZ=652.9658
%`,
    `<span class="hljs-meta">O003</span> <span class="hljs-comment">(DIAMOND SQUARE)</span>
<span class="hljs-symbol">N2</span> <span class="hljs-name">G54</span> <span class="hljs-name">G90</span> <span class="hljs-name">G49</span> <span class="hljs-name">G80</span>
<span class="hljs-symbol">N3</span> <span class="hljs-name">M6</span> T<span class="hljs-number">1</span> <span class="hljs-comment">(1.ENDMILL)</span>
<span class="hljs-symbol">N4</span> <span class="hljs-name">M3</span> S<span class="hljs-number">1800</span>
<span class="hljs-symbol">N5</span> <span class="hljs-name">G0</span> X<span class="hljs-number">-.6</span> Y<span class="hljs-number">2.050</span>
<span class="hljs-symbol">N6</span> <span class="hljs-name">G43</span>  H<span class="hljs-number">1</span>  Z<span class="hljs-number">.1</span>
<span class="hljs-symbol">N7</span> <span class="hljs-name">G1</span> Z<span class="hljs-number">-.3</span> F<span class="hljs-number">50.</span>
<span class="hljs-symbol">N8</span> <span class="hljs-name">G41</span> D<span class="hljs-number">1</span> Y<span class="hljs-number">1.45</span>
<span class="hljs-symbol">N9</span> <span class="hljs-name">G1</span> X<span class="hljs-number">0</span> F<span class="hljs-number">20.</span>
<span class="hljs-symbol">N10</span> <span class="hljs-name">G2</span> J<span class="hljs-number">-1.45</span>
<span class="hljs-comment">(CUTTER COMP CANCEL)</span>
<span class="hljs-symbol">N11</span> <span class="hljs-name">G1</span> Z<span class="hljs-number">-.2</span> F<span class="hljs-number">50.</span>
<span class="hljs-symbol">N12</span> Y<span class="hljs-number">-.990</span>
<span class="hljs-symbol">N13</span> <span class="hljs-name">G40</span>
<span class="hljs-symbol">N14</span> <span class="hljs-name">G0</span> X<span class="hljs-number">-.6</span> Y<span class="hljs-number">1.590</span>
<span class="hljs-symbol">N15</span> <span class="hljs-name">G0</span> Z<span class="hljs-number">.1</span>
<span class="hljs-symbol">N16</span> <span class="hljs-name">M5</span> <span class="hljs-name">G49</span> <span class="hljs-name">G28</span> <span class="hljs-name">G91</span> Z<span class="hljs-number">0</span>
<span class="hljs-symbol">N17</span> <span class="hljs-keyword">CALL</span> <span class="hljs-meta">O9456</span>
<span class="hljs-symbol">N18</span> <span class="hljs-attr">#500</span>=<span class="hljs-number">0.004</span>
<span class="hljs-symbol">N19</span> <span class="hljs-attr">#503</span>=[<span class="hljs-attr">#500</span>+<span class="hljs-attr">#501</span>]
<span class="hljs-symbol">N20</span> <span class="hljs-attr">VC45</span>=<span class="hljs-number">0.0006</span>
<span class="hljs-attr">VS4</span>=<span class="hljs-number">0.0007</span>
<span class="hljs-symbol">N21</span> <span class="hljs-name">G90</span> <span class="hljs-name">G10</span> L<span class="hljs-number">20</span> P<span class="hljs-number">3</span> X<span class="hljs-number">5.</span>Y<span class="hljs-number">4.</span> Z<span class="hljs-number">6.567</span>
<span class="hljs-symbol">N22</span> <span class="hljs-name">G0</span> X<span class="hljs-number">5000</span>
<span class="hljs-symbol">N23</span> <span class="hljs-keyword">IF</span> [<span class="hljs-attr">#1</span> <span class="hljs-keyword">LT</span> <span class="hljs-number">0.370</span>] <span class="hljs-keyword">GOTO</span> <span class="hljs-number">49</span>
<span class="hljs-symbol">N24</span> X<span class="hljs-number">-0.678</span> Y<span class="hljs-number">+.990</span>
<span class="hljs-symbol">N25</span> <span class="hljs-name">G84.3</span> X<span class="hljs-number">-0.1</span>
<span class="hljs-symbol">N26</span> <span class="hljs-attr">#4</span>=<span class="hljs-attr">#5</span>*<span class="hljs-built_in">COS[45]</span>
<span class="hljs-symbol">N27</span> <span class="hljs-attr">#4</span>=<span class="hljs-attr">#5</span>*<span class="hljs-built_in">SIN[45]</span>
<span class="hljs-symbol">N28</span> <span class="hljs-attr">VZOFZ</span>=<span class="hljs-number">652.9658</span>
<span class="hljs-meta">%</span>`
];
