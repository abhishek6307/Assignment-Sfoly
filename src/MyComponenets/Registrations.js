import React from 'react'
import "./Registrations.css";

export default function Registrations() {
    return (
    <div>
        <div class = "row row-content align-items-center">
        <div class = "col col-sm col-md">
                <div class = "media">
                    <div class = "media-body">
                        <h2>Register as an <span class = "badge badge-primary">Institute</span></h2>
                        <p>Want to give a headstart to the students of your institute by providing them an exciting platform to test their knowledge and skills. Then, get your Institute registered with us now! </p>
                        <div class="col-12 col-sm-2 align-self-center">
                    <a role="button" class="btn  btn-primary btn-lg">Know More</a>
                </div>
                    </div>
                
                    {/* <img class = "d-flex mr-4 img-thumbnail align-self-center" src = "img/buffet.png" alt = "Buffet"> */}
                </div>
            </div>
            <div class = "col-12 col-sm-4 col-md-3">
                <h3>Registered Institutes</h3>
                <h3>2000+</h3>
            </div>
            <div class = "col-12 col-sm-4 col-md-3">
                <h3>Registered Individulas</h3>
                <h3>5000+</h3>
            </div>
            
        </div>
        <div class = "row row-content align-items-center">
        <div class = "col-12 col-sm-4 col-md-3">
                <h3>Registered Coordinators</h3>
                <h3 className="primary-heading">150+</h3>
            </div>
            
            <div class = "col col-sm col-md">
                    <div class = "media">
                        <div class = "media-body">
                            <h2>Register as an <span class = "badge badge-primary">Coordinator</span></h2>
                            <p>Grab the opportunity and get a chance to work in the education sector with one of the renowned education service providers with the option to work full time or part time. Work as a mediator between education institutes and us and Earn a handsome amount of money by working at your convenience. Top coordinators will be given to work as full-time employees with good pay.</p>
                            <div class="col-12 col-sm-2 align-self-center">
                        <a role="button" class="btn  btn-primary btn-lg">Know More</a>
                    </div>
                    </div>
                    
                        {/* <img class = "d-flex mr-4 img-thumbnail align-self-center" src = "img/buffet.png" alt = "Buffet"> */}
                    </div>
            </div>
            
            
        </div>

        
    </div>
    )
}
