import { VNodeChildren, VNodeChild, h } from 'literium';
import { Renderer } from '../types';

export const vdomRender: Renderer<VNodeChildren> = {
    text: (chunk: string) => chunk,
    join: (chunks: VNodeChild[]) => chunks,
    wrap: (className: string, chunk: VNodeChildren) => h('span', { class: { [className]: true } }, chunk)
};
