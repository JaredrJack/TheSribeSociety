import React from "react";
function hello(){
    console.log('Hello from Hello function')
};

export default function HelloWorld() {
    return (<>
        <div className="container">
            <form autocomplete="off">
                <h4>Submit your work</h4>
                <div className="input-section">
                    <label>First Name <span className="required-color">*</span></label>
                    <input
                        type="text"
                        placeholder="Enter First Name"
                        id="first-name-input"
                        required
                    />
                    <span id="first-name-error" className="hide required-color error-message"
                    >Invalid Input</span
                    >
                    <span id="empty-first-name" className="hide required-color error-message"
                    >First Name Cannot Be Empty</span
                    >
                </div>
                <div className="input-section">
                    <label>Last Name <span className="required-color">*</span></label>
                    <input
                        type="text "
                        placeholder="Enter Last Name"
                        id="last-name-input"
                        required
                    />
                    <span id="last-name-error" className="hide required-color error-message"
                    >Invalid Input</span
                    >
                    <span id="empty-last-name" className="hide required-color error-message">
                        Last Name Cannot Be Empty
                    </span>
                </div>
                <div className="input-section">
                    <label>Email <span className="required-color">*</span></label>
                    <input type="email" placeholder="Enter Email" id="email" required />
                    <span id="email-error" className="hide required-color error-message"
                    >Invalid Email</span
                    >
                    <span id="empty-email" className="hide required-color error-message"
                    >Email Cannot Be Empty</span
                    >
                </div>
                <div className="input-section">
                    <label>Link to work<span className="required-color">*</span></label>
                    <input
                        type="text"
                        placeholder="Paste your link"
                        id="link"
                        required
                    />
                    <span id="link-error" className="hide required-color error-message"
                    >Add a correct link</span
                    >
                    <span id="empty-phone" className="hide required-color error-message">
                        Link cannot be empty
                    </span>
                </div>
                <button
                    onClick={hello()}
                >Submit Form</button>
                <a href="news.html">Back to Page</a>
            </form>
        </div>
    </>)
}
