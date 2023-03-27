import React, { useContext } from "react";
import { PostContext } from "../contexts/PostContext";

const Sidebar = () => {
  const { blogData } = useContext(PostContext);
  const topFive = blogData.slice(0, 5);

  return (
    <aside
      style={{
        width: "35%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3 style={{ alignSelf: "center" }}>Featured</h3>
      {topFive.map((post) => {
        return <h2>{post.title}</h2>;
      })}
    </aside>
  );
};

export default Sidebar;
