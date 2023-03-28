import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../contexts/PostContext";
import User from "../pages/User";

const PostList = (props) => {
  const { blogData } = useContext(PostContext);

  const filteredData = blogData.filter((item) => {
    if (props.inputText === "") {
      return item.title;
    } else {
      return item.title.includes(props.inputText);
    }
  });

  return (
    <div
      style={{
        marginTop: "4em",
        display: "flex",
        alignContent: "center",
        width: "80%",
        margin: "60px auto",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
        }}
      >
        {filteredData.map((item) => {
          return (
            <div
              key={item.id}
              style={{
                display: "flex",
                flexDirection: "column",
                marginBottom: "18px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "6px",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                  style={{
                    width: "30px",
                    height: "30px",
                    marginRight: "10px",
                  }}
                  alt="User"
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <p
                    style={{
                      fontSize: ".7em",
                      fontWeight: "700",
                      color: "#333",
                      margin: 0,
                    }}
                  >
                    <Link
                      to={`/posts/${item?.user[0]?.id}`}
                      style={{ color: "#333" }}
                    >
                      {item?.user[0]?.name}
                    </Link>
                  </p>
                  <p
                    style={{
                      fontSize: ".7em",
                      color: "#5b5b5b",
                      margin: 0,
                    }}
                  >
                    {item?.user[0]?.company?.name} - {""}
                    {item?.user[0]?.company?.catchPhrase}
                  </p>
                </div>
              </div>
              <h2
                style={{
                  fontSize: "1.4rem",
                  fontWeight: "700",
                  color: "#333",
                  textTransform: "capitalize",
                }}
              >
                <Link
                  to={`/posts/${item?.id}`}
                  style={{ color: "#333", textDecoration: "none" }}
                >
                  {item?.title}
                </Link>
              </h2>
              <p style={{ margin: 0, textAlign: "justify" }}>{item?.body}</p>
              <hr style={{ color: "#adadad" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PostList;
