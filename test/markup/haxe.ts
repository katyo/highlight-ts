export default [
    `package my.package;

#if js
import js.Browser;
#elseif sys
import Sys;
#else
import Date;
#end

import Lambda;
using Main.IntExtender;

extern class Math {
    static var PI(default,null) : Float;
    static function floor(v:Float):Int;
}

/**
 * Abstract forwarding
 */
abstract MyAbstract(Int) from Int to Int {
    inline function new(i:Int) {
        this = i;
    }

    @:op(A * B)
    public function multiply(rhs:MyAbstract) {
        return this * rhs;
    }
}

// an enum
enum Color {
    Red;
    Green;
    Blue;
    Rgb(r:Int, g:Int, b:Int);
}

@:generic
class Gen<T> {
    var v:T;
    public function new(v:T) {
        this.v = v;
    }

    public var x(get, set):T;

    private inline function get_x():T
        return v;

    private inline function set_x(x:T):T
        return v = x;
}

class Main extends BaseClass implements SomeFunctionality {
    var callback:Void->Void = null;
    var myArray:Array<Float> = new Array<Float>();
    var arr = [4,8,0,3,9,1,5,2,6,7];

    public function new(x) {
        super(x);
    }

    public static function main() {
        trace('What\\'s up?');
        trace('Hi, \${name}!');

        // switch statements!
        var c:Color = Color.Green;
        var x:Int = switch(c) {
            case Red: 0;
            case Green: 1;
            case Blue: 2;
            case Rgb(r, g, b): 3;
            case _: -1;
        }

        for(i in 0...3) {
            trace(i);
            continue;
            break;
        }

        do {
            trace("Hey-o!");
        } while(false);

        var done:Bool = false;
        while(!done) {
            done = true;
        }

        var H:Int = cast new MyAbstract(42);
        var h:Int = cast(new MyAbstract(31), Int);

        try {
            throw "error";
        }
        catch(err:String) {
            trace(err);
        }
        
        var map = new haxe.ds.IntMap<String>();
        var f = map.set.bind(_, "12");
    }

    function nothing():Void
        trace("nothing!");

    private inline function func(a:Int, b:Float, ?c:String, d:Bool=false):Dynamic {
        return {
            x: 0,
            y: true,
            z: false,
            a: 1.53,
            b: 5e10,
            c: -12,
            h: null
        };
    }


    override function quicksort( lo : Int, hi : Int ) : Void {
        var i = lo;
        var j = hi;
        var buf = arr;
        var p = buf[(lo+hi)>>1];
        while( i <= j ) {
            while( arr[i] > p ) i++;
            while( arr[j] < p ) j--;
            if( i <= j ) {
                var t = buf[i];
                buf[i++] = buf[j];
                buf[j--] = t;
            }
        }
        if( lo < j ) quicksort( lo, j );
        if( i < hi ) quicksort( i, hi );
    }
}`,
    `<span class="hljs-keyword">package</span> my.<span class="hljs-keyword">package</span>;

<span class="hljs-meta">#<span class="hljs-meta-keyword">if</span> js</span>
<span class="hljs-keyword">import</span> js.Browser;
<span class="hljs-meta">#<span class="hljs-meta-keyword">elseif</span> sys</span>
<span class="hljs-keyword">import</span> Sys;
<span class="hljs-meta">#<span class="hljs-meta-keyword">else</span></span>
<span class="hljs-keyword">import</span> Date;
<span class="hljs-meta">#<span class="hljs-meta-keyword">end</span></span>

<span class="hljs-keyword">import</span> Lambda;
<span class="hljs-keyword">using</span> Main.IntExtender;

<span class="hljs-keyword">extern</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Math</span> </span>{
    <span class="hljs-keyword">static</span> <span class="hljs-keyword">var</span> PI(<span class="hljs-keyword">default</span>,<span class="hljs-literal">null</span>) : <span class="hljs-type">Float</span>;
    <span class="hljs-keyword">static</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">floor</span></span>(v:<span class="hljs-type">Float</span>):<span class="hljs-type">Int</span>;
}

<span class="hljs-comment">/**
 * Abstract forwarding
 */</span>
<span class="hljs-class"><span class="hljs-keyword">abstract</span> <span class="hljs-title">MyAbstract</span>(<span class="hljs-type">Int</span>) <span class="hljs-keyword">from</span> <span class="hljs-type">Int</span> <span class="hljs-keyword">to</span> <span class="hljs-type">Int</span> {</span>
    <span class="hljs-keyword">inline</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">new</span></span>(i:<span class="hljs-type">Int</span>) {
        <span class="hljs-built_in">this</span> = i;
    }

    <span class="hljs-meta">@:op(A * B)</span>
    <span class="hljs-keyword">public</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">multiply</span></span>(rhs:<span class="hljs-type">MyAbstract</span>) {
        <span class="hljs-keyword">return</span> <span class="hljs-built_in">this</span> * rhs;
    }
}

<span class="hljs-comment">// an enum</span>
<span class="hljs-class"><span class="hljs-keyword">enum</span> <span class="hljs-title">Color</span> {</span>
    Red;
    Green;
    Blue;
    Rgb(r:<span class="hljs-type">Int</span>, g:<span class="hljs-type">Int</span>, b:<span class="hljs-type">Int</span>);
}

<span class="hljs-meta">@:generic</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Gen</span>&lt;<span class="hljs-title">T</span>&gt; </span>{
    <span class="hljs-keyword">var</span> v:<span class="hljs-type">T</span>;
    <span class="hljs-keyword">public</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">new</span></span>(v:<span class="hljs-type">T</span>) {
        <span class="hljs-built_in">this</span>.v = v;
    }

    <span class="hljs-keyword">public</span> <span class="hljs-keyword">var</span> x(<span class="hljs-keyword">get</span>, <span class="hljs-keyword">set</span>):<span class="hljs-type">T</span>;

    <span class="hljs-keyword">private</span> <span class="hljs-keyword">inline</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">get_x</span></span>():<span class="hljs-type">T</span>
        <span class="hljs-keyword">return</span> v;

    <span class="hljs-keyword">private</span> <span class="hljs-keyword">inline</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">set_x</span></span>(x:<span class="hljs-type">T</span>):<span class="hljs-type">T</span>
        <span class="hljs-keyword">return</span> v = x;
}

<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Main</span> <span class="hljs-keyword"><span class="hljs-keyword">extends</span> <span class="hljs-type">BaseClass</span></span> <span class="hljs-keyword"><span class="hljs-keyword">implements</span> <span class="hljs-type">SomeFunctionality</span></span> </span>{
    <span class="hljs-keyword">var</span> callback:<span class="hljs-type">Void-&gt;Void </span>= <span class="hljs-literal">null</span>;
    <span class="hljs-keyword">var</span> myArray:<span class="hljs-type">Array</span>&lt;<span class="hljs-keyword">Float</span>&gt; = <span class="hljs-keyword">new</span> <span class="hljs-type">Array</span>&lt;<span class="hljs-keyword">Float</span>&gt;();
    <span class="hljs-keyword">var</span> arr = [<span class="hljs-number">4</span>,<span class="hljs-number">8</span>,<span class="hljs-number">0</span>,<span class="hljs-number">3</span>,<span class="hljs-number">9</span>,<span class="hljs-number">1</span>,<span class="hljs-number">5</span>,<span class="hljs-number">2</span>,<span class="hljs-number">6</span>,<span class="hljs-number">7</span>];

    <span class="hljs-keyword">public</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">new</span></span>(x) {
        <span class="hljs-keyword">super</span>(x);
    }

    <span class="hljs-keyword">public</span> <span class="hljs-keyword">static</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">main</span></span>() {
        <span class="hljs-built_in">trace</span>(<span class="hljs-string">\'What\\\'s up?\'</span>);
        <span class="hljs-built_in">trace</span>(<span class="hljs-string">\'Hi, <span class="hljs-subst">\${name}</span>!\'</span>);

        <span class="hljs-comment">// switch statements!</span>
        <span class="hljs-keyword">var</span> c:<span class="hljs-type">Color </span>= Color.Green;
        <span class="hljs-keyword">var</span> x:<span class="hljs-type">Int </span>= <span class="hljs-keyword">switch</span>(c) {
            <span class="hljs-keyword">case</span> Red: <span class="hljs-type">0</span>;
            <span class="hljs-keyword">case</span> Green: <span class="hljs-type">1</span>;
            <span class="hljs-keyword">case</span> Blue: <span class="hljs-type">2</span>;
            <span class="hljs-keyword">case</span> Rgb(r, g, b): <span class="hljs-type">3</span>;
            <span class="hljs-keyword">case</span> <span class="hljs-literal">_</span>: <span class="hljs-type">-1</span>;
        }

        <span class="hljs-keyword">for</span>(i <span class="hljs-keyword">in</span> <span class="hljs-number">0.</span>.<span class="hljs-number">.3</span>) {
            <span class="hljs-built_in">trace</span>(i);
            <span class="hljs-keyword">continue</span>;
            <span class="hljs-keyword">break</span>;
        }

        <span class="hljs-keyword">do</span> {
            <span class="hljs-built_in">trace</span>(<span class="hljs-string">"Hey-o!"</span>);
        } <span class="hljs-keyword">while</span>(<span class="hljs-literal">false</span>);

        <span class="hljs-keyword">var</span> done:<span class="hljs-type">Bool </span>= <span class="hljs-literal">false</span>;
        <span class="hljs-keyword">while</span>(!done) {
            done = <span class="hljs-literal">true</span>;
        }

        <span class="hljs-keyword">var</span> H:<span class="hljs-type">Int </span>= <span class="hljs-keyword">cast</span> <span class="hljs-keyword">new</span> <span class="hljs-type">MyAbstract</span>(<span class="hljs-number">42</span>);
        <span class="hljs-keyword">var</span> h:<span class="hljs-type">Int </span>= <span class="hljs-keyword">cast</span>(<span class="hljs-keyword">new</span> <span class="hljs-type">MyAbstract</span>(<span class="hljs-number">31</span>), <span class="hljs-keyword">Int</span>);

        <span class="hljs-keyword">try</span> {
            <span class="hljs-keyword">throw</span> <span class="hljs-string">"error"</span>;
        }
        <span class="hljs-keyword">catch</span>(err:<span class="hljs-type">String</span>) {
            <span class="hljs-built_in">trace</span>(err);
        }
        
        <span class="hljs-keyword">var</span> map = <span class="hljs-keyword">new</span> <span class="hljs-type">haxe</span>.ds.IntMap&lt;<span class="hljs-keyword">String</span>&gt;();
        <span class="hljs-keyword">var</span> f = map.<span class="hljs-keyword">set</span>.bind(<span class="hljs-literal">_</span>, <span class="hljs-string">"12"</span>);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">nothing</span></span>():<span class="hljs-type">Void</span>
        <span class="hljs-built_in">trace</span>(<span class="hljs-string">"nothing!"</span>);

    <span class="hljs-keyword">private</span> <span class="hljs-keyword">inline</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">func</span></span>(a:<span class="hljs-type">Int</span>, b:<span class="hljs-type">Float</span>, ?c:<span class="hljs-type">String</span>, d:<span class="hljs-type">Bool</span>=<span class="hljs-literal">false</span>):<span class="hljs-type">Dynamic </span>{
        <span class="hljs-keyword">return</span> {
            x: <span class="hljs-type">0</span>,
            y: <span class="hljs-type">true</span>,
            z: <span class="hljs-type">false</span>,
            a: <span class="hljs-type">1</span>.<span class="hljs-number">53</span>,
            b: <span class="hljs-type">5e10</span>,
            c: <span class="hljs-type">-12</span>,
            h: <span class="hljs-type">null</span>
        };
    }


    <span class="hljs-keyword">override</span> <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">quicksort</span></span>( lo : <span class="hljs-type">Int</span>, hi : <span class="hljs-type">Int </span>) : <span class="hljs-type">Void </span>{
        <span class="hljs-keyword">var</span> i = lo;
        <span class="hljs-keyword">var</span> j = hi;
        <span class="hljs-keyword">var</span> buf = arr;
        <span class="hljs-keyword">var</span> p = buf[(lo+hi)&gt;&gt;<span class="hljs-number">1</span>];
        <span class="hljs-keyword">while</span>( i &lt;= j ) {
            <span class="hljs-keyword">while</span>( arr[i] &gt; p ) i++;
            <span class="hljs-keyword">while</span>( arr[j] &lt; p ) j--;
            <span class="hljs-keyword">if</span>( i &lt;= j ) {
                <span class="hljs-keyword">var</span> t = buf[i];
                buf[i++] = buf[j];
                buf[j--] = t;
            }
        }
        <span class="hljs-keyword">if</span>( lo &lt; j ) quicksort( lo, j );
        <span class="hljs-keyword">if</span>( i &lt; hi ) quicksort( i, hi );
    }
}`
];
