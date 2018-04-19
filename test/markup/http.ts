export const request = [
    `POST /task?id=1 HTTP/1.1
Host: example.org
Content-Type: application/json; charset=utf-8
Content-Length: 19

{"status": "ok", "extended": true}
`,
    `<span class="hljs-keyword">POST</span> <span class="hljs-string">/task?id=1</span> HTTP/1.1
<span class="hljs-attribute">Host</span>: example.org
<span class="hljs-attribute">Content-Type</span>: application/json; charset=utf-8
<span class="hljs-attribute">Content-Length</span>: 19

<span class="json">{<span class="hljs-attr">"status"</span>: <span class="hljs-string">"ok"</span>, <span class="hljs-attr">"extended"</span>: <span class="hljs-literal">true</span>}
</span>`
];

export const response = [
    `HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Content-Length: 19

{"status": "ok", "extended": true}
`,
    `HTTP/1.1 <span class="hljs-number">200</span> <span class="hljs-string">OK</span>
<span class="hljs-attribute">Content-Type</span>: application/json; charset=utf-8
<span class="hljs-attribute">Content-Length</span>: 19

<span class="json">{<span class="hljs-attr">"status"</span>: <span class="hljs-string">"ok"</span>, <span class="hljs-attr">"extended"</span>: <span class="hljs-literal">true</span>}
</span>`
];
