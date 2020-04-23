module.exports = {
  testMatch: ["**/*.spec.jsx"],
  setupFilesAfterEnv: ["./setupTests.js"],
  moduleNameMapper: {
    "^.+\\.(png|jpg|css|less|scss)$": "identity-obj-proxy"
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],
  verbose: true
};
