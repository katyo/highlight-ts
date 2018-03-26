import { Renderer } from '../types';

export const htmlRender: Renderer<string> = {
    text: (chunk: string) => chunk,
    join: (chunks: string[]) => chunks.join(''),
    wrap: (className: string, chunk: string) => `<span class="${className}">${chunk}</span>`
};
