export default [
    `# Example instructions from https://docs.docker.com/reference/builder/
FROM ubuntu:14.04

MAINTAINER example@example.com

ENV foo /bar
WORKDIR \\\${foo}   # WORKDIR /bar
ADD . $foo       # ADD . /bar
COPY \\$foo /quux # COPY $foo /quux
ARG   VAR=FOO

RUN apt-get update && apt-get install -y software-properties-common\\
    zsh curl wget git htop\\
    unzip vim telnet
RUN ["/bin/bash", "-c", "echo hello \\\${USER}"]

CMD ["executable","param1","param2"]
CMD command param1 param2

EXPOSE 1337

ENV myName="John Doe" myDog=Rex\\ The\\ Dog \\
    myCat=fluffy

ENV myName John Doe
ENV myDog Rex The Dog
ENV myCat fluffy

ADD hom* /mydir/        # adds all files starting with "hom"
ADD hom?.txt /mydir/    # ? is replaced with any single character

COPY hom* /mydir/        # adds all files starting with "hom"
COPY hom?.txt /mydir/    # ? is replaced with any single character
COPY --from=foo / .

ENTRYPOINT ["executable", "param1", "param2"]
ENTRYPOINT command param1 param2

VOLUME ["/data"]

USER daemon

LABEL com.example.label-with-value="foo"
LABEL version="1.0"
LABEL description="This text illustrates \\
that label-values can span multiple lines."

WORKDIR /path/to/workdir

ONBUILD ADD . /app/src

STOPSIGNAL SIGKILL

HEALTHCHECK --retries=3 cat /health

SHELL ["/bin/bash", "-c"]`,
    `<span class="hljs-comment"># Example instructions from https://docs.docker.com/reference/builder/</span>
<span class="hljs-keyword">FROM</span> ubuntu:<span class="hljs-number">14.04</span>

<span class="hljs-keyword">MAINTAINER</span> example@example.com

<span class="hljs-keyword">ENV</span> foo /bar
<span class="hljs-keyword">WORKDIR</span><span class="bash"> \\<span class="hljs-variable">\${foo}</span>   <span class="hljs-comment"># WORKDIR /bar</span>
</span><span class="hljs-keyword">ADD</span><span class="bash"> . <span class="hljs-variable">$foo</span>       <span class="hljs-comment"># ADD . /bar</span>
</span><span class="hljs-keyword">COPY</span><span class="bash"> \\<span class="hljs-variable">$foo</span> /quux <span class="hljs-comment"># COPY $foo /quux</span>
</span><span class="hljs-keyword">ARG</span>   VAR=FOO

<span class="hljs-keyword">RUN</span><span class="bash"> apt-get update &amp;&amp; apt-get install -y software-properties-common\\
    zsh curl wget git htop\\
    unzip vim telnet
</span><span class="hljs-keyword">RUN</span><span class="bash"> [<span class="hljs-string">"/bin/bash"</span>, <span class="hljs-string">"-c"</span>, <span class="hljs-string">"echo hello \\\${USER}"</span>]
</span>
<span class="hljs-keyword">CMD</span><span class="bash"> [<span class="hljs-string">"executable"</span>,<span class="hljs-string">"param1"</span>,<span class="hljs-string">"param2"</span>]
</span><span class="hljs-keyword">CMD</span><span class="bash"> <span class="hljs-built_in">command</span> param1 param2
</span>
<span class="hljs-keyword">EXPOSE</span> <span class="hljs-number">1337</span>

<span class="hljs-keyword">ENV</span> myName=<span class="hljs-string">"John Doe"</span> myDog=Rex\\ The\\ Dog \\
    myCat=fluffy

<span class="hljs-keyword">ENV</span> myName John Doe
<span class="hljs-keyword">ENV</span> myDog Rex The Dog
<span class="hljs-keyword">ENV</span> myCat fluffy

<span class="hljs-keyword">ADD</span><span class="bash"> hom* /mydir/        <span class="hljs-comment"># adds all files starting with "hom"</span>
</span><span class="hljs-keyword">ADD</span><span class="bash"> hom?.txt /mydir/    <span class="hljs-comment"># ? is replaced with any single character</span>
</span>
<span class="hljs-keyword">COPY</span><span class="bash"> hom* /mydir/        <span class="hljs-comment"># adds all files starting with "hom"</span>
</span><span class="hljs-keyword">COPY</span><span class="bash"> hom?.txt /mydir/    <span class="hljs-comment"># ? is replaced with any single character</span>
</span><span class="hljs-keyword">COPY</span><span class="bash"> --from=foo / .
</span>
<span class="hljs-keyword">ENTRYPOINT</span><span class="bash"> [<span class="hljs-string">"executable"</span>, <span class="hljs-string">"param1"</span>, <span class="hljs-string">"param2"</span>]
</span><span class="hljs-keyword">ENTRYPOINT</span><span class="bash"> <span class="hljs-built_in">command</span> param1 param2
</span>
<span class="hljs-keyword">VOLUME</span><span class="bash"> [<span class="hljs-string">"/data"</span>]
</span>
<span class="hljs-keyword">USER</span> daemon

<span class="hljs-keyword">LABEL</span><span class="bash"> com.example.label-with-value=<span class="hljs-string">"foo"</span>
</span><span class="hljs-keyword">LABEL</span><span class="bash"> version=<span class="hljs-string">"1.0"</span>
</span><span class="hljs-keyword">LABEL</span><span class="bash"> description=<span class="hljs-string">"This text illustrates \\
that label-values can span multiple lines."</span>
</span>
<span class="hljs-keyword">WORKDIR</span><span class="bash"> /path/to/workdir
</span>
<span class="hljs-keyword">ONBUILD</span> <span class="hljs-keyword">ADD</span><span class="bash"> . /app/src
</span>
<span class="hljs-keyword">STOPSIGNAL</span> SIGKILL

<span class="hljs-keyword">HEALTHCHECK</span><span class="bash"> --retries=3 cat /health
</span>
<span class="hljs-keyword">SHELL</span><span class="bash"> [<span class="hljs-string">"/bin/bash"</span>, <span class="hljs-string">"-c"</span>]</span>`
];
