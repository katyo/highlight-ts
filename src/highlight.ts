import { VNodeChildren } from 'literium';
import { Renderer, Options } from './hl/types';
import { vdomRender } from './hl/render/vdom';
import { init, process } from './hl/process';

export interface Highlight {
    (src: string, lang?: string | string[]): VNodeChildren;
}

export function initHighlight(render: Renderer<VNodeChildren>, options?: Options): Highlight {
    const highlighter = init(vdomRender, options);

    return (src, lang) => {
        const result = process(highlighter, src, lang);
        return result.value;
    };
}
