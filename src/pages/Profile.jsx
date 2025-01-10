import React, { useEffect } from "react";
import { useStateContext } from "../context";
import { usePrivy } from "@privy-io/react-auth";

const Profile = () => {
  const { currentUser, fetchUserByEmail } = useStateContext();
  const { user } = usePrivy();

  useEffect(() => {
    if (!currentUser) {
      fetchUserByEmail(user?.email?.address);
    }
  }, [currentUser, fetchUserByEmail]);

  if (!currentUser) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-lg text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="mx-auto mt-16 max-w-lg rounded-lg bg-[#1c1c24] p-6 shadow-lg">
      <div className="flex flex-col items-center">
        <div className="font-Inter text-2xl font-semibold text-green-300">O N C O F O R G E</div>
        <h1 className="mb-2 mt-3 text-xl font-semibold text-white">User Profile</h1>
        <div className="mt-4 w-full">
          <p className="mb-1 text-sm text-gray-400">Email:</p>
          <p className="mb-4 text-lg font-semibold text-white">
            {currentUser.createdBy}
          </p>

          <p className="mb-1 text-sm text-gray-400">Username:</p>
          <p className="mb-4 text-lg font-semibold text-white">
            {currentUser.username}
          </p>

          <p className="mb-1 text-sm text-gray-400">Age:</p>
          <p className="mb-4 text-lg font-semibold text-white">
            {currentUser.age}
          </p>

          <p className="mb-1 text-sm text-gray-400">Location:</p>
          <p className="text-lg font-semibold text-white">
            {currentUser.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;