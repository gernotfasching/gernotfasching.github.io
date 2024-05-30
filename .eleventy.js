const { EleventyRenderPlugin } = require("@11ty/eleventy");
module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(EleventyRenderPlugin);
  eleventyConfig.addPassthroughCopy("src/styles.css");
  eleventyConfig.addPassthroughCopy("src/images/images.jpeg");
  return {
    dir: {
      input: "src",
      includes: "_includes",
      output: "public"
    }
  };
};
