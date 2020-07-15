import React from "react"
import ReactDom from "react-dom"
import "mdbreact/dist/css/mdb.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import App from "./App"
import fullpage from 'fullpage.js';
var fullPageInstance = new fullpage('#fullpage', {
    navigation: true,
  });
  
ReactDom.render( < App   /> , document.getElementById("root"))