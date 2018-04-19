export default [
    `require_once 'Zend/Uri/Http.php';

namespace Location\Web;

interface Factory
{
    static function _factory();
}

abstract class URI extends BaseURI implements Factory
{
    abstract function test();

    public static $st1 = 1;
    const ME = "Yo";
    var $list = NULL;
    private $var;

    /**
     * Returns a URI
     *
     * @return URI
     */
    static public function _factory($stats = array(), $uri = 'http')
    {
        echo __METHOD__;
        $uri = explode(':', $uri, 0b10);
        $schemeSpecific = isset($uri[1]) ? $uri[1] : '';
        $desc = 'Multi
line description';

        // Security check
        if (!ctype_alnum($scheme)) {
            throw new Zend_Uri_Exception('Illegal scheme');
        }

        $this->var = 0 - self::$st;
        $this->list = list(Array("1"=> 2, 2=>self::ME, 3 => \Location\Web\URI::class));

        return [
            'uri'   => $uri,
            'value' => null,
        ];
    }
}

echo URI::ME . URI::$st1;

__halt_compiler () ; datahere
datahere
datahere */
datahere`,
    `<span class="hljs-keyword">require_once</span> <span class="hljs-string">'Zend/Uri/Http.php'</span>;

<span class="hljs-keyword">namespace</span> <span class="hljs-title">LocationWeb</span>;

<span class="hljs-class"><span class="hljs-keyword">interface</span> <span class="hljs-title">Factory</span>
</span>{
    <span class="hljs-keyword">static</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_factory</span><span class="hljs-params">()</span></span>;
}

<span class="hljs-keyword">abstract</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">URI</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">BaseURI</span> <span class="hljs-keyword">implements</span> <span class="hljs-title">Factory</span>
</span>{
    <span class="hljs-keyword">abstract</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">test</span><span class="hljs-params">()</span></span>;

    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> $st1 = <span class="hljs-number">1</span>;
    <span class="hljs-keyword">const</span> ME = <span class="hljs-string">"Yo"</span>;
    <span class="hljs-keyword">var</span> $list = <span class="hljs-keyword">NULL</span>;
    <span class="hljs-keyword">private</span> $var;

    <span class="hljs-comment">/**
     * Returns a URI
     *
     * <span class="hljs-doctag">@return</span> URI
     */</span>
    <span class="hljs-keyword">static</span> <span class="hljs-keyword">public</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">_factory</span><span class="hljs-params">($stats = array<span class="hljs-params">()</span>, $uri = <span class="hljs-string">'http'</span>)</span>
    </span>{
        <span class="hljs-keyword">echo</span> <span class="hljs-keyword">__METHOD__</span>;
        $uri = explode(<span class="hljs-string">':'</span>, $uri, <span class="hljs-number">0b10</span>);
        $schemeSpecific = <span class="hljs-keyword">isset</span>($uri[<span class="hljs-number">1</span>]) ? $uri[<span class="hljs-number">1</span>] : <span class="hljs-string">''</span>;
        $desc = <span class="hljs-string">'Multi
line description'</span>;

        <span class="hljs-comment">// Security check</span>
        <span class="hljs-keyword">if</span> (!ctype_alnum($scheme)) {
            <span class="hljs-keyword">throw</span> <span class="hljs-keyword">new</span> Zend_Uri_Exception(<span class="hljs-string">'Illegal scheme'</span>);
        }

        <span class="hljs-keyword">$this</span>-&gt;var = <span class="hljs-number">0</span> - <span class="hljs-keyword">self</span>::$st;
        <span class="hljs-keyword">$this</span>-&gt;list = <span class="hljs-keyword">list</span>(<span class="hljs-keyword">Array</span>(<span class="hljs-string">"1"</span>=&gt; <span class="hljs-number">2</span>, <span class="hljs-number">2</span>=&gt;<span class="hljs-keyword">self</span>::ME, <span class="hljs-number">3</span> =&gt; LocationWebURI::class));

        <span class="hljs-keyword">return</span> [
            <span class="hljs-string">'uri'</span>   =&gt; $uri,
            <span class="hljs-string">'value'</span> =&gt; <span class="hljs-keyword">null</span>,
        ];
    }
}

<span class="hljs-keyword">echo</span> URI::ME . URI::$st1;

<span class="hljs-comment"><span class="hljs-keyword">__halt_compiler</span> () ; datahere
datahere
datahere */
datahere</span>`
];

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
