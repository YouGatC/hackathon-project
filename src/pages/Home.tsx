import Logo from "../assets/SGA.png";
import Linkedin from "../assets/linkedin.svg";
import Instagram from "../assets/instragram.svg";

export default function Home() {
  return (
    <div
      className="h-screen overflow-y-auto overflow-x-hidden text-white w-screen"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000",
      }}
    >
      <div className="flex gap-16 pt-2 justify-center items-center">
        <img className="h-20 w-20" src={Logo} alt="logo of the web page" />
        <div className="flex justify-between min-w-130 bg-gray-800 p-4 px-7 rounded-2xl shadow-lg shadow-teal-300/50">
          <p className="uppercase text-white hover:text-teal-500 active:text-teal-900">
            Home
          </p>
          <p className="uppercase text-white hover:text-teal-500 active:text-teal-900">
            About Us
          </p>
          <p className="uppercase text-white hover:text-teal-500 active:text-teal-900">
            Payment
          </p>
        </div>
        <div>
          <button className="uppercase text-white bg-gray-800 p-4 rounded-2xl min-w-30 shadow-lg shadow-teal-300/50 hover:bg-gray-600 active:rounded-3xl">
            Sign Up
          </button>
        </div>
      </div>

      <div className="w-screen text-center">
        <div className="text-white text-7xl w-160 mx-auto mt-15 text-center">
          <h1>Artificial Intelligence</h1>
          <h1>Skill Gap Analyzer</h1>
        </div>
        <p className="text-white w-150 mx-auto mt-10 pr-20 pl-5 text-start">
          Not sure where to begin your journey? Ready for a career change? We’ll
          guide you every step of the way — from tailored roadmaps to in-demand
          skills used by industry professionals. Your future starts here.
        </p>
        <button className="mt-10 text-white bg-gray-800 p-6 rounded-3xl ring-teal-300/40 ring-2 hover:bg-gray-500 w-44  ml-140 active:rounded-4xl">
          {" "}
          Get Started
        </button>
        <hr className="border-white mt-15 w-240 mx-auto" />

        <h1 className="text-white text-6xl mt-10 decoration-1 border-b-2 w-max mx-auto">
          Our Team
        </h1>

        <div className="flex justify-center gap-10 mt-10">
          <div className="w-60 border-2 border-gray-600 rounded-2xl pb-4">
            <img
              src={Logo}
              className="w-50 h-50 mx-auto"
              alt="image of team member 1"
            />
            <p className="uppercase text-white border-b-white">
              Kong SereyMonyka
            </p>
            <p className="text-white mt-4">
              - A second year student at Monash University
            </p>
            <p className="text-white mt-4">
              - A second year student at Monash University
            </p>
            <p className="text-white mt-4 mb-4">
              - A second year student at Monash University
            </p>
            <div className="flex gap-3 justify-center">
              <img src={Linkedin} className="bg-white" />
              <img src={Instagram} className="bg-white" />
            </div>
          </div>
          <div className="w-60 border-2 border-gray-600 rounded-2xl pb-4">
            <img
              src={Logo}
              className=" w-50 h-50 mx-auto"
              alt="image of team member 2"
            />
            <p className="uppercase text-white">You Gat Chhiv</p>
            <p className="text-white mt-4">
              - A second year student at Monash University
            </p>
            <p className="text-white mt-4">
              - A second year student at Monash University
            </p>
            <p className="text-white mt-4 mb-4">
              - A second year student at Monash University
            </p>
            <div className="flex gap-3 justify-center">
              <img src={Linkedin} className="bg-white" />
              <img src={Instagram} className="bg-white" />
            </div>
          </div>
          <div className="w-60 border-2  border-gray-600 rounded-2xl pb-4">
            <img
              src={Logo}
              className="w-50 h-50 mx-auto"
              alt="image of team member 3"
            />
            <p className="uppercase text-white">Fiah Loraine Capili</p>
            <p className="text-white mt-4">
              - A second year student at Monash University
            </p>
            <p className="text-white mt-4">
              - A second year student at Monash University
            </p>
            <p className="text-white mt-4 mb-4">
              - A second year student at Monash University
            </p>
            <div className="flex gap-3 justify-center">
              <img src={Linkedin} className="bg-white" />
              <img src={Instagram} className="bg-white" />
            </div>
          </div>
        </div>
        <hr className="border-white border-1 mt-10 mb-10 w-240 mx-auto" />
        <div>
          <p className="text-white text-6xl">Product</p>
          <div className="flex justify-center gap-5 mt-10">
            <div className="border-white border-1 rounded-4xl h-120 w-60"></div>
            <div className="border-white border-1 rounded-4xl h-120 w-60"></div>
            <div className="border-white border-1 rounded-4xl h-120 w-60"></div>
          </div>
        </div>
        <hr className="border-white border-1 mt-10 mb-10 w-240 mx-auto" />
        <div>
          <p className="text-white text-6xl mb-20">Subscription</p>
          <div className="flex justify-center gap-2 mt-10">
            <div className="border-white border-1 rounded-4xl h-120 w-60"></div>
            <div className="border-white border-1 rounded-4xl h-120 w-60 -mt-10 ring-teal-600 ring-8"></div>
            <div className="border-white border-1 rounded-4xl h-120 w-60"></div>
          </div>
        </div>
        <hr className="border-white border-1 mt-10 mb-10 w-240 mx-auto" />
        <div className="mx-auto w-240">
          <p className="text-white text-6xl">Contact us :</p>
          <form name="Email" className="mt-10 flex flex-col align-middle">
            <input
              className="bg-white h-13 w-5/10 rounded-3xl mb-10 text-black pl-5 ml-5"
              type="email"
              name="email"
              placeholder="example@gmail.com"
            />
            <textarea
              placeholder="enter your descriptions here. . ."
              className="bg-white text-black p-5 ml-5 rounded-2xl h-30"
            >
              Description
            </textarea>
            <button
              type="button"
              className="p-4 rounded-3xl bg-teal-800 text-white active:rounded-4xl hover:bg-teal-500 w-30 h-15 mt-5 ml-5"
            >
              Sent me
            </button>
          </form>
        </div>
      </div>
      <div className="h-20 bg-gray-950 w-240 mx-auto">
        <hr className="border-white border-1 mt-10 mb-10 w-240 mx-auto" />
      </div>
    </div>
  );
}
