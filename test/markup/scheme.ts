export default [
    `;; Calculation of Hofstadter's male and female sequences as a list of pairs

(define (hofstadter-male-female n)
(letrec ((female (lambda (n)
           (if (= n 0)
           1
           (- n (male (female (- n 1)))))))
     (male (lambda (n)
         (if (= n 0)
             0
             (- n (female (male (- n 1))))))))
  (let loop ((i 0))
    (if (> i n)
    '()
    (cons (cons (female i)
            (male i))
      (loop (+ i 1)))))))

(hofstadter-male-female 8)

(define (find-first func lst)
(call-with-current-continuation
 (lambda (return-immediately)
   (for-each (lambda (x)
       (if (func x)
           (return-immediately x)))
         lst)
   #f)))`,
    `<span class="hljs-comment">;; Calculation of Hofstadter\'s male and female sequences as a list of pairs</span>

(<span class="hljs-name"><span class="hljs-builtin-name">define</span></span> (<span class="hljs-name">hofstadter-male-female</span> n)
(<span class="hljs-name"><span class="hljs-builtin-name">letrec</span></span> ((<span class="hljs-name">female</span> (<span class="hljs-name"><span class="hljs-builtin-name">lambda</span></span> (n)
           (<span class="hljs-name"><span class="hljs-builtin-name">if</span></span> (<span class="hljs-name"><span class="hljs-builtin-name">=</span></span> n <span class="hljs-number">0</span>)
           <span class="hljs-number">1</span>
           (<span class="hljs-name"><span class="hljs-builtin-name">-</span></span> n (<span class="hljs-name">male</span> (<span class="hljs-name">female</span> (<span class="hljs-name"><span class="hljs-builtin-name">-</span></span> n <span class="hljs-number">1</span>)))))))
     (<span class="hljs-name">male</span> (<span class="hljs-name"><span class="hljs-builtin-name">lambda</span></span> (n)
         (<span class="hljs-name"><span class="hljs-builtin-name">if</span></span> (<span class="hljs-name"><span class="hljs-builtin-name">=</span></span> n <span class="hljs-number">0</span>)
             <span class="hljs-number">0</span>
             (<span class="hljs-name"><span class="hljs-builtin-name">-</span></span> n (<span class="hljs-name">female</span> (<span class="hljs-name">male</span> (<span class="hljs-name"><span class="hljs-builtin-name">-</span></span> n <span class="hljs-number">1</span>))))))))
  (<span class="hljs-name"><span class="hljs-builtin-name">let</span></span> loop ((<span class="hljs-name">i</span> <span class="hljs-number">0</span>))
    (<span class="hljs-name"><span class="hljs-builtin-name">if</span></span> (<span class="hljs-name"><span class="hljs-builtin-name">&gt;</span></span> i n)
    \'()
    (<span class="hljs-name"><span class="hljs-builtin-name">cons</span></span> (<span class="hljs-name"><span class="hljs-builtin-name">cons</span></span> (<span class="hljs-name">female</span> i)
            (<span class="hljs-name">male</span> i))
      (<span class="hljs-name">loop</span> (<span class="hljs-name"><span class="hljs-builtin-name">+</span></span> i <span class="hljs-number">1</span>)))))))

(<span class="hljs-name">hofstadter-male-female</span> <span class="hljs-number">8</span>)

(<span class="hljs-name"><span class="hljs-builtin-name">define</span></span> (<span class="hljs-name">find-first</span> func lst)
(<span class="hljs-name"><span class="hljs-builtin-name">call-with-current-continuation</span></span>
 (<span class="hljs-name"><span class="hljs-builtin-name">lambda</span></span> (return-immediately)
   (<span class="hljs-name"><span class="hljs-builtin-name">for-each</span></span> (<span class="hljs-name"><span class="hljs-builtin-name">lambda</span></span> (x)
       (<span class="hljs-name"><span class="hljs-builtin-name">if</span></span> (<span class="hljs-name">func</span> x)
           (<span class="hljs-name">return-immediately</span> x)))
         lst)
   <span class="hljs-literal">#f</span>)))`
];

export const lambda = [
    `(lambda (x y z) (+ y z))`,
    `(<span class="hljs-name"><span class="hljs-builtin-name">lambda</span></span> (x y z) (<span class="hljs-name"><span class="hljs-builtin-name">+</span></span> y z))`
];

export const quoted = [
    `(scheme 'a '(a quoted (list)) \`(quoted))`,
    `(<span class="hljs-name">scheme</span> <span class="hljs-symbol">'a</span> '(a quoted (list)) \`(quoted))`
];
