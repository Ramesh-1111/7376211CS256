import { Navbar } from "./Navbar";
import "../components/css/home.css";
import sample from "../assets/react.svg";
export const Home = () => {
  const items = [
    "Phone",
    "TV",
    "Earphone",
    "Tablet",
    "Charger",
    "Mouse",
    "keypad",
    "Bluetooth",
  ];
  return (
    <>
      <Navbar />
      <main>
        <div className="left-side">
          <div className="container">
            <ul>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="right-side">
          <div className="search">
            <input type="text " placeholder="search Here .." />
          </div>
          <div className="container-box">
            <div className="top">
              <img src={sample} alt="" />
            </div>
            <div className="bottom">
              <h4>Product Name : Laptop</h4>
              <p>Price : 000</p>
              <p>Rating :5*</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
