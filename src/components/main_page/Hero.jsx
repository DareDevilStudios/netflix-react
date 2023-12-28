import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import Faq from "./Faq";
import { useAuth } from "../../utils/auth.jsx";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../Redux/slices/counterSlice";
import { Tooltip } from "flowbite-react";

export const Hero = () => {
  const { user, loginUser } = useAuth();
  console.log(user, loginUser);
  const [MovieData, setMovieData] = useState([]);
  const [Faqs, setFaqs] = useState([]);
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://6587d02290fa4d3dabf92599.mockapi.io/movielist")
      .then((response) => response.json())
      .then((data) => {
        setMovieData(data);
        console.log(data);
      });

    fetch("https://6587d02290fa4d3dabf92599.mockapi.io/features")
      .then((response) => response.json())
      .then((data) => {
        setFaqs(data);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col justify-center items-center h-[42rem] text-white gap-4">
        <h3 className="text-2xl">Welcome Back to Netflix {counter}.0</h3>
        <h1 className="text-6xl font-black text-center">
          Unlimited movies, TV shows and more
        </h1>

        <div class="mt-12 relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[314px] md:max-w-[512px]">
          <div className="rounded-xl overflow-hidden h-[140px] md:h-[350px]">
            <Tooltip content="Click here and see the magic">
              <video
                onClick={() => {
                  dispatch(increment());
                }}  
                autoPlay
                loop
                muted
                className=" h-[140px] md:h-[300px] w-full rounded-xl"
              >
                <source
                  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </Tooltip>
          </div>
        </div>
        <div class="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
          <div class="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
        </div>
      </div>
      <hr />
      {MovieData?.map((movie, index) => (
        <Cards movie={movie} no={index} />
      ))}
      <div className="">
        <h1 className="text-4xl font-bold text-center text-white mt-12">
          Frequently Asked Questions
        </h1>
        <div className="p-32">
          {Faqs?.map((faq, index, key) => (
            <Faq faq={faq} nos={index} key={key} />
          ))}
        </div>
      </div>
    </>
  );
};
