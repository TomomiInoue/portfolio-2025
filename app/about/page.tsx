"use client";
import { useRouter } from "next/navigation";
import { AboutComponent } from "../components/Section/About/About";

export default function About() {
  const router = useRouter();
  return (
    <>
    <AboutComponent />
      <button
        onClick={() => router.push("/")}
        className="bg-blue-500 text-white p-2 rounded-md"
      >
        Go to Home
      </button>
    </>
  );
}