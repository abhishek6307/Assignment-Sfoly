import React from 'react'

import "./Header.css";




export default function Header() {
    return (
      
    <div>
        <nav class="navbar navbar-dark navbar-expand-sm fixed-top">
        <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand ml-1" href="#">
                SpringField Olympiads
            </a>
            <div class="collapse navbar-collapse" id="Navbar">
                <ul class="navbar-nav mr-1">
                    <li class="nav-item active"><a href="./" class="nav-link"> Register</a></li>
                    <li class="nav-item active"><a href="./" class="nav-link"> Olympiads</a></li>

                    <li class="nav-item"><a href="./" class="nav-link">About Us</a></li>
                    <li class="nav-item"><a href="./" class="nav-link">Faq's</a></li>
                    <li class="nav-item"><a href="#" class="nav-link">Contact us</a></li>
                </ul>    
                <span class="navbar-text">
                <a>
                    <a><span class="fa fa-sign-in"></span> Login</a>
                </a>
                </span>
            </div>
        </div>
    </nav>
    
    <header class="jumbotron">
        <div class="container">
            <div class="row row-header" title="">
                <div class="col-12 col-sm-6">
                    <h1>SpringField Olympiads</h1>
                    <h3>Are you ready ?</h3>
                    <h3 className="special-col">Register For Olympiads in your</h3>
                    <h3 className="special-col"> Favourite Subjects....</h3>
                </div>
                <div class="col-12 col-sm align-self-center">
                    {/* <img class="img-fluid" src="img/logo.png" alt="logo"> */}
                </div>
                <div class="col-12 col-sm-2 align-self-center">
                    <a role="button" class="btn btn-block nav-link btn-primary" >Sechdule</a>
                </div>
                <div class="col-12 col-sm-2 align-self-center">
                    <a role="button" class="btn btn-block nav-link btn-primary" >Register</a>
                </div>
            </div>
        </div>
    </header>
    
       
    </div>



        
    )
}

