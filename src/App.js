import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Home from "./pages/Home";
import { PostProvider } from "./contexts/PostContext";

function App() {
  return (
    <>
      <PostProvider>
        <Home />
      </PostProvider>
    </>
  );
}

export default App;
