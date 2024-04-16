import React, { useState } from "react";
import mobileImg from "../assets/images/mobile.svg";
import desktopImg from "../assets/images/desktop.svg";
import iconList from "../assets/images/icon-list.svg";
import Modal from "./Modal";

function Form() {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isButtonClicked, setButtonClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showForm, setShowForm] = useState(true);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function handleChange(event) {
    const value = event.target.value;
    setEmail(value);
  }

  function handleClick() {
    setButtonClicked(true);
    setIsEmailValid(emailRegex.test(email));

    if (emailRegex.test(email)) {
      setShowModal(true);
    }
  }

  function closeModal() {
    setShowModal(false); // Close the modal
    
    // Reset the state related to the email input and validation
    setEmail("");
    setIsEmailValid(false);
    setButtonClicked(false);
  }

 

  return (
    <>
      {showForm && (
        <>
          <div className="item image">
            <picture>
              <img
                src={mobileImg}
                alt="mobile-background-image"
                className="mobile-img"
              />
              <img
                src={desktopImg}
                alt="desktop-background-image"
                className="desktop-img"
              />
            </picture>
          </div>
          <div className="item text">
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <ul>
              <li>
                <img src={iconList} alt="icon-list" /> Product discovery and
                building what matters
              </li>
              <li>
                <img src={iconList} alt="icon-list" /> Measuring to ensure updates
                are a success
              </li>
              <li>
                <img src={iconList} alt="icon-list" /> And much more!
              </li>
            </ul>
            <div className="flex-container">
              <label>Email address</label>
              {isButtonClicked ? (
                isEmailValid ? null : <label className="error">Valid email required!</label>
              ) : null}
            </div>
            <input
              name="email"
              value={email}
              placeholder="email@company.com"
              onChange={handleChange}
              className={isButtonClicked && !isEmailValid ? "error-input" : ""}
            />
            <button onClick={handleClick}>Subscribe to monthly newsletter</button>
            {showModal && <Modal email={email} onClose={closeModal}  />}
          </div>
        </>
      )}
    </>
  );
}

export default Form;
