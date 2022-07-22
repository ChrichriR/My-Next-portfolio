import AdminLayout from "../../../components/AdminLayout";
import Deconnexion from "../../../components/Deconnexion";
import MessageCardList from "../../../components/Message/MessageCardList";

export default function MessageListAdmin() {
  return (
    <AdminLayout pageTitle={"Manage my messages"}>
      <h1 className="text-yellow-600 pt-20 text-center">Admin Dashboard</h1>
      <div className="mt-20 text-center">
      <Deconnexion />
      </div>
      <MessageCardList />
    </AdminLayout>
  );
}
