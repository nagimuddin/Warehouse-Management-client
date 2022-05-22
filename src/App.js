import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { css } from "@emotion/react";
import { HashLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Footer from "./Layout/Footer/Footer";
import Header from "./Layout/Header/Header";
import AddItems from "./Pages/AddItems/AddItems";
import Blog from "./Pages/Blog/Blog";
import BlogItem from "./Pages/Blog/BlogItem";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import LogIn from "./Pages/Log/LogIn";
import RequireAuth from "./Pages/Log/RequireAuth";
import SignUp from "./Pages/Log/SignUp";
import Manage from "./Pages/Manage/Manage";
import MyItems from "./Pages/MyItems/MyItems";
import NotFound from "./Pages/NotFound/NotFound";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";

function App() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const override = css`
  position: absolute;
  inset: 0;
  margin: auto;
`;

  return (
    <>
      {
        isLoading ?
          (
            <HashLoader color={"#36D7B7"} loading={isLoading} css={override} size={50} />
          )
          :
          (
            <>
              <Header />
              <Routes>
                <Route index element={<Home />} />
                <Route path='/home' element={<Home />} />
                <Route
                  path='/products'
                  element={
                    <RequireAuth>
                      <Products />
                    </RequireAuth>
                  }
                />
                <Route
                  path='/manage'
                  element={
                    <RequireAuth>
                      <Manage />
                    </RequireAuth>
                  }
                />
                <Route
                  path='/add'
                  element={
                    <RequireAuth>
                      <AddItems />
                    </RequireAuth>
                  }
                />
                <Route
                  path='/my-items'
                  element={
                    <RequireAuth>
                      <MyItems />
                    </RequireAuth>
                  }
                />
                <Route
                  path='/products/:productId'
                  element={
                    <RequireAuth>
                      <ProductDetails />
                    </RequireAuth>
                  }
                />
                <Route path='/blog' element={<Blog />} />
                <Route path='/blog/:title' element={<BlogItem />} />
                <Route path='/signin' element={<LogIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
              <Footer />
              <ToastContainer />
            </>
          )
      }
    </>
  );
}

export default App;
