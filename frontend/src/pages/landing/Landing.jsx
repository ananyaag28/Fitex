import "./landing.css";
import Fitex from "../Cook/fitex.png";
import { useState, useEffect } from "react";
import axios from "axios";

import { BACKEND_URL } from "../../values";

import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();
  const consumer = localStorage.getItem("consumerId");
  const [goal, setGoal] = useState(null);

  const [BMI, setBMI] = useState(null); // State to
  const bmiString = BMI?.toString(); // Convert BigInt to string

  const [bmiStage, setBmiStage] = useState(null);
  const [calories, setCalories] = useState(null);
  useEffect(() => {
    const fetchBmi = async () => {
      try {
        const res = await axios.post(`${BACKEND_URL}/consumer`, {consumerId : consumer});
        const BMI = res.data.currentBmi;
        console.log("BMI: ", BMI)
        setBMI(BMI);
        setBmiStage(res.data.currentBmiStage)
        console.log(BMI);
        console.log(res.data);
        const gender = res.data.gender;
        console.log(gender);
        const height = res.data.height;
        console.log(height);
      } catch (error) {
        console.log("Error Logging In Consumer");
      }
    };

    fetchBmi();
  }, []); // Add chosenTask as dependency to recalculate when it changes

  const handleGeneratePlanClick = (selectedGoal) => {
    console.log(selectedGoal);
    setGoal(selectedGoal);
  };

  useEffect(() => {
    if (consumer && goal && calories) {
      navigate(`/meals/${calories}`);
    }
  }, [consumer, goal, calories, navigate]);

  return (
    <div className="landingPage">
      <header className="header" style={{ backgroundColor: '#216c53' }} >
        <div className="flex gap-2 items-center !text-white text-5xl">
          <img src={Fitex} height={125} width={125} alt="Logo" />
          <p>Fitex</p>
        </div>
        <nav className="navbar">
          <div className="dropdown">
            <a href="/landing" className="text-[#fffef2] hover:text-[#cbedb3]">
              home
            </a>
          </div>
          {/* fffef2 */}
          <a href="/landing#review" className="text-[#fffef2] hover:text-[#cbedb3]">Other services</a>
          <a href="/landing#services" className="text-[#fffef2] hover:text-[#cbedb3]">Meal Plan</a>
          <a className="text-xl font-extrabold text-[#cbedb3]">BMI: {bmiString} ~ <span className="text">{bmiStage}</span></a>
        </nav>
        <div id="menu-btn" className="fas fa-bars" />
      </header>

      <section className="mt-11 pt-10" id="home">
        {/* <div className="content">
          <h3>stay safe, stay healthy</h3>
        </div> */}
      </section>

      <section className="about h-screen bg-[#FFFEF2]" id="about">
        <h1 className="heading my-20">
          {" "}
          {/* <span>about</span> us{" "} */}
        </h1>
        <div className="row">
          <div className="image">
            <img
              src="https://img.freepik.com/free-photo/flay-lay-scale-weights_23-2148262188.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714435200&semt=sph"
              alt="Flay lay scale weights"
              className="m-5"
              style={{ height: '300px', width: '500px' }} 
            />
          </div>
          <div className="content">
            <h3>we take care of your healthy life</h3>
            <p>
              Fitex, is an all-in-one health and fitness companion designed to
              revolutionize how you track, manage, and optimize your health and
              fitness goals. From personalized nutrition plans to workout
              routines , our app offers a comprehensive suite of tools to
              support your holistic well-being. Whether you're aiming to achieve
              your ideal body weight, enhance your skin's radiance, or simply
              lead a healthier lifestyle, Fitex is your ultimate partner every
              step of the way.
            </p>
            <p>
              Overall, our vision is to become the go-to platform for
              individuals seeking a convenient, cost-effective, and effective
              way to manage their health and wellness journey. We believe that
              our app will empower users to make healthier choices and lead
              happier, more fulfilling lives.
            </p>

            {/* <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a> */}
          </div>
        </div>
      </section>

      <section className="services " id="services">
        <h1 className="heading">
          Generate <span>Meal Plan</span>
        </h1>
        <div className="box-container">
          <div className="box">
            <i className="fas fa-heartbeat" />
            <h3>Lose weight</h3>
            <p>
              Get free check ups at college campus or book an appointment with
              nearest clinic now.
            </p>
            <a
              className="btn"
              href={`/meals/${Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500}`}
              onClick={() => handleGeneratePlanClick("lose")}
            >
              Generate Plan <span className="fas fa-chevron-right" />
            </a>
          </div>
          <div className="box">
            <i className="fas fa-pills" />
            <h3>Maintain weight</h3>
            <p>Find the medicines shop nearby.</p>
            <a
              className="btn"
              href={`/meals/${Math.floor(Math.random() * (2500 - 2000 + 1)) + 2000}`}
              onClick={() => handleGeneratePlanClick("maintain")}
            >
              Generate Plan <span className="fas fa-chevron-right" />
            </a>
          </div>
          <div className="box">
            <i className="fas fa-procedures" />
            <h3>Gain weight</h3>
            <p>
              Who wants to turn up to medicines without asking mom about
              alternatives.
            </p>
            <a
              className="btn"
              href={`/meals/${Math.floor(Math.random() * (3000 - 2500 + 1)) + 2500}`}
              onClick={() => handleGeneratePlanClick("gain")}
            >
              Generate Plan <span className="fas fa-chevron-right" />
            </a>
          </div>
        </div>
      </section>

      <section className="review pb-32" id="review">
        <h1 className="heading">
          {" "}
          Other <span>services</span>{" "}
        </h1>
        <div className="box-container">
          <a href="/waterpage">
            <div className="box">
              <div className="flex items-center gap-16">
                <img src="https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg" alt="" className="dp" />
                <h3>Water Intake</h3>
              </div>
              <p className="text -mt-6">
                I think the website is fantastic. It was so easy to get used to
                the interface and the remedy was useful to me hence I didn't
                really check out the appointment part and would not even be
                willing to visit that anytime soon!
              </p>
            </div>
          </a>
          <a href="/snappage">
            <div className="box">
              <div className="flex items-center gap-16">
              <img src="https://img.freepik.com/premium-photo/apple-fruit-photo_650611-98.jpg" alt="" className="dp" />
              <h3>Snap Streak</h3>                
              </div>
              <p className="text -mt-6">
                The website was useful to me but I'd suggest you to kindly
                mention the timings of clinics along with the fees of several
                doctors at hospitals as for that we have to refer to google
                anyways. The maps were easy to access.
              </p>
            </div>
          </a>
          <a href="/snappage">
            <div className="box">
              <div className="flex items-center gap-16">
              <img src="https://www.cnet.com/a/img/resize/be5078fee8cc102e5149e367f52e7129450c035b/hub/2022/10/18/31d3da21-123a-4908-885a-e26c5df60fb9/clock-time-countdown-0954.jpg?auto=webp&fit=crop&height=1200&width=1200" alt="" className="dp" />
              <h3>Task Based Alarm</h3>                
              </div>
              <p className="text -mt-6" >
                The website was useful to me but I'd suggest you to kindly
                mention the timings of clinics along with the fees of several
                doctors at hospitals as for that we have to refer to google
                anyways. The maps were easy to access.
              </p>
            </div>
          </a>
        </div>
      </section>

      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>quick links</h3>
            <a href="/index.htm">
              {" "}
              <i className="fas fa-chevron-right" /> home{" "}
            </a>
            <a href="/index.htm#services">
              {" "}
              <i className="fas fa-chevron-right" /> services{" "}
            </a>
            <a href="/index.htm#about">
              {" "}
              <i className="fas fa-chevron-right" /> about{" "}
            </a>
            <a href="/remedies.html">
              {" "}
              <i className="fas fa-chevron-right" /> remedies{" "}
            </a>
            <a href="/geolocation.html">
              {" "}
              <i className="fas fa-chevron-right" /> geolocations{" "}
            </a>
            <a href="/book.html">
              {" "}
              <i className="fas fa-chevron-right" /> book{" "}
            </a>
            <a href="/review.html">
              {" "}
              <i className="fas fa-chevron-right" /> review{" "}
            </a>
            <a href="/index.htm#blogs">
              {" "}
              <i className="fas fa-chevron-right" /> blogs{" "}
            </a>
          </div>
          <div className="box">
            <h3>our services</h3>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right" /> medical faculty and free
              checkups{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right" /> medicine shops and
              hospitals{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-chevron-right" /> home remedies{" "}
            </a>
            {/* a href="#"> <i class="fas fa-chevron-right"></i> diagnosis </a */}
            {/* <a href="#"> <i class="fas fa-chevron-right"></i> ambulance service </a> */}
          </div>
          <div className="box">
            <h3>contact info</h3>
            <a href="#">
              {" "}
              <i className="fas fa-phone" /> +91-9977703331{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-phone" /> +91-6264143244{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-envelope" /> ria.malvi170403@gmail.com{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-envelope" /> contact@iiitl.ac.in{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-map-marker-alt" /> Lucknow, India - 226002{" "}
            </a>
          </div>
          <div className="box">
            <h3>follow us</h3>
            <a href="#">
              {" "}
              <i className="fab fa-facebook-f" /> facebook{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-twitter" /> twitter{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-instagram" /> instagram{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-linkedin" /> linkedin{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fab fa-pinterest" /> pinterest{" "}
            </a>
          </div>
        </div>
        <div className="credit">
          {" "}
          created by{" "}
          <span>
            students of Indian Institute of Information Technology, Lucknow
          </span>{" "}
          | all rights reserved{" "}
        </div>
      </section>
    </div>
  );
}
