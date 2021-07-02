module.exports = function (eleventyConfig) {


    // eleventyConfig.setTemplateFormats([ "html" ]);

    eleventyConfig.addPassthroughCopy("src/img");
    eleventyConfig.addPassthroughCopy("src/CNAME");

    // eleventyConfig.addPassthroughCopy({
    //     './node_modules/alpinejs/dist/alpine.js': './assets/alpine.js',
    // })

    return {
        // templateFormats: ["html", "njk"],
        dir: { input: 'src', output: '_site' }
    };
};


