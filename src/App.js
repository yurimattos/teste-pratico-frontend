import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Home from "./pages/Home";
import User from "./pages/User";
import Post from "./pages/Post";
import { PostProvider } from "./contexts/PostContext";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <PostProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/posts/:id" element={<Post />} />
      </Routes>
    </PostProvider>
  );
}

export default App;
