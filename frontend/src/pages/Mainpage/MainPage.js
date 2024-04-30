import React, { useEffect } from "react";
import axios from "axios";
import "./index.css";

import { BACKEND_URL } from "../../values";

const MainPage = () => {

  function calculateTargetCalories(BMI, goal) {
    let targetCalories = 0;
    
    // Define calorie intake goals based on BMI categories
    if (BMI < 18.5) {
        // Underweight
        if (goal === "lose weight") {
            targetCalories = BMI * 25;
        } else if (goal === "gain weight") {
            targetCalories = BMI * 30;
        } else {
            targetCalories = BMI * 27;
        }
    } else if (BMI >= 18.5 && BMI < 25) {
        // Normal weight
        if (goal === "lose weight") {
            targetCalories = BMI * 22;
        } else if (goal === "gain weight") {
            targetCalories = BMI * 25;
        } else {
            targetCalories = BMI * 24;
        }
    } else if (BMI >= 25 && BMI < 30) {
        // Overweight
        if (goal === "lose weight") {
            targetCalories = BMI * 20;
        } else if (goal === "gain weight") {
            targetCalories = BMI * 23;
        } else {
            targetCalories = BMI * 22;
        }
    } else {
        // Obese
        if (goal === "lose weight") {
            targetCalories = BMI * 18;
        } else if (goal === "gain weight") {
            targetCalories = BMI * 20;
        } else {
            targetCalories = BMI * 20;
        }
    }
    
    return targetCalories;
}

// Example usage:
const BMI = 23; // Example BMI value
const goal = "gain weight"; // Example goal
const targetCalories = calculateTargetCalories(BMI, goal);
console.log("Target Calories per Day:", targetCalories);
  return (
    <body>
      <header class="header">
        <img
          src="Assets/Green Simple Mug Leaf Pharmacy Logo.png"
          height="75"
          width="250"
        />

        <nav class="navbar">
          <div class="dropdown">
            <button class="dropbtn">
              <a href="/index.htm">home</a>
            </button>
            <div class="dropdown-content">
              <a href="/index.htm#about">about</a>
              <a href="/index.htm#services">services</a>
              <a href="/index.htm#review">review</a>
              <a href="/index.htm#blogs">blogs</a>
            </div>
          </div>
          <a href="/remedies.html">remedies</a>
          <a href="/geolocation.html">geolocations</a>
          <a href="/book.html">book</a>
          <a href="/review.html">add review</a>
        </nav>

        <div id="menu-btn" class="fas fa-bars"></div>
      </header>

      <section class="home" id="home">
        <div class="image">
          <img src="drive-download-20220604T061557Z-001/home-img.svg" alt="" />
        </div>

        <div class="content">
          <h3>stay safe, stay healthy</h3>
          <p>
            We are on stand by to help you find alternatives to the chemicals.
            Find Home Remedies. Connect with the near by hospitals Now. Schedule
            an appointment. Share feedback.
          </p>
          <a href="/book.html" class="btn">
            {" "}
            book an appointment <span class="fas fa-chevron-right"></span>{" "}
          </a>
        </div>
      </section>

      <section class="about" id="about">
        <h1 class="heading">
          {" "}
          <span>about</span> us{" "}
        </h1>

        <div class="row">
          <div class="image">
            <img
              src="drive-download-20220604T061557Z-001/about-img.svg"
              alt=""
            />
          </div>

          <div class="content">
            <h3>we take care of your healthy life</h3>
            <p>
            Fitex, is an all-in-one health and fitness companion designed to revolutionize how you track, manage, and optimize your health and fitness goals. From personalized nutrition plans to workout routines , our app offers a comprehensive suite of tools to support your holistic well-being. Whether you're aiming to achieve your ideal body weight, enhance your skin's radiance, or simply lead a healthier lifestyle, Fitex is your ultimate partner every step of the way.
            </p>
          </div>
        </div>
      </section>

      <section class="services" id="services">
        <h1 class="heading">
          {" "}
          our <span>services</span>{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <i class="fas fa-heartbeat"></i>
            <h3>Lose Weight</h3>
            <p>
              Get free check ups at college campus or book an appointment with
              nearest clinic now.
            </p>
            <a href="/book.html" class="btn">
              {" "}
              Generate Meal Plan <span class="fas fa-chevron-right"></span>{" "}
            </a>
          </div>

          <div class="box">
            <i class="fas fa-pills"></i>
            <h3>Gain Weight</h3>
            <p>Find the medicines shop nearby. </p>
            <a href="/geolocation.html" class="btn">
              {" "}
              Generate Meal Plan <span class="fas fa-chevron-right"></span>{" "}
            </a>
          </div>

          <div class="box">
            <i class="fas fa-procedures"></i>
            <h3>Maintain Weight</h3>
            <p>
              Who wants to turn up to medicines without asking mom about
              alternatives.
            </p>
            <a href="/remedies.html" class="btn">
              {" "}
              Generate Meal Plan <span class="fas fa-chevron-right"></span>{" "}
            </a>
          </div>
        </div>
      </section>

      <section class="review" id="review">
        <h1 class="heading">
          {" "}
          student's <span>review</span>{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <img src="./Assets/avneesh.jpeg" alt="" class="dp" />
            <h3>avneesh rai</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <p class="text">
              I think the website is fantastic. It was so easy to get used to
              the interface and the remedy was useful to me hence I didn't
              really check out the appointment part and would not even be
              willing to visit that anytime soon!
            </p>
          </div>

          <div class="box">
            <img src="/Assets/savarna.jpeg" alt="" class="dp" />
            <h3>savarna chandra</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <p class="text">
              The website was useful to me but I'd suggest you to kindly mention
              the timings of clinics along with the fees of several doctors at
              hospitals as for that we have to refer to google anyways. The maps
              were easy to access.
            </p>
          </div>

          <div class="box">
            <img src="/Assets/apoorva.jpeg" alt="" class="dp" />
            <h3>apoorva kothari</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <p class="text">
              Overall it is good but I would have wanted a feature to give
              suggestions of adding some more tried and tested remedies. Work on
              that next time. Kudos to the idea though!
            </p>
          </div>

          <div class="box">
            <img src="/Assets/kastoov.jpeg" alt="" class="dp" />
            <h3>kaustuv behera</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <p class="text">
              If I were to rate it, it'd be 5/5. This initiative is great and
              the website works just fine. Take it ahead. Godspeed!
            </p>
          </div>

          <div class="box">
            <img src="/Assets/karthik.jpeg" alt="" class="dp" />
            <h3>karthik s.</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <p class="text">
              {" "}
              All inn all, the experience was good. iske aage koi suggestion ya
              sort of negative point add kr denas
            </p>
          </div>

          <div class="box">
            <img
              src="/Assets/photo_2022-07-21_12-33-28.jpg"
              alt=""
              class="dp"
            />
            <h3>sumit raj</h3>
            <div class="stars">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star-half-alt"></i>
            </div>
            <p class="text">
              All in all, the experience was good. I faced problem in arranging
              some ingredients mentioned in the remedies, so, I'd suggest to
              either put up the nearby shops where we can find them or arrange
              the ingredients for us.
            </p>
          </div>
        </div>
      </section>

      <section class="blogs" id="blogs">
        <h1 class="heading">
          {" "}
          useful <span>blogs</span>{" "}
        </h1>

        <div class="box-container">
          <div class="box">
            <div class="image">
              <img src="Assets/blog1.jpg" alt="" />
            </div>
            <div class="content">
              <div class="icon">
                <a href="#">
                  {" "}
                  <i class="fas fa-calendar"></i> 29th january, 2018{" "}
                </a>
                <a href="#">
                  {" "}
                  <i class="fas fa-user"></i> by edsys.in{" "}
                </a>
              </div>
              <h3>10 Common Health Problems Faced By Students</h3>
              <a
                href="https://www.edsys.in/common-health-problems-students/"
                class="btn"
                target="_blank"
              >
                {" "}
                learn more <span class="fas fa-chevron-right"></span>{" "}
              </a>
            </div>
          </div>

          <div class="box">
            <div class="image">
              <img src="/Assets/hostel.jpg" alt="" />
            </div>
            <div class="content">
              <div class="icon">
                <a href="#">
                  {" "}
                  <i class="fas fa-calendar"></i> 12th june, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i class="fas fa-user"></i> couch & cheese{" "}
                </a>
              </div>
              <h3>
                Ultimate Tips for Staying Happy & Healthy in a Hostel as a
                Student or Working Professional
              </h3>
              <a
                href="https://couchandcheese.com/blog/tips-for-staying-happy-healthy-motivated-in-hostel-as-student-or-working-professionals/"
                class="btn"
                target="_blank"
              >
                {" "}
                learn more <span class="fas fa-chevron-right"></span>{" "}
              </a>
            </div>
          </div>

          <div class="box">
            <div class="image">
              <img src="/Assets/blog3.webp" alt="" />
            </div>
            <div class="content">
              <div class="icon">
                <a href="#">
                  {" "}
                  <i class="fas fa-calendar"></i> 23rd june, 2021{" "}
                </a>
                <a href="#">
                  {" "}
                  <i class="fas fa-user"></i> by manju yadav{" "}
                </a>
              </div>
              <h3>girls' hostel life</h3>
              <a
                href="https://timesofindia.indiatimes.com/readersblog/girls-life-blogs/girls-hostel-life-34158/"
                class="btn"
                target="_blank"
              >
                {" "}
                learn more <span class="fas fa-chevron-right"></span>{" "}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section class="footer">
        <div class="box-container">
          <div class="box">
            <h3>quick links</h3>
            <a href="/index.htm">
              {" "}
              <i class="fas fa-chevron-right"></i> home{" "}
            </a>
            <a href="/index.htm#services">
              {" "}
              <i class="fas fa-chevron-right"></i> services{" "}
            </a>
            <a href="/index.htm#about">
              {" "}
              <i class="fas fa-chevron-right"></i> about{" "}
            </a>
            <a href="/remedies.html">
              {" "}
              <i class="fas fa-chevron-right"></i> remedies{" "}
            </a>
            <a href="/geolocation.html">
              {" "}
              <i class="fas fa-chevron-right"></i> geolocations{" "}
            </a>
            <a href="/book.html">
              {" "}
              <i class="fas fa-chevron-right"></i> book{" "}
            </a>
            <a href="/review.html">
              {" "}
              <i class="fas fa-chevron-right"></i> review{" "}
            </a>
            <a href="/index.htm#blogs">
              {" "}
              <i class="fas fa-chevron-right"></i> blogs{" "}
            </a>
          </div>

          <div class="box">
            <h3>our services</h3>
            <a href="#">
              {" "}
              <i class="fas fa-chevron-right"></i> medical faculty and free
              checkups{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-chevron-right"></i> medicine shops and hospitals{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-chevron-right"></i> home remedies{" "}
            </a>
          </div>

          <div class="box">
            <h3>contact info</h3>
            <a href="#">
              {" "}
              <i class="fas fa-phone"></i> +91-9977703331{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-phone"></i> +91-6264143244{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-envelope"></i> ria.malvi170403@gmail.com{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-envelope"></i> contact@iiitl.ac.in{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fas fa-map-marker-alt"></i> Lucknow, India - 226002{" "}
            </a>
          </div>

          <div class="box">
            <h3>follow us</h3>
            <a href="#">
              {" "}
              <i class="fab fa-facebook-f"></i> facebook{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fab fa-twitter"></i> twitter{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fab fa-instagram"></i> instagram{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fab fa-linkedin"></i> linkedin{" "}
            </a>
            <a href="#">
              {" "}
              <i class="fab fa-pinterest"></i> pinterest{" "}
            </a>
          </div>
        </div>

        <div class="credit">
          {" "}
          created by{" "}
          <span>
            students of Indian Institute of Information Technology, Lucknow
          </span>{" "}
          | all rights reserved{" "}
        </div>
      </section>
    </body>
  );
};

export default MainPage;
