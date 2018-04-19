export const gh1031 = [
    `public class DefaultDataDaoImpl {
  private List<AbstractCmrDataProcessor> cmrDataProcessors;
}

public class DefaultDataDaoImpl {
  private List<AbstractCmrDataProcessor, AbstractCmrDataProcessor> cmrDataProcessors;
}`,
    `<span class="hljs-keyword">public</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">DefaultDataDaoImpl</span> </span>{
  <span class="hljs-keyword">private</span> List&lt;AbstractCmrDataProcessor&gt; cmrDataProcessors;
}

<span class="hljs-keyword">public</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">DefaultDataDaoImpl</span> </span>{
  <span class="hljs-keyword">private</span> List&lt;AbstractCmrDataProcessor, AbstractCmrDataProcessor&gt; cmrDataProcessors;
}`
];

export const numbers = [
    `long creditCardNumber = 1234_5678_9012_3456L;
long socialSecurityNumber = 999_99_9999L;
float pi = 3.14_15F;
long hexBytes = 0xFF_EC_DE_5E;
long hexWords = 0xCAFE_BABE;
long maxLong = 0x7fff_ffff_ffff_ffffL;
byte nybbles = 0b0010_0101;
long bytes = 0b11010010_01101001_10010100_10010010;
int n = 1234 + Contacts._ID;`,
    `<span class="hljs-keyword">long</span> creditCardNumber = <span class="hljs-number">1234_5678_9012_3456L</span>;
<span class="hljs-keyword">long</span> socialSecurityNumber = <span class="hljs-number">999_99_9999L</span>;
<span class="hljs-keyword">float</span> pi = <span class="hljs-number">3.14_15F</span>;
<span class="hljs-keyword">long</span> hexBytes = <span class="hljs-number">0xFF_EC_DE_5E</span>;
<span class="hljs-keyword">long</span> hexWords = <span class="hljs-number">0xCAFE_BABE</span>;
<span class="hljs-keyword">long</span> maxLong = <span class="hljs-number">0x7fff_ffff_ffff_ffffL</span>;
<span class="hljs-keyword">byte</span> nybbles = <span class="hljs-number">0b0010_0101</span>;
<span class="hljs-keyword">long</span> bytes = <span class="hljs-number">0b11010010_01101001_10010100_10010010</span>;
<span class="hljs-keyword">int</span> n = <span class="hljs-number">1234</span> + Contacts._ID;`
];

export const titles = [
    `public class Greet {
    public Either<Integer, String> f(int val) {
        new Type();
        if (val) {
            return getType();
        } else if (!val) {
            throw getError();
        }
    }
}`,
    `<span class="hljs-keyword">public</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">Greet</span> </span>{
    <span class="hljs-function"><span class="hljs-keyword">public</span> Either&lt;Integer, String&gt; <span class="hljs-title">f</span><span class="hljs-params">(<span class="hljs-keyword">int</span> val)</span> </span>{
        <span class="hljs-keyword">new</span> Type();
        <span class="hljs-keyword">if</span> (val) {
            <span class="hljs-keyword">return</span> getType();
        } <span class="hljs-keyword">else</span> <span class="hljs-keyword">if</span> (!val) {
            <span class="hljs-keyword">throw</span> getError();
        }
    }
}`
];
