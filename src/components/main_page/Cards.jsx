import React from "react";

const Cards = ({ movie, no }) => {
  return (
    <>
      <div
        className={`text-white bg-black w-full flex p-20 justify-center items-center ${
          no % 2 == 0 ? "" : "flex-row-reverse"
        } `}
      >
        <div className="left w-1/2">
          <h1 className="text-5xl font-black text-center">{movie.heading}</h1>
          <h1 className="text-xl my-5 font-semibold text-center">
            {movie.description}
          </h1>
        </div>
        {/*    right div*/}
        <div className="right w-1/2">
          <div className="relative mx-auto border-gray-900 dark:border-gray-900 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
            <div className="rounded-xl overflow-hidden h-[140px] md:h-[300px]">
              <video
                autoPlay
                loop
                muted
                className=" h-[140px] md:h-[300px] w-full rounded-xl"
              >
                <source src={movie.video_url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="relative mx-auto bg-gray-900 dark:bg-gray-900 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
          <div className="relative mx-auto bg-gray-900 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[40px]"></div>
        </div>
      </div>
      <hr />
      {/* <div className="text-white bg-black w-full flex p-20 justify-center items-center flex-row-reverse">
                <div className="left w-1/2">
                    <h1 className="text-5xl font-black text-center">Enjoy on your TV 2</h1>
                    <h1 className="text-xl my-5 font-semibold text-center">Watch on smart TVs, PlayStation, Xbox,
                        Chromecast, Apple TV, Blu-ray players and more.</h1>
                </div>
                <div className="right w-1/2">
                    <div
                        className="relative mx-auto border-gray-900 dark:border-gray-900 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
                        <div className="rounded-xl overflow-hidden h-[140px] md:h-[300px]">
                            <video
                                autoPlay
                                loop
                                muted
                                className=" h-[140px] md:h-[300px] w-full rounded-xl"
                            >
                                <source
                                    src="http://media.w3.org/2010/05/sintel/trailer.mp4"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>

                        </div>
                    </div>
                    <div
                        className="relative mx-auto bg-gray-900 dark:bg-gray-900 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]"></div>
                    <div
                        className="relative mx-auto bg-gray-900 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[40px]"></div>

                </div>
            </div> */}
    </>
  );
};

export default Cards;
