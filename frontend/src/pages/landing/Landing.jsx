import './landing.css';
import Fitex from '../Cook/fitex.png';
import { useNavigate } from 'react-router-dom';


export default function Landing() {
    const navigate = useNavigate();

    return (
        <>
            {/* header section starts  */}
            <header className="header">
                {/* a href="#" class="logo"> <i class="fas fa-heartbeat"></i> maa ka nuskha </a */}
                <img
                    src={Fitex}
                    height={200}
                    width={200}
                />
                <nav className="navbar">
                    <div className="dropdown">
                        <button className="dropbtn">
                            <a href="/index.htm">home</a>
                        </button>
                        <div className="dropdown-content">
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
                <div id="menu-btn" className="fas fa-bars" />
            </header>
            {/* header section ends */}
            {/* home section starts  */}
            <section className="home mt-32" id="home">
                <div className="image">
                    <img src="drive-download-20220604T061557Z-001/home-img.svg" alt="" />
                </div>
                <div className="content">
                    <h3>stay safe, stay healthy</h3>
                    <p>
                        We are on stand by to help you find alternatives to the chemicals. Find
                        Home Remedies. Connect with the near by hospitals Now. Schedule an
                        appointment. Share feedback.
                    </p>
                    <a href="/book.html" className="btn">
                        {" "}
                        book an appointment <span className="fas fa-chevron-right" />{" "}
                    </a>
                </div>
            </section>
            <section className="about" id="about">
                <h1 className="heading">
                    {" "}
                    <span>about</span> us{" "}
                </h1>
                <div className="row">
                    <div className="image">
                        <img src="drive-download-20220604T061557Z-001/about-img.svg" alt="" />
                    </div>
                    <div className="content">
                        <h3>we take care of your healthy life</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
                            ducimus, quod ex cupiditate ullam in assumenda maiores et culpa odit
                            tempora ipsam qui, quisquam quis facere iste fuga, minus nesciunt.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus vero
                            ipsam laborum porro voluptates voluptatibus a nihil temporibus
                            deserunt vel?
                        </p>
                        {/* <a href="#" class="btn"> learn more <span class="fas fa-chevron-right"></span> </a> */}
                    </div>
                </div>
            </section>
            {/* about section ends */}
            {/* services section starts  */}
            <section className="services" id="services">
                <h1 className="heading">
                    {" "}
                    our <span>services</span>{" "}
                </h1>
                <div className="box-container">
                    <div className="box">
                        <i className="fas fa-heartbeat" />
                        <h3>Lose weight</h3>
                        <p>
                            Get free check ups at college campus or book an appointment with
                            nearest clinic now.
                        </p>
                        <a onClick={()=>navigate('/meals')} className="btn">
                            {" "}
                            learn more <span className="fas fa-chevron-right" />{" "}
                        </a>
                    </div>
                    <div className="box">
                        <i className="fas fa-pills" />
                        <h3>Maintain weight</h3>
                        <p>Find the medicines shop nearby. </p>
                        <a onClick={()=>navigate('/meals')} className="btn">
                            {" "}
                            learn more <span className="fas fa-chevron-right" />{" "}
                        </a>
                    </div>
                    <div className="box">
                        <i className="fas fa-procedures" />
                        <h3>Gain weight</h3>
                        <p>
                            Who wants to turn up to medicines without asking mom about
                            alternatives.
                        </p>
                        <a onClick={()=>navigate('/meals')} className="btn">
                            {" "}
                            learn more <span className="fas fa-chevron-right" />{" "}
                        </a>
                    </div>
                </div>
            </section>
            {/* services section ends */}
            {/* doctors section starts  */}
            {/* <section class="doctors" id="doctors">

    <h1 class="heading"><span>remedies</span> </h1>

    <div class="box-container">

  <div class="box">
      <img src="image/doc-1.jpg" alt="">
      <h3>john deo</h3>
      <span>expert doctor</span>
      <div class="share">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
      </div>
  </div>

  <div class="box">
      <img src="image/doc-2.jpg" alt="">
      <h3>john deo</h3>
      <span>expert doctor</span>
      <div class="share">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
      </div>
  </div>

  <div class="box">
      <img src="image/doc-3.jpg" alt="">
      <h3>john deo</h3>
      <span>expert doctor</span>
      <div class="share">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
      </div>
  </div>

  <div class="box">
      <img src="image/doc-4.jpg" alt="">
      <h3>john deo</h3>
      <span>expert doctor</span>
      <div class="share">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
      </div>
  </div>

  <div class="box">
      <img src="image/doc-5.jpg" alt="">
      <h3>john deo</h3>
      <span>expert doctor</span>
      <div class="share">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
      </div>
  </div>

  <div class="box">
      <img src="image/doc-6.jpg" alt="">
      <h3>john deo</h3>
      <span>expert doctor</span>
      <div class="share">
          <a href="#" class="fab fa-facebook-f"></a>
          <a href="#" class="fab fa-twitter"></a>
          <a href="#" class="fab fa-instagram"></a>
          <a href="#" class="fab fa-linkedin"></a>
      </div>
  </div>

    </div>

</section> */}
            {/* doctors section ends */}
            {/* booking section starts   */}
            {/* <section class="book" id="book">

    <h1 class="heading"> <span>book</span> now </h1>    

    <div class="row">

  <div class="image">
      <img src="drive-download-20220604T061557Z-001/book-img.svg" alt="">
  </div>

  <form action="">
      <h3>book appointment</h3>
      <input type="text" placeholder="Name" class="box">
      <input type="number" placeholder="Contact Number" class="box">
      <input type="text" placeholder="Enrollment Number" class="box">
      <input type="date" class="box">
      <input type="submit" value="book now" class="btn">
  </form>

    </div>

</section> */}
            {/* booking section ends */}
            {/* review section starts  */}
            <section className="review" id="review">
                <h1 className="heading">
                    {" "}
                    student's <span>review</span>{" "}
                </h1>
                <div className="box-container">
                    <div className="box">
                        <img src="/Assets/avneesh.jpeg" alt="" className="dp" />
                        <h3>avneesh rai</h3>
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                        </div>
                        <p className="text">
                            I think the website is fantastic. It was so easy to get used to the
                            interface and the remedy was useful to me hence I didn't really check
                            out the appointment part and would not even be willing to visit that
                            anytime soon!
                        </p>
                    </div>
                    <div className="box">
                        <img src="/Assets/savarna.jpeg" alt="" className="dp" />
                        <h3>savarna chandra</h3>
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                        </div>
                        <p className="text">
                            The website was useful to me but I'd suggest you to kindly mention the
                            timings of clinics along with the fees of several doctors at hospitals
                            as for that we have to refer to google anyways. The maps were easy to
                            access.
                        </p>
                    </div>
                    <div className="box">
                        <img src="/Assets/apoorva.jpeg" alt="" className="dp" />
                        <h3>apoorva kothari</h3>
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                        </div>
                        <p className="text">
                            Overall it is good but I would have wanted a feature to give
                            suggestions of adding some more tried and tested remedies. Work on
                            that next time. Kudos to the idea though!
                        </p>
                    </div>
                    <div className="box">
                        <img src="/Assets/kastoov.jpeg" alt="" className="dp" />
                        <h3>kaustuv behera</h3>
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                        </div>
                        <p className="text">
                            If I were to rate it, it'd be 5/5. This initiative is great and the
                            website works just fine. Take it ahead. Godspeed!
                        </p>
                    </div>
                    <div className="box">
                        <img src="/Assets/karthik.jpeg" alt="" className="dp" />
                        <h3>karthik s.</h3>
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                        </div>
                        <p className="text">
                            {" "}
                            All inn all, the experience was good. iske aage koi suggestion ya sort
                            of negative point add kr denas
                        </p>
                    </div>
                    <div className="box">
                        <img
                            src="/Assets/photo_2022-07-21_12-33-28.jpg"
                            alt=""
                            className="dp"
                        />
                        <h3>sumit raj</h3>
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                        </div>
                        <p className="text">
                            All in all, the experience was good. I faced problem in arranging some
                            ingredients mentioned in the remedies, so, I'd suggest to either put
                            up the nearby shops where we can find them or arrange the ingredients
                            for us.
                        </p>
                    </div>
                </div>
            </section>
            {/* review section ends */}
            {/* blogs section starts  */}
            <section className="blogs" id="blogs">
                <h1 className="heading">
                    {" "}
                    useful <span>blogs</span>{" "}
                </h1>
                <div className="box-container">
                    <div className="box">
                        <div className="image">
                            <img src="Assets/blog1.jpg" alt="" />
                        </div>
                        <div className="content">
                            <div className="icon">
                                <a href="#">
                                    {" "}
                                    <i className="fas fa-calendar" /> 29th january, 2018{" "}
                                </a>
                                <a href="#">
                                    {" "}
                                    <i className="fas fa-user" /> by edsys.in{" "}
                                </a>
                            </div>
                            <h3>10 Common Health Problems Faced By Students</h3>
                            <a
                                href="https://www.edsys.in/common-health-problems-students/"
                                className="btn"
                                target="_blank"
                            >
                                {" "}
                                learn more <span className="fas fa-chevron-right" />{" "}
                            </a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="/Assets/hostel.jpg" alt="" />
                        </div>
                        <div className="content">
                            <div className="icon">
                                <a href="#">
                                    {" "}
                                    <i className="fas fa-calendar" /> 12th june, 2021{" "}
                                </a>
                                <a href="#">
                                    {" "}
                                    <i className="fas fa-user" /> couch &amp; cheese{" "}
                                </a>
                            </div>
                            <h3>
                                Ultimate Tips for Staying Happy &amp; Healthy in a Hostel as a
                                Student or Working Professional
                            </h3>
                            <a
                                href="https://couchandcheese.com/blog/tips-for-staying-happy-healthy-motivated-in-hostel-as-student-or-working-professionals/"
                                className="btn"
                                target="_blank"
                            >
                                {" "}
                                learn more <span className="fas fa-chevron-right" />{" "}
                            </a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="image">
                            <img src="/Assets/blog3.webp" alt="" />
                        </div>
                        <div className="content">
                            <div className="icon">
                                <a href="#">
                                    {" "}
                                    <i className="fas fa-calendar" /> 23rd june, 2021{" "}
                                </a>
                                <a href="#">
                                    {" "}
                                    <i className="fas fa-user" /> by manju yadav{" "}
                                </a>
                            </div>
                            <h3>girls' hostel life</h3>
                            <a
                                href="https://timesofindia.indiatimes.com/readersblog/girls-life-blogs/girls-hostel-life-34158/"
                                className="btn"
                                target="_blank"
                            >
                                {" "}
                                learn more <span className="fas fa-chevron-right" />{" "}
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* blogs section ends */}
            {/* footer section starts  */}
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
                            <i className="fas fa-chevron-right" /> medicine shops and hospitals{" "}
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
            {/* footer section ends */}
            {/* custom js file link  */}
        </>

    );
}