import { child, ref, remove, set, update, query, get } from "firebase/database";
import { db } from "../config/firebaseConfig";
import uniqid from "uniqid";

export async function createMessage(messageData) {
  const id = uniqid();
  await set(ref(db, `message/${id}`), {
    ...messageData,
    id,
  }).catch((err) => {
    console.error(err);
  });
  return id;
}

export async function getMessageData(messageId) {
  try {
    const snapshot = await get(child(ref(db), `/message/${messageId}`));
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
    }
  } catch (error) {
    console.error(error);
  }
}

export async function getMessageList() {
  try {
    const messageRef = ref(db, `message/`);
    const snapshot = await get(query(messageRef));
    if (snapshot.exists()) {
      const showMessage = Object.keys(snapshot.val()).map(
        (message) => snapshot.val()[message]
      );
      return showMessage.reverse();
    }
  } catch (error) {
    console.error(error);
  }
}
export async function deleteMessage(id) {
  const deleteRef = ref(db, `message/${id}`);
  remove(deleteRef);
}

export async function updateMessage(id, data) {
  update(ref(db, `message/${id}`), {
    ...data,
  });
}
