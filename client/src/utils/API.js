import axios from "axios";

// NYT API Key
const apiKey = "a9fe118f68b34a8187300c05340811f7";


export default {
  runQuery: (query, startYear, endYear) =>
  {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json",
      {
        params: {
          "api-key": apiKey,
          "q": query.trim(),
          "begin_date": startYear.trim() + "0101",
          "end_date": endYear.trim() + "1231",
          "fl": "web_url,pub_date,headline,snippet",
        },
      });
  },
  // Gets all articles
  getArticles: () => {
    return axios.get("/api/articles");
  },
  // Saves an article to database
  saveArticle: (articleData) => {
    return axios.post("/api/articles", articleData);
  },
  // Deletes the book with the given id
  deleteArticle: (id) => {
    return axios.delete("/api/articles/" + id);
  }
};