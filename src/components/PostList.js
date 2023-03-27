import React, { useContext, useState } from "react";
import { PostContext } from "../contexts/PostContext";

const PostList = () => {
  const { blogData } = useContext(PostContext);
  const [isSelected, setIsSelected] = useState({});

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "65%",
      }}
    >
      {blogData.map((item) => {
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
                  <a href="#">{item?.user[0].name}</a>
                </p>
                <p
                  style={{
                    fontSize: ".7em",
                    color: "#5b5b5b",
                    margin: 0,
                  }}
                >
                  {item?.user[0].company.name} - {""}
                  {item?.user[0].company.catchPhrase}
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
              {item?.title}
            </h2>
            <p style={{ color: "#333", margin: 0, textAlign: "justify" }}>
              {item?.body}
            </p>
            <hr style={{ color: "#adadad" }} />
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
