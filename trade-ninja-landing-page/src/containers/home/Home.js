import React from "react";
import banner from "../../components/assets/banner.png";
import banner2 from "../../components/assets/banner2.png";

import "./Home.css";

function Home() {
  return (
    <div className="home__container">
      <div className="home__banner__container">
        <img className="home__banner" src={banner} alt="banner" />
        <div>
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
        <img className="home__start__img" src={banner} alt="img" />
      </div>
      <div className="home__start">
        <img className="home__start__img" src={banner} alt="img" />
        <div className="home__start__text">
          <h1 className="mb-4">Real time quotes.</h1>
          <h3 className="text-success">
            Get real time stock quotes from FinnHub's powerful API.
          </h3>
        </div>
      </div>
      <div className="home__start">
        <div className="home__start__text">
          <h1 className="mb-4">Real time quotes.</h1>
          <h3 className="text-primary">
            Get real time stock quotes from FinnHub's powerful API.
          </h3>
        </div>
        <img className="home__start__img" src={banner} alt="img" />
      </div>
      <div className="home__start">
        <img className="home__start__img" src={banner} alt="img" />
        <div className="home__start__text">
          <h1 className="mb-4">Real time quotes.</h1>
          <h3 className="text-primary">
            Get real time stock quotes from FinnHub's powerful API.
          </h3>
        </div>
      </div>
      <div className="home__faqs__container">
        <h1 className="home__faqs__title">Frequently Asked Questions</h1>
        {/* Accordion */}
        <div className="accordion mx-auto" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
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
              <div className="accordion-body">asdfsdfsdfsdfsdfdsfdw.</div>
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
              <div className="accordion-body">Fake money.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
