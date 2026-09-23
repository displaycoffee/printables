let sitemap = {
	dynamicRoutes: ['/page-one', '/page-two/child-page-one', '/page-two/child-page-two', '/page-three', '/page-four'],
	exclude: ['/assets', '/assets/css', '/assets/fonts', '/assets/js', '/assets/images', '/assets/images/mtg', '/assets/images/theme'],
	hostname: 'https://display.coffee',
	readable: true,
};

export const sitemapConfig = sitemap;
