module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/images/images.jpeg");
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "_site"
    }
  };
};
