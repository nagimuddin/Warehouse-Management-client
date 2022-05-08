import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddItems from "./Pages/AddItems/AddItems";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import ManageItems from "./Pages/ManageItems/ManageItems";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import Items from "./Pages/Shared/Items/Items";
import RequireAuth from "./Pages/Login/RequireAuth/RequireAuth";
import NotFound from "./Pages/NotFound/NotFound";
import SignIn from "./Pages/Login/SignIn/SignIn";
import Register from "./Pages/Login/Register/Register";


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route
          path="/items"
          element={
            <RequireAuth>
              <Items></Items>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/additems"
          element={
            <RequireAuth>
              <AddItems></AddItems>
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/manageItems"
          element={<ManageItems></ManageItems>}
        ></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
