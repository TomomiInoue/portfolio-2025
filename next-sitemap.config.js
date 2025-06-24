// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: "https://www.flowdesigncode.com",
    generateRobotsTxt: true,
    generateIndexSitemap: false,
    changefreq: "monthly",
    priority: 0.7,
    sitemapSize: 5000,
    outDir: "public", // 🟢 this is where sitemap.xml and robots.txt will be written
};
