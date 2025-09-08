module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("style.css");

    return {
        dir: {
            input: "Karatai/Demon Tags/Chapters/",
            includes: "_includes",
            output: "_site"
        }
    };
};
