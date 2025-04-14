import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Blog from "../Pages/Blog/Blog";
import Contact from "../Pages/Contact/Contact";
import Signup from "../Pages/Signup/Signup";
import Login from "../Pages/Login/Login";
import Layout from "../Components/Layout/Layout";
const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Layout>
  )
}
export default App;