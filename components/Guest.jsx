/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";
import { createMessage } from "../model/message";

export default function Guest() {
  const [messageData, setMessageData] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createMessage(messageData);
    setMessageData("");
  };

  return (
    <div id="guest" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="uppercase text-[2rem] tracking-widest">Guest Book</p>
        <h3 className="py-4 text-yellow-600 text-[1.5rem]">
          Let me know your mind
        </h3>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 w-full h-auto shadow-lg shadow-yellow-600 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="flex flex-col py-2 items-center">
                  <label htmlFor="nickname" className="uppercase text-sm py-2">
                    Name or Nickname
                  </label>
                  <input
                    name="nickname"
                    id="nickname"
                    required
                    value={messageData.nickname || ""}
                    onChange={(e) =>
                      setMessageData({
                        ...messageData,
                        nickname: e.target.value,
                      })
                    }
                    className="border-2 rounded-lg p-3 flex border-[#FFD700]"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="topic" className="uppercase text-sm py-2">
                    Topic
                  </label>
                  <input
                    name="topic"
                    id="topic"
                    required
                    value={messageData.topic || ""}
                    onChange={(e) =>
                      setMessageData({
                        ...messageData,
                        topic: e.target.value,
                      })
                    }
                    className="border-2 rounded-lg p-3 flex border-[#FFD700]"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    value={messageData.message || ""}
                    onChange={(e) =>
                      setMessageData({
                        ...messageData,
                        message: e.target.value,
                      })
                    }
                    className="border-2 rounded-lg p-3 border-[#FFD700]"
                    rows={10}
                  />
                </div>
                <button
                  onClick={handleSubmit}
                  className="w-full mt-2 p-4 bg-[#FFD700]"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-lg shadow-yellow-600 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="/assets/images/guestbook.jpg"
                  alt="guest book with pencil"
                />
              </div>
              <p className="pt-20 text-center">
                Whether it is to give some advice, your opinion or why not, a
                compliment <br /> Please feel free to share your thoughts with
                me.
              </p>
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
