import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import statsimg from "../assets/About-img/aboutimg.jpg";

function About() {
  return (
    <div>
      <NavBar />
      <AboutUs />
      <Statistic />
      <Footer />
    </div>
  );
}

export default About;

export function AboutUs() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <h1 className="font-bold text-lg">ShopEase Group</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="inline-block w-8 h-8 text-gray-400 mb-8"
              viewBox="0 0 975.036 975.036"
            >
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p class="leading-relaxed lg:text-lg text-xs">
              Welcome to <b>ShopEase</b>, your number one source for stylish
              Products. We're dedicated to giving you the very best of
              Clothes,Electronics gadgets and many more, with a focus on
              quality, customer service, and uniqueness. Founded in <b>2024</b>{" "}
              by
              <b> Abhishek Kumar Srivastava</b>,<b> ShopEase</b> has come a long
              way from its beginnings in Kolkata. We now serve customers all
              over the <b>India</b>, and are thrilled that we're able to turn
              our passion into our own website. We believe in delivering
              products that are not only stylish and high-quality but also
              contribute to a better world. Our commitment to sustainability and
              ethical practices means that you can shop with confidence, knowing
              that your purchases make a positive impact. We hope you enjoy our
              products as much as we enjoy offering them to you. If you have any
              questions or comments, please don't hesitate to contact us.
            </p>
            <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
              ABHISHEK KUMAR SRIVASTAVA
            </h2>
            <p class="text-gray-500">Founder and CEO</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export function Statistic() {
  return (
    <div>
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 sm:py-24 mx-auto flex flex-wrap justify-center">
          <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div class="w-full sm:p-4 px-4 mb-6">
              <div class="leading-relaxed">
                "Over 50,000 satisfied customers have made purchases through our
                platform, with a 95% satisfaction rate!"
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">
                50K
              </h2>
              <p class="leading-relaxed">Users</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">
                20K
              </h2>
              <p class="leading-relaxed">Products</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">5⭐</h2>
              <p class="leading-relaxed">Customer Ratings</p>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">4</h2>
              <p class="leading-relaxed">Country</p>
            </div>
          </div>
          <div class="lg:w-1/3 sm:w-1/3 w-full rounded-lg overflow-hidden mt-4 sm:mt-0">
            <img
              class="object-cover object-center w-full h-full"
              src={statsimg}
              alt="stats"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
