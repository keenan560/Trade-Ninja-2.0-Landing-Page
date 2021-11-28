import React from "react";
import banner from "../../components/assets/banner.png";
import banner2 from "../../components/assets/banner2.png";
import quote from "../../components/assets/quote.png";
import stash from "../../components/assets/stash.png";
import trade from "../../components/assets/trade.png";
import welcome from "../../components/assets/welcome.png";
import activity from "../../components/assets/activity.png";
import community from "../../components/assets/community.png";
import "./Home.css";

function Home() {
  return (
    <div className="home__container">
      <div className="home__banner__container animate__animated animate__fadeIn animate__slow">
        <img className="home__banner" src={banner} alt="banner" />
        <div className="animate__animated animate__fadeInDown animate__delay-5">
          <h1 className="home__banner__title">Free Stock Trading Simulator</h1>
          <h3 className="home__banner__title text-center">
            Practice never felt so easy.
          </h3>
          <p className="home__banner__title text-center text-warning">
            Powered by Finnhub's API{" "}
          </p>
        </div>
        <img className="home__banner" src={banner2} alt="banner2" />
      </div>
      <div className="home__start">
        <div className="home__start__text">
          <h1 className="mb-4">Enjoy on your android or ios device.</h1>
          <h3 className="text-warning">
            The app is available in the Google play store and Apple store.
          </h3>
        </div>
        <img className="home__start__img" src={welcome} alt="img" />
      </div>
      <div className="home__start">
        <img className="home__start__img" src={quote} alt="img" />
        <div className="home__start__text">
          <h1 className="mb-4">Real time quotes.</h1>
          <h3 className="text-success">
            Get real time stock quotes from FinnHub's powerful API.
          </h3>
        </div>
      </div>
      <div className="home__start">
        <div className="home__start__text">
          <h1 className="mb-4">Check your holdings.</h1>
          <h3 className="text-primary">
            Use the Analyze tool to compare market value.
          </h3>
        </div>
        <img className="home__start__img" src={stash} alt="img" />
      </div>
      <div className="home__start">
        <img className="home__start__img" src={community} alt="img" />
        <div className="home__start__text">
          <h1 className="mb-4">Community.</h1>
          <h3 className="text-primary">
            See how your cash balance does against others.
          </h3>
        </div>
      </div>
      <div className="home__faqs__container">
        <h1 className="home__faqs__title">Frequently Asked Questions</h1>
        {/* ***** Accordion ****** */}
        <div className="accordion mx-auto" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                What is Trade Ninja?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                A free stock trading simulator that allows you to practice
                trading securities without using real money.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How much does Trade Ninja cost?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">Nothing it's free.</div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                What happens when I trade?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">A record is created </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
