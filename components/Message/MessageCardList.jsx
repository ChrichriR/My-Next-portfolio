/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import MessageCard from "./MessageCard";
import { getMessageList } from "../../model/message";
import style from "./Message.module.css";

export default function MessageCardList() {
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    getMessageList().then(setMessageList);
  }, []);

  return (
    <>
      {!messageList && (
        <p className="text-center pt-20 text-2xl font-bold">
          Its seems that I don't receive any message yet
        </p>
      )}
      <div className={style.box}>
        <div className={`${style.box} + ${"grid lg:grid-cols-4 justify-items-center gap-y-10 md:px-12 mb-5 mt-12 text-center"}`}>
          {messageList
            ? messageList.map((m) => <MessageCard key={m.id} id={m.id} />)
            : null}
        </div>
      </div>
    </>
  );
}
