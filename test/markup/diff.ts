export default [
    `Index: languages/ini.js
===================================================================
--- languages/ini.js    (revision 199)
+++ languages/ini.js    (revision 200)
@@ -1,8 +1,7 @@
 hljs.LANGUAGES.ini =
 {
   case_insensitive: true,
-  defaultMode:
-  {
+  defaultMode: {
     contains: ['comment', 'title', 'setting'],
     illegal: '[^\\s]'
   },

*** /path/to/original timestamp
--- /path/to/new      timestamp
***************
*** 1,3 ****
--- 1,9 ----
+ This is an important
+ notice! It should
+ therefore be located at
+ the beginning of this
+ document!

! compress the size of the
! changes.

  It is important to spell`,
    `<span class="hljs-comment">Index: languages/ini.js</span>
<span class="hljs-comment">===================================================================</span>
<span class="hljs-comment">--- languages/ini.js    (revision 199)</span>
<span class="hljs-comment">+++ languages/ini.js    (revision 200)</span>
<span class="hljs-meta">@@ -1,8 +1,7 @@</span>
 hljs.LANGUAGES.ini =
 {
   case_insensitive: true,
<span class="hljs-deletion">-  defaultMode:</span>
<span class="hljs-deletion">-  {</span>
<span class="hljs-addition">+  defaultMode: {</span>
     contains: ['comment', 'title', 'setting'],
     illegal: '[^\\s]'
   },

<span class="hljs-comment">*** /path/to/original timestamp</span>
<span class="hljs-comment">--- /path/to/new      timestamp</span>
<span class="hljs-comment">***************</span>
<span class="hljs-meta">*** 1,3 ****</span>
<span class="hljs-meta">--- 1,9 ----</span>
<span class="hljs-addition">+ This is an important</span>
<span class="hljs-addition">+ notice! It should</span>
<span class="hljs-addition">+ therefore be located at</span>
<span class="hljs-addition">+ the beginning of this</span>
<span class="hljs-addition">+ document!</span>

<span class="hljs-addition">! compress the size of the</span>
<span class="hljs-addition">! changes.</span>

  It is important to spell`
];

export const comments = [
    `Index: languages/demo.js
===================================================================
--- languages/demo.js    (revision 199)
+++ languages/demo.js    (revision 200)
@@ -1,8 +1,7 @@
+ Here we highlight correctly
====
+ Here too
=====
+ Here we don't anymore after five '=' next to each other`,
    `<span class="hljs-comment">Index: languages/demo.js</span>
<span class="hljs-comment">===================================================================</span>
<span class="hljs-comment">--- languages/demo.js    (revision 199)</span>
<span class="hljs-comment">+++ languages/demo.js    (revision 200)</span>
<span class="hljs-meta">@@ -1,8 +1,7 @@</span>
<span class="hljs-addition">+ Here we highlight correctly</span>
<span class="hljs-comment">====</span>
<span class="hljs-addition">+ Here too</span>
<span class="hljs-comment">=====</span>
<span class="hljs-addition">+ Here we don't anymore after five '=' next to each other</span>`
];
