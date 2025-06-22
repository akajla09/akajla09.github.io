const BASE_URL = import.meta.env.BASE_URL.endsWith("/")
    ? import.meta.env.BASE_URL.substring(0, import.meta.env.BASE_URL.length - 1)
    : import.meta.env.BASE_URL;

export const generateURL = (path: string, base?: string | URL) => {
    const pathname = `${BASE_URL}/${trimSlash(path)}`;
    if (base) {
        return new URL(pathname, base);
    }
    return pathname;
};

export const trimSlash = (path: string) => {
    let res = path;
    if (res.endsWith("/")) {
        res = res.substring(0, res.length - 1);
    }
    if (res.startsWith("/")) {
        res = res.substring(1);
    }
    return res;
};

export const pathEqual = (a: string, b: string) => {
    return trimSlash(a) === trimSlash(b);
};
