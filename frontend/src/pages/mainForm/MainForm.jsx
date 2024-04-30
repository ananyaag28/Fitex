import { useEffect, useRef, useState } from 'react';
import './mainForm.css';
import { useNavigate } from 'react-router-dom';

export default function MainForm() {
    const navigate = useNavigate();
    const [current, setCurrent] = useState(1);
    const progressbar = useRef(null);
    let steps = 4;
    useEffect(() => {
        setProgressBar(current);
    }, [])
    function setProgressBar(curStep) {
        let percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        progressbar.current.style.width = percent + "%";
    }

    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
                    <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                        <h2 id="heading">Weight Loss Quiz</h2>
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
                                    className="progress-bar progress-bar-striped progress-bar-animated h-full"
                                    role="progressbar"
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                    ref={progressbar}
                                />
                            </div>{" "}
                            <br />
                            {/* fieldsets */}
                            {current == 1 &&
                                <fieldset>
                                    <div className="form-card">
                                        <div className="row">
                                            <div className="col-7">
                                                <h2 className="fs-title">Weight Loss Quiz</h2>
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
                                        onClick={(e) => {
                                            setProgressBar(current + 1);
                                            setCurrent(current + 1);
                                            document.getElementById("personal").classList.add("active");
                                        }}
                                    />
                                </fieldset>
                            }
                            {current == 2 &&
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
                                        onClick={() => {
                                            setProgressBar(current + 1);
                                            setCurrent(current + 1);
                                            document.getElementById("payment").classList.add("active");
                                        }}
                                    />{" "}
                                    <input
                                        type="button"
                                        name="previous"
                                        className="previous action-button-previous"
                                        defaultValue="Previous"
                                        onClick={() => {
                                            setProgressBar(current - 1);
                                            setCurrent(current - 1);
                                            document.getElementById("personal").classList.remove("active");
                                        }}
                                    />
                                </fieldset>
                            }
                            {current == 3 &&
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
                                        onClick={() => {
                                            setProgressBar(current + 1);
                                            setCurrent(current + 1);
                                            document.getElementById("confirm").classList.add("active");
                                        }}
                                    />{" "}
                                    <input
                                        type="button"
                                        name="previous"
                                        className="previous action-button-previous"
                                        defaultValue="Previous"
                                        onClick={() => {
                                            setProgressBar(current - 1);
                                            setCurrent(current - 1);
                                            document.getElementById("payment").classList.remove("active");

                                        }}
                                    />
                                </fieldset>
                            }
                            {current == 4 &&
                                (<fieldset>
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
                                                    src="https://imgs.search.brave.com/h1ihElsuGCZmTvCL9ZwVMoVvIxvku7Pm4qmiPlRavOI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3N1Y2Nlc3Mt/cG5nLXN1Y2Nlc3Mt/aWNvbi1pbWFnZS0y/MzE5NC00MDAucG5n"
                                                    className="h-20 w-20 m-auto"
                                                />{" "}
                                            </div>
                                        </div>{" "}
                                        <br />
                                        <button onClick={()=>navigate("/meals")}>Go to your meals</button>
                                        <br />
                                        <div className="row justify-content-center">
                                            <div className="col-7 text-center">
                                                <h5 className="purple-text text-center">
                                                    You Have Successfully Signed Up
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>)
                            }
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}