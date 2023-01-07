import "./styles.css";
import visa from "./visa.png";
import chip from "./chip.png";
import React, { useState } from "react";

export default function App() {
  const [value, setValue] = useState("**** **** **** ****");
  const [name, setname] = useState("Prachi Goel");
  const [exp, setexpr] = useState("12");
  const [yr, setyr] = useState("23");
  const [cvv, setcvv] = useState("***");
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const number = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12"
  ];

  return (
    <div class="container">
      <div className="cardcontainer">
        <div className="front">
          <div className="image">
            <img src={chip} alt="" />
            <img src={visa} alt="" />
          </div>
          <div className="cardnumberbox">{value}</div>
          <div className="flexbox">
            <div className="box">
              <span>card holder</span>
              <div className="cardholdername">{name}</div>
            </div>
            <div className="box">
              <span>expires</span>
              <div className="expiration">
                <span className="expmonth">{exp + " /"} </span>
                <span className="expyear">{yr}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="back">
          <div className="stripe"></div>
          <div className="box">
            <span>{cvv}</span>
            <div className="cvvbox"></div>
            <img src={visa} alt="" />
          </div>
        </div>
      </div>

      <form>
        <div class="inputBox">
          <span>card number</span>
          <input
            type="text"
            maxlength="19"
            placeholder="****"
            class="cardnumberinput"
          />
        </div>
        <div class="inputBox">
          <span>card holder</span>
          <input type="text" placeholder="Agam" class="cardholderinput" />
        </div>
        <div class="flexbox">
          <div class="inputBox">
            <span>expiration mm</span>
            <select name="" id="" class="monthinput">
              <option value="month" selected disabled>
                month
              </option>
              {numbers.map((ar) => {
                return <option value={ar}>{ar}</option>;
              })}
            </select>
          </div>
          <div class="inputBox">
            <span>expiration yy</span>
            <select name="" id="" class="yearinput">
              <option value="year" selected disabled>
                year
              </option>
              {number.map((ar) => {
                return <option value={ar}>{ar}</option>;
              })}
            </select>
          </div>
          <div class="inputBox">
            <span>cvv</span>
            <input
              type="text"
              placeholder="***"
              maxlength="3"
              class="cvvinput"
            />
          </div>
        </div>
        <button
          type="submit"
          class="submitbtn"
          onClick={(event) => {
            event.preventDefault();
            setValue(document.querySelector(".cardnumberinput").value);
            setname(document.querySelector(".cardholderinput").value);
            setexpr(document.querySelector(".monthinput").value);
            setyr(document.querySelector(".yearinput").value);
            setcvv(document.querySelector(".cvvinput").value);
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
