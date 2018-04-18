# HighlightJS in TypeScript (and ES6)

[![License: BSD](https://img.shields.io/badge/License-BSD-brightgreen.svg)](https://opensource.org/licenses/BSD-3-Clause)
[![npm version](https://badge.fury.io/js/highlight-ts.svg)](https://badge.fury.io/js/highlight-ts)
[![npm downloads](https://img.shields.io/npm/dm/highlight-ts.svg)](https://www.npmjs.com/package/highlight-ts)
[![Build Status](https://travis-ci.org/katyo/highlight-ts.svg?branch=master)](https://travis-ci.org/katyo/highlight-ts)

This is a port of the __[highlight.js](https://highlightjs.org/)__ to a [TypeScript](https://www.typescriptlang.org/) (as well as ECMAScript 6).

__NOTE: Currently not all languages are supported. PRs are welcome.__

## Usage example

```typescript
import {
  Options,
  Highlighter,

  // import basic APIs
  registerLanguages,
  htmlRender,
  init,
  process,
  
  // import preferred languages
  CPlusPlus,
  TypeScript,
  JavaScript,
  Python,
  Lua,
  Markdown
} from 'highlight-ts';

// register languages
registerLanguages(
  CPlusPlus,
  TypeScript,
  JavaScript,
  Python,
  Lua,
  Markdown
);

const options: Options = {
  classPrefix: '',
  /* other options */
};

// initialize highlighter
const highlighter: Highlighter<string>
  = init(htmlRender, options);

const source = `
interface Point {
  x: number,
  y: number,
}

function distance(a: Point, b: Point): number {
  return Math.sqrt(
    (a.x - b.x) ** 2 +
    (a.y - b.y) ** 2);
}
`;

// render source with given language mode
const language = 'ts';
const html = process(highlighter, source, language);

// or highligh source using auto language detection
const languages = ['ts', 'js', 'md'];
const html = process(highlighter, source, languages);

// auto detection using all known language modes
const html = process(highlighter, source);

// display result
elm.innerHTML = `<pre>${html}</pre>`;
```

## Differences from original

* Complete re-implementation using modern JavaScript syntax and features.
* No module-global state and configuration excluding the language modes registry.
* ES6 Module Syntax to compatibility with modern bundlers like __Rollup__ which support _Tree-Shaking_.
* Support renderer API to render to HTML text as well as to a DOM-nodes directly or by VirtualDOM engines.
* Compiled mode it is another object not same as a source what get a little bit lower memory usage.
* Replaced some utility functions by ES6 syntax extensions which is provided by __tslib__ for _ES5_ target.
* Fixed some modes to get more correct or advanced highlight.

## Renderer API

Currently the renderer API is quite simple:

```typescript
export interface Renderer<Output> {
    text(chunk: string): Output;
    wrap(className: string, chunk: Output): Output;
    join(chunks: Output[]): Output;
}
```

1. The `text()` call is using to render textual piece of source code.
2. The `wrap()` call is using to wrap rendered chunk into span with specified class.
3. The `join()` call is using to join several rendered chunks into single chunk.

By example we can implement HTML renderer like this:

```typescript
import { Renderer } from 'highligh-ts';

const htmlRender: Renderer<string> = {
    text: (chunk: string) => chunk
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;'),
    join: (chunks: string[]) => chunks.join(''),
    wrap: (className: string, chunk: string) =>
        `<span class="${className}">${chunk}</span>`
};
```

## HighlightJS API

See the [types.ts](src/types.ts) source to understand highlight mode definition syntax.

Read the original [highlightjs docs](http://highlightjs.readthedocs.io/en/latest/) to get more help how to implement syntax highlighting modes.
