import React from "react";
import image from "../Assets/Biomedical-Eng-background1.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Abstract Biomedical Engineering"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-teal-100 font-bold nameFont leading-none lg:leading-snug home-name">
          Hello! I'm Ahmed
        </h1>
      </section>
    </main>
  );
}
