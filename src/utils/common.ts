export const isHex = (color: string): boolean =>
    /^#([A-Fa-f0-9]{3}){1,2}$/.test(color);

export const hexToRgba = (hex: string, alpha: number): string => {
    let c;
    if (isHex(hex)) {
        c = hex.substring(1).split('');

        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }

        c = `0x${c.join('')}`;

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore: Unreachable code error
        return `rgba(${[(c >> 16) & 255, (c >> 8) & 255, c & 255].join(
            ','
        )}, ${alpha})`;
    }

    throw new Error('Bad Hex');
};

export const padNumber = (number: number): string =>
    number < 10 ? `0${number}` : number.toString();

export const parseDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    return `${padNumber(date.getDate())}/${padNumber(
        date.getMonth()
    )}/${date.getFullYear()}`;
};
