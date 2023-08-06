import { size } from './constants';

export function getSizeValue(arg?: number | string) {
    if (arg === undefined) return;

    if (isNaN(arg as number)) {
        return size[(arg as string).toUpperCase()];
    }

    return Number(arg);
}

export function getFontVariationSettings(
    fill?: boolean,
    wght?: number | string,
    grad?: number | string,
    opsz?: number | string
) {
    const parts: string[] = [];

    if (fill) {
        parts.push('"FILL" 1');
    }

    if (!isNaN(wght as number)) {
        parts.push('"wght" ' + wght);
    }

    if (!isNaN(grad as number)) {
        parts.push('"GRAD" ' + Number(grad));
    }

    if (!isNaN(opsz as number)) {
        parts.push('"opsz" ' + opsz);
    }

    // "FILL" 0, "wght" 100, "GRAD" 0, "opsz" 48
    return parts.length > 0 ? parts.join(', ') : undefined;
}