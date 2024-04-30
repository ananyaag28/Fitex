import { useEffect } from 'react';
import './mainForm.css';

export default function MainForm() {
    useEffect(() => {
        document.addEventListener("DOMContentLoaded", function() {
            var current_fs, next_fs, previous_fs; // fieldsets
            var opacity;
            var current = 1;
            var steps = document.querySelectorAll("fieldset").length;
        
            setProgressBar(current);
        
            document.querySelectorAll(".next").forEach(function(button) {
                button.addEventListener("click", function() {
                    current_fs = this.parentElement;
                    next_fs = this.parentElement.nextElementSibling;
        
                    // Add Class Active
                    document.querySelectorAll("#progressbar li")[Array.from(document.querySelectorAll("fieldset")).indexOf(next_fs)].classList.add("active");
        
                    // Show the next fieldset
                    next_fs.style.display = "block";
        
                    // Hide the current fieldset with style
                    var animation = setInterval(function() {
                        if (opacity >= 1) {
                            clearInterval(animation);
                        }
                        opacity += 0.1;
                        current_fs.style.opacity = 1 - opacity;
                        next_fs.style.opacity = opacity;
                    }, 50);
                    setProgressBar(++current);
                });
            });
        
            document.querySelectorAll(".previous").forEach(function(button) {
                button.addEventListener("click", function() {
                    current_fs = this.parentElement;
                    previous_fs = this.parentElement.previousElementSibling;
        
                    // Remove class active
                    document.querySelectorAll("#progressbar li")[Array.from(document.querySelectorAll("fieldset")).indexOf(current_fs)].classList.remove("active");
        
                    // Show the previous fieldset
                    previous_fs.style.display = "block";
        
                    // Hide the current fieldset with style
                    var animation = setInterval(function() {
                        if (opacity >= 1) {
                            clearInterval(animation);
                        }
                        opacity += 0.1;
                        current_fs.style.opacity = 1 - opacity;
                        previous_fs.style.opacity = opacity;
                    }, 50);
                    setProgressBar(--current);
                });
            });
        
            function setProgressBar(curStep) {
                var percent = parseFloat(100 / steps) * curStep;
                percent = percent.toFixed();
                document.querySelector(".progress-bar").style.width = percent + "%";
            }
        
            document.querySelectorAll(".submit").forEach(function(button) {
                button.addEventListener("click", function() {
                    return false;
                });
            });
        });
        
    }, [])
    
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
                    <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                        <h2 id="heading">Sign Up Your User Account</h2>
                        <p>Fill all form field to go to next step</p>
                        <form id="msform">
                            {/* progressbar */}
                            <ul id="progressbar">
                                <li className="active" id="account">
                                    <strong>Account</strong>
                                </li>
                                <li id="personal">
                                    <strong>Personal</strong>
                                </li>
                                <li id="payment">
                                    <strong>Image</strong>
                                </li>
                                <li id="confirm">
                                    <strong>Finish</strong>
                                </li>
                            </ul>
                            <div className="progress">
                                <div
                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                    role="progressbar"
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                />
                            </div>{" "}
                            <br /> {/* fieldsets */}
                            <fieldset>
                                <div className="form-card">
                                    <div className="row">
                                        <div className="col-7">
                                            <h2 className="fs-title">Account Information:</h2>
                                        </div>
                                        <div className="col-5">
                                            <h2 className="steps">Step 1 - 4</h2>
                                        </div>
                                    </div>{" "}
                                    <label className="fieldlabels">Email: *</label>{" "}
                                    <input type="email" name="email" placeholder="Email Id" />{" "}
                                    <label className="fieldlabels">Username: *</label>{" "}
                                    <input type="text" name="uname" placeholder="UserName" />{" "}
                                    <label className="fieldlabels">Password: *</label>{" "}
                                    <input type="password" name="pwd" placeholder="Password" />{" "}
                                    <label className="fieldlabels">Confirm Password: *</label>{" "}
                                    <input
                                        type="password"
                                        name="cpwd"
                                        placeholder="Confirm Password"
                                    />
                                </div>{" "}
                                <input
                                    type="button"
                                    name="next"
                                    className="next action-button"
                                    defaultValue="Next"
                                />
                            </fieldset>
                            <fieldset>
                                <div className="form-card">
                                    <div className="row">
                                        <div className="col-7">
                                            <h2 className="fs-title">Personal Information:</h2>
                                        </div>
                                        <div className="col-5">
                                            <h2 className="steps">Step 2 - 4</h2>
                                        </div>
                                    </div>{" "}
                                    <label className="fieldlabels">First Name: *</label>{" "}
                                    <input type="text" name="fname" placeholder="First Name" />{" "}
                                    <label className="fieldlabels">Last Name: *</label>{" "}
                                    <input type="text" name="lname" placeholder="Last Name" />{" "}
                                    <label className="fieldlabels">Contact No.: *</label>{" "}
                                    <input type="text" name="phno" placeholder="Contact No." />{" "}
                                    <label className="fieldlabels">Alternate Contact No.: *</label>{" "}
                                    <input
                                        type="text"
                                        name="phno_2"
                                        placeholder="Alternate Contact No."
                                    />
                                </div>{" "}
                                <input
                                    type="button"
                                    name="next"
                                    className="next action-button"
                                    defaultValue="Next"
                                />{" "}
                                <input
                                    type="button"
                                    name="previous"
                                    className="previous action-button-previous"
                                    defaultValue="Previous"
                                />
                            </fieldset>
                            <fieldset>
                                <div className="form-card">
                                    <div className="row">
                                        <div className="col-7">
                                            <h2 className="fs-title">Image Upload:</h2>
                                        </div>
                                        <div className="col-5">
                                            <h2 className="steps">Step 3 - 4</h2>
                                        </div>
                                    </div>{" "}
                                    <label className="fieldlabels">Upload Your Photo:</label>{" "}
                                    <input type="file" name="pic" accept="image/*" />{" "}
                                    <label className="fieldlabels">Upload Signature Photo:</label>{" "}
                                    <input type="file" name="pic" accept="image/*" />
                                </div>{" "}
                                <input
                                    type="button"
                                    name="next"
                                    className="next action-button"
                                    defaultValue="Submit"
                                />{" "}
                                <input
                                    type="button"
                                    name="previous"
                                    className="previous action-button-previous"
                                    defaultValue="Previous"
                                />
                            </fieldset>
                            <fieldset>
                                <div className="form-card">
                                    <div className="row">
                                        <div className="col-7">
                                            <h2 className="fs-title">Finish:</h2>
                                        </div>
                                        <div className="col-5">
                                            <h2 className="steps">Step 4 - 4</h2>
                                        </div>
                                    </div>{" "}
                                    <br />
                                    <br />
                                    <h2 className="purple-text text-center">
                                        <strong>SUCCESS !</strong>
                                    </h2>{" "}
                                    <br />
                                    <div className="row justify-content-center">
                                        <div className="col-3">
                                            {" "}
                                            <img
                                                src="https://i.imgur.com/GwStPmg.png"
                                                className="fit-image"
                                            />{" "}
                                        </div>
                                    </div>{" "}
                                    <br />
                                    <br />
                                    <div className="row justify-content-center">
                                        <div className="col-7 text-center">
                                            <h5 className="purple-text text-center">
                                                You Have Successfully Signed Up
                                            </h5>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}