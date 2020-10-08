import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import Timeline from "./Timeline";
import NewPost from "./NewPost"
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          {/* <Timeline /> */}
          <Route path="/new-post" component={NewPost}></Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
