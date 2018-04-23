module.exports = {
  plugins: [
    require("tailwindcss")("./tailwind.config.js"),
    require("autoprefixer")({ browsers: "last 2 versions" })
  ]
};
