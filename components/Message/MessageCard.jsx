import { useEffect, useState } from "react";
import { getMessageData, deleteMessage } from "../../model/message";
import { toast, ToastContainer } from "react-nextjs-toast";

export default function MessageCard({ id }) {
  const [messageData, setMessageData] = useState();

  useEffect(() => {
    getMessageData(id).then((data) => setMessageData(data));
  }, [id]);

  const handleDelete = () => {
    deleteMessage(id);
    toast.notify("Message deleted", {
      duration: 5,
      theme: "dark",
      type: "success",
    });
    window.location.reload();
  };

  if (messageData) {
    return (
      <div className="cursor-pointer">
        <div className="w-[250px] md:w-[300px] h-[150px} text-center border border-[#FFD700]">
          <h2 className="p-2">{messageData.nickname}</h2>
          <h3 className="p-2">{messageData.topic}</h3>
          <p className="p-2">{messageData.message}</p>
          <button className="w-[80px] m-5" onClick={handleDelete}>
            Delete
          </button>
        </div>
        <ToastContainer />
      </div>
    );
  }
}
