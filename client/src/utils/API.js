import axios from "axios";

export default {
  // Gets all articles
  getArticles: () => {
    return axios.get("/api/articles");
  },
  // Saves an article to database
  saveArticle: (articleData) => {
    return axios.post("/api/articles", articleData);
  },
  // Deletes the book with the given id
  deleteBook: (id) => {
    return axios.delete("/api/articles/" + id);
  }
};