export const getAssetPath = (path: string) => {
    // If the path is an external URL, return it as is
    if (path.startsWith('http') || path.startsWith('//')) {
        return path;
    }

    // Ensure path starts with /
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;

    // Hardcode base path for GitHub Pages production build
    const isProd = process.env.NODE_ENV === 'production';
    const basePath = isProd ? '/portfolio' : '';

    return `${basePath}${normalizedPath}`;
};
