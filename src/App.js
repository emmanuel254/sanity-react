import React from 'react'
import { BrowserRouter, Route, Switch } from  "react-router-dom"
import './App.css';
import Home from "./pages/Home";
import ShowPosts from "./pages/blog/ShowPosts";
import Navbar from "./components/partials/Navbar";
import Footer from "./components/partials/Footer";
import SinglePost from "./pages/blog/SinglePost";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col bg-gray-200 min-h-screen mt-0">
          <Navbar/>
          <Switch>
              <main className="flex-grow">
                  <Route component={Home} path={"/"} exact />
                  <Route component={ShowPosts} path="/blog" exact />
                  <Route component={SinglePost} path="/blog/:slug" />
              </main>
          </Switch>
          <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
