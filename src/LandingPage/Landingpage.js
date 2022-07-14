import React from "react";
import "./LandingPage.scss";
import logo2 from "../assets/LandingpageAssets/logo2.png";
import photo3 from "../assets/LandingpageAssets/photo3.jpg";
import photo4 from "../assets/LandingpageAssets/photo4.jpg";
import bodyphoto2 from "../assets/LandingpageAssets/bodyphoto2.jpg";
import { Link } from "react-router-dom";
const Landingpage = () => {
  return (
    <body>
      {/* <!--            header            --> */}
      <header class="header">
        {/* <!-- Navigation !  --> */}
        <nav class="header-nav">
          <ion-icon class="menu-nav" name="menu-outline"></ion-icon>
          <img src={logo2} alt="logo" class="logo" />
          <ul class="nav-ul">
            <li class="nav-li">Home</li>
            <li class="nav-li">Shop</li>
            <li class="nav-li">Contact us</li>
            <li class="nav-li">About us</li>
          </ul>
          <div class="header-icons">
            <ion-icon
              class="header-icon icon-facebook"
              name="logo-facebook"
            ></ion-icon>
            <ion-icon class="header-icon" name="logo-instagram"></ion-icon>
          </div>
        </nav>
        {/* <!-- Navigation !  --> */}

        {/* <!-- Header-body !  --> */}

        <div class="text-box">
          <h1 class="main-text">Start Embracing Your Own Uniqueness</h1>
          <Link to={"/shop"}>
            <button class="shop-button">Shop</button>
          </Link>
        </div>

        {/* <!-- Header-body !  --> */}
      </header>
      {/* <!--            header            --> */}

      {/* <!--             BODY                  --> */}
      <div class="body">
        <h2 class="rare">Rare impact</h2>
        <div class="body1">
          <img class="bodyphoto" src={bodyphoto2} alt="girlwithbag" />
          <div class="right-box">
            <div class="photo-body">
              <img class="photo3" src={photo3} alt="bag" />
              <img class="photo4" src={photo4} alt="bag" />
            </div>
            <div class="body-content">
              <p class="body-text">
                Online only for a limited time! Bring comfort & kindness to your
                day in this super cazy sweatshirt. 100% of net proceeds support
                the Rare impact Found
              </p>
              <Link class="link" to={"/shop"}>
                SHOP FOR A CAUSE
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Card section --> */}
      <div class="cards">
        <div class="card1">
          <div class="random">
            <ion-icon class="card-icon" name="flag-outline"></ion-icon>
          </div>
          <p class="card-head">Made in Georgia.</p>
          <p class="card-text">
            We are making our product with high quality materials. everything
            made in Georgia.
          </p>
        </div>

        <div class="card2">
          <div class="random">
            <ion-icon class="card-icon" name="navigate-outline"></ion-icon>
          </div>
          <p class="card-head">Delivery in Georgia.</p>
          <p class="card-text">
            We can deliver our product in 3-5 days, anywhere in Georgia. lorem
            ipsum
          </p>
        </div>

        <div class="card3">
          <div class="random">
            <ion-icon class="card-icon" name="wallet-outline"></ion-icon>
          </div>
          <p class="card-head">Money back guarantee.</p>
          <p class="card-text">
            You can get your money back in a minute, lorem ipsum cite leg
          </p>
        </div>
      </div>
      {/* <!-- Card section --> */}

      {/* <!-- footer --> */}
      <hr />
      <footer class="body box-footer">
        <div class="footer footer1">
          <img class="logo logo2" src={logo2} />
          <p>
            <ion-icon
              class="header-icon icon-footer"
              name="logo-instagram"
            ></ion-icon>
            <ion-icon
              class="header-icon icon-footer"
              name="logo-facebook"
            ></ion-icon>
          </p>
          <p>Copyright &copy; 2022 by Anisa.</p>
          <p>Inc. All rights reserved</p>
        </div>
        <div class="footer2 footer">
          <p class="footer-text">Contact us</p>
          <p>623 Harrisson St.. 2nd Floor.</p>
          <p>San Francisco, CA 94108</p>
          <p>415-201-6370</p>
          <p>Anisa@gmail.com</p>
        </div>
        <div class="footer4 footer">
          <p class="footer-text">Company</p>
          <p>About Anisa</p>
          <p>For Business</p>
          <p>Cooking partners</p>
          <p>Careers</p>
        </div>
      </footer>
      {/* <!--    Footer    --> */}
    </body>
  );
};

export default Landingpage;
