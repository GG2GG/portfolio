export const getAssetPath = (path: string) => {
    // If the path is an external URL, return it as is
    if (path.startsWith('http') || path.startsWith('//')) {
        return path;
    }

    // Ensure path starts with /
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
    return `${basePath}${normalizedPath}`;
};
