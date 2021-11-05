import React from 'react'
import './Style.css'
import {useContext} from "react"
import {Context} from "../store"
import { Link } from 'react-router-dom'


function Navbar(){

  const [state] = useContext(Context)

  if (!state.auth.token){

  return(
    React.createElement("header", { className: "navbar" }, 

    React.createElement("div", { className: "navbarTitle"},
    <Link to="/">
      <img className="logo" src="webshio.png" alt=""/> 
    </Link>),

    React.createElement("div", { className: "navbarItem"},
    <Link to="/showposts" >View posts
    </Link>), 

    React.createElement("div", { className: "navbarItem"},
    <Link to="/signup">Register
    </Link>), 
    
    React.createElement("div", { className: "navbarItem"},
    <Link to="/login">Login
    </Link>)
    )
  )
  }

  else{
    return(
      React.createElement("header", { className: "navbar" }, 

      React.createElement("div", { className: "navbarTitle"},
      <Link to="/">
        <img className="logo" src="webshio.png" alt=""/> 
      </Link>),

      React.createElement("div", { className: "navbarItem"},
      <Link to="/addposts">Add post
      </Link>), 

      React.createElement("div", { className: "navbarItem"},
      <Link to="/showposts">View posts
      </Link>), 

      React.createElement("div", { className: "navbarItem"},
      <Link to="/login">Logout
      </Link>)
      )
    )
  }
}

export default Navbar