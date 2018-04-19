export default [
    `user  www www;
worker_processes  2;
pid /var/run/nginx.pid;
error_log  /var/log/nginx.error_log  debug | info | notice | warn | error | crit;

events {
    connections   2000;
    use kqueue | rtsig | epoll | /dev/poll | select | poll;
}

http {
    log_format main      '$remote_addr - $remote_user [$time_local] '
                         '"$request" $status $bytes_sent '
                         '"$http_referer" "$http_user_agent" '
                         '"$gzip_ratio"';

    send_timeout 3m;
    client_header_buffer_size 1k;

    gzip on;
    gzip_min_length 1100;

    #lingering_time 30;

    server {
        server_name   one.example.com  www.one.example.com;
        access_log   /var/log/nginx.access_log  main;

        rewrite (.*) /index.php?page=$1 break;

        location / {
            proxy_pass         http://127.0.0.1/;
            proxy_redirect     off;
            proxy_set_header   Host             $host;
            proxy_set_header   X-Real-IP        $remote_addr;
            charset            koi8-r;
        }

        location /api/ {
            fastcgi_pass 127.0.0.1:9000;
        }

        location ~* \.(jpg|jpeg|gif)$ {
            root         /spool/www;
        }
    }
}`,
    `<span class="hljs-attribute">user</span>  www www;
<span class="hljs-attribute">worker_processes</span>  <span class="hljs-number">2</span>;
<span class="hljs-attribute">pid</span> /var/run/nginx.pid;
<span class="hljs-attribute">error_log</span>  /var/log/nginx.error_log  <span class="hljs-literal">debug</span> | <span class="hljs-literal">info</span> | <span class="hljs-literal">notice</span> | <span class="hljs-literal">warn</span> | <span class="hljs-literal">error</span> | <span class="hljs-literal">crit</span>;

<span class="hljs-section">events</span> {
    <span class="hljs-attribute">connections</span>   <span class="hljs-number">2000</span>;
    <span class="hljs-attribute">use</span> <span class="hljs-literal">kqueue</span> | <span class="hljs-literal">rtsig</span> | <span class="hljs-literal">epoll</span> | <span class="hljs-literal">/dev/poll</span> | <span class="hljs-literal">select</span> | <span class="hljs-literal">poll</span>;
}

<span class="hljs-section">http</span> {
    <span class="hljs-attribute">log_format</span> main      <span class="hljs-string">\'<span class="hljs-variable">$remote_addr</span> - <span class="hljs-variable">$remote_user</span> [<span class="hljs-variable">$time_local</span>] \'</span>
                         <span class="hljs-string">\'"<span class="hljs-variable">$request</span>" <span class="hljs-variable">$status</span> <span class="hljs-variable">$bytes_sent</span> \'</span>
                         <span class="hljs-string">\'"<span class="hljs-variable">$http_referer</span>" "<span class="hljs-variable">$http_user_agent</span>" \'</span>
                         <span class="hljs-string">\'"<span class="hljs-variable">$gzip_ratio</span>"\'</span>;

    <span class="hljs-attribute">send_timeout</span> <span class="hljs-number">3m</span>;
    <span class="hljs-attribute">client_header_buffer_size</span> <span class="hljs-number">1k</span>;

    <span class="hljs-attribute">gzip</span> <span class="hljs-literal">on</span>;
    <span class="hljs-attribute">gzip_min_length</span> <span class="hljs-number">1100</span>;

    <span class="hljs-comment">#lingering_time 30;</span>

    <span class="hljs-section">server</span> {
        <span class="hljs-attribute">server_name</span>   one.example.com  www.one.example.com;
        <span class="hljs-attribute">access_log</span>   /var/log/nginx.access_log  main;

        <span class="hljs-attribute">rewrite</span> (.*) /index.php?page=<span class="hljs-variable">$1</span> <span class="hljs-literal">break</span>;

        <span class="hljs-attribute">location</span> / {
            <span class="hljs-attribute">proxy_pass</span>         http://127.0.0.1/;
            <span class="hljs-attribute">proxy_redirect</span>     <span class="hljs-literal">off</span>;
            <span class="hljs-attribute">proxy_set_header</span>   Host             <span class="hljs-variable">$host</span>;
            <span class="hljs-attribute">proxy_set_header</span>   X-Real-IP        <span class="hljs-variable">$remote_addr</span>;
            <span class="hljs-attribute">charset</span>            koi8-r;
        }

        <span class="hljs-attribute">location</span> /api/ {
            <span class="hljs-attribute">fastcgi_pass</span> <span class="hljs-number">127.0.0.1:9000</span>;
        }

        <span class="hljs-attribute">location</span> <span class="hljs-regexp">~* .(jpg|jpeg|gif)$</span> {
            <span class="hljs-attribute">root</span>         /spool/www;
        }
    }
}`
];
