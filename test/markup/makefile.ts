export default [
    `# Makefile

BUILDDIR      = _build
EXTRAS       ?= $(BUILDDIR)/extras

.PHONY: main clean

main:
	@echo "Building main facility..."
	build_main $(BUILDDIR)

clean:
	rm -rf $(BUILDDIR)/*`,
    `<span class="hljs-comment"># Makefile</span>

BUILDDIR      = _build
EXTRAS       ?= <span class="hljs-variable">$(BUILDDIR)</span>/extras

<span class="hljs-meta"><span class="hljs-meta-keyword">.PHONY</span>: main clean</span>

<span class="hljs-section">main:</span>
	@echo <span class="hljs-string">"Building main facility..."</span>
	build_main <span class="hljs-variable">$(BUILDDIR)</span>

<span class="hljs-section">clean:</span>
	rm -rf <span class="hljs-variable">$(BUILDDIR)</span>/*`
];
