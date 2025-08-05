"use client";
import NavBar from "./components/NavBar";
import ShareBtn from "./components/shareBtn";

export default function Home() {

  return (
    <div
    className="flex"
    >
      <NavBar />
      <div className=" flex-1">
      </div>
      <ShareBtn />
    </div>
  );
}
