import React from 'react'
import "./Reviews.css";
export default function Reviews() {
    return (
        
           
        <div>
            <section id="reviews-container">
        <h1 class="h-primary text-center">Reviews</h1>
        <div id="services">
            <div class="review-box">
                {/* <img src="img/1.png" alt=""> */}
                
                <p class="center">Reports displayed to us covering all topics like solution and section wise analysis is the best and also happy with how fast the team reverts back solving any quer.</p>
                <h2 class="h-secondary center">Aashutosh kumar</h2>
            </div>
            <div class="review-box">
                {/* <img src="img/2.png" alt=""> */}
                
                <p class="center">I would like to say, the team does always a quick response to the queries and all to the users.</p>
                    <h2 class="h-secondary center">Nidhi Jha</h2>
            </div>
            <div class="review-box">
                {/* <img src="img/3.png" alt=""> */}
               
                <p class="center">You gave a target which ultimately help in other exams too.</p>
                    <h2 class="h-secondary center">Shivam Gupta</h2>
            </div>
        </div>
        
    </section>
        </div>
    )
}
