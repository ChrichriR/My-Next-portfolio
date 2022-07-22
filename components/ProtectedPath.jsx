import { useAuth } from "../context/authContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function ProtectedPath({ children }) {
  const { admin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!admin) {
      router.push("/");
    }
  }, [router, admin]);

  return <>{admin ? children : null}</>;
}
