/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast, ToastContainer } from "react-nextjs-toast";

export default function Contact() {
  const form = useRef();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mail, setMail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangePhoneNumber(e) {
    setPhoneNumber(e.target.value);
  }
  function handleChangeMail(e) {
    setMail(e.target.value);
  }
  function handleChangeSubject(e) {
    setSubject(e.target.value);
  }
  function handleChangeMessage(e) {
    setMessage(e.target.value);
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID,
      process.env.NEXT_PUBLIC_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    );

    toast.notify(
      "Thank you for your message, I will answer you as soon as possible",
      {
        duration: 5,
        theme: "dark",
        type: "success",
      }
    );

    setName("");
    setPhoneNumber("");
    setMail("");
    setSubject("");
    setMessage("");
  };

  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase text-[2rem] tracking-widest">Contact</p>
        <h3 className="py-4 text-yellow-600 text-[1.5rem]">Get In Touch</h3>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-yellow-600 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/assets/images/contactpc.jpg"
                  alt="Woman in front of a pc"
                />
              </div>
              <div>
                <h3 className="py-2">Christelle Rouzé</h3>
                <p>Full-Stack Developer</p>
                <p className="py-4">
                  I am available for an internship of at least 4 months or for
                  work and study contract. <br /> Contact me and let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-around pt-10">
                  <a
                    href="https://www.linkedin.com/in/christelle-rouz%C3%A9/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-yellow-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedin />
                    </div>
                  </a>
                  <a
                    href="https://github.com/ChrichriR"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-yellow-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* right */}

          <div className="col-span-3 w-full h-auto shadow-lg shadow-yellow-600 rounded-xl lg:p-4">
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="uppercase text-sm py-2">
                      Name
                    </label>
                    <input
                      onChange={handleChangeName}
                      value={name}
                      name="name"
                      id="name"
                      required
                      className="border-2 rounded-lg p-3 flex border-[#FFD700]"
                      type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="phoneNumber"
                      className="uppercase text-sm py-2"
                    >
                      Phone Number
                    </label>
                    <input
                      onChange={handleChangePhoneNumber}
                      value={phoneNumber}
                      name="phoneNumber"
                      id="phoneNumber"
                      className="border-2 rounded-lg p-3 flex border-[#FFD700]"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="mail" className="uppercase text-sm py-2">
                    Mail
                  </label>
                  <input
                    onChange={handleChangeMail}
                    value={mail}
                    name="mail"
                    id="mail"
                    required
                    className="border-2 rounded-lg p-3 flex border-[#FFD700]"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="subject" className="uppercase text-sm py-2">
                    Subject
                  </label>
                  <input
                    onChange={handleChangeSubject}
                    value={subject}
                    name="subject"
                    id="subject"
                    required
                    className="border-2 rounded-lg p-3 flex border-[#FFD700]"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    onChange={handleChangeMessage}
                    value={message}
                    name="message"
                    id="message"
                    required
                    className="border-2 rounded-lg p-3 border-[#FFD700]"
                    rows={10}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  onSubmit={sendEmail}
                  className="w-full mt-2 p-4 bg-[#FFD700]"
                >
                  Send Message
                </button>
                <ToastContainer />
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-yellow-600 mt-6 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-yellow-600" size={30} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
