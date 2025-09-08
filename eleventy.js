module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style.css");

    return {
        dir: {
            input: "content",
            includes: "../_includes",
            output: "_site"
        }
    };
};
