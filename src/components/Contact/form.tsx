import contact from "@/lib/actions/contact";
import { FormEvent, useState } from "react";
import { toast } from "react-toastify";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name) {
      return toast.error("Name is required.");
    }
    if (!email || !email.includes("@")) {
      return toast.error("Valid email is required.");
    }
    if (!message) {
      return toast.error("Message is required. Thank you!");
    }
    const response = await contact({ name, email, message });
    if (response === "success") {
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message sent!");
    } else {
      toast.error("Message failed to send. Please try again later.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-[700px] flex-col gap-4 text-black"
    >
      <div className="flex flex-row gap-2">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="rounded-md border-2 border-gray-300 p-2"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="rounded-md border-2 border-gray-300 p-2"
        />
      </div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
        className="rounded-md border-2 border-gray-300 p-2"
      />
      <button
        type="submit"
        className="rounded-md border-2 border-white bg-black p-2 text-white"
      >
        Send
      </button>
    </form>
  );
}
