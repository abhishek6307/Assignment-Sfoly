import React from 'react'
import "./Footer.css";

export default function Footer() {
    return (
        <div id="footer-cont">
            
            <div className="footer-clean">
            <footer className="footer">
    <div className="container">
        <div className="row">
            <div className="col-md-5">
                
                <div className="row">
                    <div className="col-6">
                        <h3>Follow us</h3>
                        <ul>
                            <li><a href="#"><i className="fab fa-facebook fa-lg"></i> Facebook</a></li>
                            <li><a href="#"><i className="fab fa-linkedin fa-lg"></i> Linkedin </a></li>
                            <li><a href="#"><i className="fab fa-instagram fa-lg"></i> Instagram</a></li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <h3>Contact us</h3>
                        <ul>
                            <li><a href="#"><i className="fab fa-whatsapp fa-lg"></i> Whatsapp</a></li>
                            <li><a href="#"><i className="fas fa-envelope fa-lg"></i> Email</a></li>
                            <li><a href="#"><i className="fas fa-comment-dots fa-lg"></i>Message</a></li>
                        </ul>
                    </div>
                </div>
                <ul className="nav">
                    <li className="nav-item"><a href="" className="nav-link pl-0"><i className="fa fa-facebook fa-lg"></i></a></li>
                    <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-twitter fa-lg"></i></a></li>
                    <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-github fa-lg"></i></a></li>
                    <li className="nav-item"><a href="" className="nav-link"><i className="fa fa-instagram fa-lg"></i></a></li>
                </ul>
                <br/>
            </div>
            <div className="col-md-2">
                <h5 className="text-md-right">Contact Us</h5>
                <hr/>
            </div>
            <div className="col-md-5">
                <form>
                    <fieldset className="form-group">
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Your "/>
                    </fieldset>
                    <fieldset className="form-group">
                        <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Your Email"/>
                    </fieldset>
                    <fieldset className="form-group">
                        <textarea className="form-control" id="exampleMessage" placeholder="Message"></textarea>
                    </fieldset>
                    <fieldset className="form-group text-xs-right">
                        <button type="button" className="btn btn-success btn-lg">Send</button>
                    </fieldset>
                </form>
            </div>
            <div class="footer-copyright text-center py-3">© 2021 Copyright:
    <a href="https://sfoly.com/"> MDBootstrap.com</a>
  </div>
        </div>
    </div>
</footer>
    </div>

        </div>
    )
}
