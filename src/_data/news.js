const axios = require("axios");
require("dotenv").config();
module.exports = async function () {
     try {
          const response = await axios.get(
               `https://newsapi.org/v2/top-headlines?country=ng&apiKey=${process.env.API_KEY}&pageSize=10`
          );
          return response.data;
     } catch (error) {
          console.error(error);
     }
};
