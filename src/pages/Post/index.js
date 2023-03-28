import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { PostContext } from "../../contexts/PostContext";
import api from "../../server/api";
import NavigationBar from "../../components/Navigationbar";
import {
  PostContainer,
  InfoContainer,
  ProfilePicture,
  Title,
  Body,
  HorizontalLine,
  Text,
} from "./style";

const Post = () => {
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  const { id } = useParams();

  async function getComments(id) {
    try {
      api.get(`posts/${id}/comments`).then(({ data }) => {
        setComments(data);
      });
    } catch (error) {
      console.error(error);
    }
  }

  async function getPost(id) {
    try {
      api.get(`posts/${id}`).then(({ data }) => {
        setPost(data);
      });
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getPost(id);
    getComments(id);
  }, []);

  return (
    <>
      <NavigationBar />
      <PostContainer>
        <Title>{post.title}</Title>
        <Body>{post.body}</Body>
        <div style={{ marginTop: "50px" }}>
          {comments.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <h5>{item.name}</h5>
                <p>{item.body}</p>
                <hr></hr>
              </div>
            );
          })}
        </div>
      </PostContainer>
    </>
  );
};

export default Post;
