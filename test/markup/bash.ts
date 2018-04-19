export default [
    `#!/bin/bash

###### CONFIG
ACCEPTED_HOSTS="/root/.hag_accepted.conf"
BE_VERBOSE=false

if [ "$UID" -ne 0 ]
then
 echo "Superuser rights required"
 exit 2
fi

genApacheConf(){
 echo -e "# Host \${HOME_DIR}$1/$2 :"
}`,
    `<span class="hljs-meta">#!/bin/bash
</span>
<span class="hljs-comment">###### CONFIG</span>
ACCEPTED_HOSTS=<span class="hljs-string">"/root/.hag_accepted.conf"</span>
BE_VERBOSE=<span class="hljs-literal">false</span>

<span class="hljs-keyword">if</span> [ <span class="hljs-string">"<span class="hljs-variable">$UID</span>"</span> -ne 0 ]
<span class="hljs-keyword">then</span>
 <span class="hljs-built_in">echo</span> <span class="hljs-string">"Superuser rights required"</span>
 <span class="hljs-built_in">exit</span> 2
<span class="hljs-keyword">fi</span>

<span class="hljs-function"><span class="hljs-title">genApacheConf</span></span>(){
 <span class="hljs-built_in">echo</span> -e <span class="hljs-string">"# Host <span class="hljs-variable">\${HOME_DIR}</span><span class="hljs-variable">$1</span>/<span class="hljs-variable">$2</span> :"</span>
}`
];

export const no_numbers = [
    `# numbers aren't highlighted in bash as their semantics is
# not strictly defined for command line parameters
$ tail -10 access.log`,
    `<span class="hljs-comment"># numbers aren't highlighted in bash as their semantics is</span>
<span class="hljs-comment"># not strictly defined for command line parameters</span>
$ tail -10 access.log`
];
