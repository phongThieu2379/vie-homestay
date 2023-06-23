import React from "react";
import { useSelector } from "react-redux";
import { RingLoader } from "react-spinners";

export default function Spinner() {
  let { isLoading } = useSelector((state) => state.spinnerSlice);

  return isLoading ? (
    <div
      style={{ background: "gray", opacity:"20%" }}
      className="h-screen w-screen fixed top-0 left-0 flex justify-center items-center z-20 "
    >
      <RingLoader size={100} speedMultiplier={0.5} color="white" />
    </div>
  ) : (
    <></>
  );
}
