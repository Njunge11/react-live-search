require("dotenv").config();
module.exports = {
  publicRuntimeConfig: {
    apiKey: process.env.API_KEY,
    apiURL: process.env.API_URL
  }
};
