export default [
    `#!/usr/bin/env csi

(defun prompt-for-cd ()
   "Prompts
    for CD"
   (prompt-read "Title" 1.53 1 2/4 1.7 1.7e0 2.9E-4 +42 -7 #b001 #b001/100 #o777 #O777 #xabc55 #c(0 -5.6))
   (prompt-read "Artist" &rest)
   (or (parse-integer (prompt-read "Rating") :junk-allowed t) 0)
  (if x (format t "yes") (format t "no" nil) ;and here comment
  )
  ;; second line comment
  '(+ 1 2)
  (defvar *lines*)                ; list of all lines
  (position-if-not #'sys::whitespacep line :start beg))
  (quote (privet 1 2 3))
  '(hello world)
  (* 5 7)
  (1 2 34 5)
  (:use "aaaa")
  (let ((x 10) (y 20))
    (print (+ x y))
  )`,
    `<span class="hljs-meta">#!/usr/bin/env csi</span>

(<span class="hljs-name">defun</span> prompt-for-cd ()
   <span class="hljs-string">"Prompts
    for CD"</span>
   (<span class="hljs-name">prompt-read</span> <span class="hljs-string">"Title"</span> <span class="hljs-number">1.53</span> <span class="hljs-number">1</span> <span class="hljs-number">2/4</span> <span class="hljs-number">1.7</span> <span class="hljs-number">1.7e0</span> <span class="hljs-number">2.9E-4</span> <span class="hljs-number">+42</span> <span class="hljs-number">-7</span> <span class="hljs-number">#b001</span> <span class="hljs-number">#b001/100</span> <span class="hljs-number">#o777</span> <span class="hljs-number">#O777</span> <span class="hljs-number">#xabc55</span> <span class="hljs-number">#c(0 -5.6)</span>)
   (<span class="hljs-name">prompt-read</span> <span class="hljs-string">"Artist"</span> <span class="hljs-symbol">&amp;rest</span>)
   (<span class="hljs-name">or</span> (<span class="hljs-name">parse-integer</span> (<span class="hljs-name">prompt-read</span> <span class="hljs-string">"Rating"</span>) <span class="hljs-symbol">:junk-allowed</span> <span class="hljs-literal">t</span>) <span class="hljs-number">0</span>)
  (<span class="hljs-name">if</span> x (<span class="hljs-name">format</span> <span class="hljs-literal">t</span> <span class="hljs-string">"yes"</span>) (<span class="hljs-name">format</span> <span class="hljs-literal">t</span> <span class="hljs-string">"no"</span> <span class="hljs-literal">nil</span>) <span class="hljs-comment">;and here comment</span>
  )
  <span class="hljs-comment">;; second line comment</span>
  \'(+ <span class="hljs-number">1</span> <span class="hljs-number">2</span>)
  (<span class="hljs-name">defvar</span> *lines*)                <span class="hljs-comment">; list of all lines</span>
  (<span class="hljs-name">position-if-not</span> #'sys::whitespacep line <span class="hljs-symbol">:start</span> beg))
  (<span class="hljs-name">quote</span> (privet <span class="hljs-number">1</span> <span class="hljs-number">2</span> <span class="hljs-number">3</span>))
  \'(hello world)
  (<span class="hljs-name">*</span> <span class="hljs-number">5</span> <span class="hljs-number">7</span>)
  (<span class="hljs-number">1</span> <span class="hljs-number">2</span> <span class="hljs-number">34</span> <span class="hljs-number">5</span>)
  (<span class="hljs-symbol">:use</span> <span class="hljs-string">"aaaa"</span>)
  (<span class="hljs-name">let</span> ((<span class="hljs-name">x</span> <span class="hljs-number">10</span>) (<span class="hljs-name">y</span> <span class="hljs-number">20</span>))
    (<span class="hljs-name">print</span> (<span class="hljs-name">+</span> x y))
  )`
];

export const mec = [
    `; MEC: Multiple Escape Characters. See https://github.com/isagalaev/highlight.js/issues/615
(|spaces and
newlines| x)
(x '|quoted|)`,
    `<span class="hljs-comment">; MEC: Multiple Escape Characters. See https://github.com/isagalaev/highlight.js/issues/615</span>
(<span class="hljs-name">|spaces and
newlines|</span> x)
(<span class="hljs-name">x</span> '|quoted|)`
];
