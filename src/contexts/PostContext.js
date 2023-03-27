import { createContext, useState, useEffect } from "react";
import api from "../server/api"

export const PostContext = createContext({});

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);
  const [comments, setComments] = useState([]);
  const [users, setUsers] = useState([]);

  async function getPosts() {
    try {
      api.get("posts").then(({ data }) => {
        setPosts(data);
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function getComments(id) {
    try {
      api.get(`posts/${id}/comments`).then(({ data }) => {
        setComments(data);
        return data.length;
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function getUsers() {
    try {
      api.get(`users`).then(({ data }) => {
        setUsers(data);
      });
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPosts();
    getUsers();
  }, []);

  //Randomizando os posts e juntando informações de 2 endpoints
  const blogData = posts
    .sort(() => Math.random() - 0.5)
    .map((post) => ({
      ...post,
      user: users.filter((user) => user.id === post.userId),
    }));

  return (
    <PostContext.Provider value={{ blogData }}>{children}</PostContext.Provider>
  );
};
