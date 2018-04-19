export const comments = [
    `<?php

/**
 * @param int $a
 * @return bool
 */
function isEven($a) {
    return ($a % 2) === 0;
}

/**
 * TODO: Rely on isEven, but do not highlight bug.
 *
 * @param int $a
 * @return bool
 */
function isOdd($a) {
    return ($a % 2) === 1;
}`,
    `<span class="hljs-meta">&lt;?php</span>

<span class="hljs-comment">/**
 * <span class="hljs-doctag">@param</span> int $a
 * <span class="hljs-doctag">@return</span> bool
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">isEven</span><span class="hljs-params">($a)</span> </span>{
    <span class="hljs-keyword">return</span> ($a % <span class="hljs-number">2</span>) === <span class="hljs-number">0</span>;
}

<span class="hljs-comment">/**
 * <span class="hljs-doctag">TODO:</span> Rely on isEven, but do not highlight bug.
 *
 * <span class="hljs-doctag">@param</span> int $a
 * <span class="hljs-doctag">@return</span> bool
 */</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">isOdd</span><span class="hljs-params">($a)</span> </span>{
    <span class="hljs-keyword">return</span> ($a % <span class="hljs-number">2</span>) === <span class="hljs-number">1</span>;
}`
];

export const heredoc = [
    `echo <<<EOT
String with $var and {$foo->bar[1]}.
EOT;

echo <<<EOT
  string
  EOT
  still string
EOT;

array(<<<EOD
foobar!
EOD
);
`,
    `<span class="hljs-keyword">echo</span> <span class="hljs-string">&lt;&lt;&lt;EOT
String with <span class="hljs-subst">$var</span> and <span class="hljs-subst">{$foo-&gt;bar[1]}</span>.
EOT;</span>

<span class="hljs-keyword">echo</span> <span class="hljs-string">&lt;&lt;&lt;EOT
  string
  EOT
  still string
EOT;</span>

<span class="hljs-keyword">array</span>(<span class="hljs-string">&lt;&lt;&lt;EOD
foobar!
EOD</span>
);`
];
