import React from "react";
import { useAuth } from "../../utils/auth";

const ProfilePage = () => {
  const { user } = useAuth();
  return (
    <div className="text-white h-[40rem] flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">Profile Page</h1>
      <div className="my-10">
        <div className="w-24 h-24  bg-yellow-200 flex justify-center items-center text-black font-bold">
            {
                user ? "Me" : "Anonymous"
            }
        </div>
        <div className="w-24 h-24  bg-yellow-200 flex justify-center items-center text-black font-bold">
            {
                user ? "Me" : "Anonymous"
            }
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
