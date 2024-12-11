"use client";

import Form from "./form";

export default function Contact() {
  return (
    <div
      className="z-10 flex min-h-screen grow flex-col items-center justify-center gap-2 lg:gap-10"
      id="contact"
    >
      <h2 className="text-3xl lg:text-5xl">Contact</h2>
      <div className="flex max-w-[1200px] flex-col items-center justify-center gap-4 lg:flex-row lg:items-start lg:gap-10">
        <Form />
      </div>
    </div>
  );
}
