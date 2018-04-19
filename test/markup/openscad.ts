export default [
    `use <write.scad>
include <../common/base.scad>

//draw a foobar
module foobar(){
    translate([0,-10,0])
    difference(){
        cube([5,10.04,15]);
        sphere(r=10,$fn=100);
    }
}

foobar();
#cube ([5,5,5]);
echo("done");`,
    `<span class="hljs-meta"><span class="hljs-meta-keyword">use</span> &lt;write.scad&gt;</span>
<span class="hljs-meta"><span class="hljs-meta-keyword">include</span> &lt;../common/base.scad&gt;</span>

<span class="hljs-comment">//draw a foobar</span>
<span class="hljs-function"><span class="hljs-keyword">module</span> <span class="hljs-title">foobar</span><span class="hljs-params">()</span>{</span>
    <span class="hljs-built_in">translate</span>([<span class="hljs-number">0</span>,-<span class="hljs-number">10</span>,<span class="hljs-number">0</span>])
    <span class="hljs-built_in">difference</span>(){
        <span class="hljs-built_in">cube</span>([<span class="hljs-number">5</span>,<span class="hljs-number">10.04</span>,<span class="hljs-number">15</span>]);
        <span class="hljs-built_in">sphere</span>(r=<span class="hljs-number">10</span>,<span class="hljs-keyword">$fn</span>=<span class="hljs-number">100</span>);
    }
}

foobar();
#<span class="hljs-built_in">cube</span> ([<span class="hljs-number">5</span>,<span class="hljs-number">5</span>,<span class="hljs-number">5</span>]);
<span class="hljs-built_in">echo</span>(<span class="hljs-string">"done"</span>);`
];
