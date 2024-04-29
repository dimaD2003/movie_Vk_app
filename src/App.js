import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./routes/Home";
import About from "./routes/About";
import Detail from "./components/Detail";
import "./App.css";
import Footer from "./components/Footer";

function App() {
  return ( <>
  <HashRouter>
      <Navigation />
      
      <Route path="/" exact={true} component={Home} /> 
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
     <Footer></Footer>
     </HashRouter>
   
  </>
    
  );
}

export default App;
