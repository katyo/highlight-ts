import { Renderer } from '../types';

function escape(value: string): string {
    return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

export const htmlRender: Renderer<string> = {
    text: (chunk: string) => escape(chunk),
    join: (chunks: string[]) => chunks.join(''),
    wrap: (className: string, chunk: string) => `<span class="${className}">${chunk}</span>`
};
