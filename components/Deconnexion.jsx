import { useRouter } from "next/router";
import { useAuth } from "../context/authContext";

const Deconnexion = () => {
  const router = useRouter();
  const { logOut } = useAuth();

  const handlelogOut = async () => {
    try {
      await logOut();
      router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <button
        className="rounded-3xl mx-auto h-[40px] w-[30vw] lg:w-[10vw] text-yellow-600"
        type="submit"
        onClick={handlelogOut}
      >
        Disconnect
      </button>
    </div>
  );
};

export default Deconnexion;
