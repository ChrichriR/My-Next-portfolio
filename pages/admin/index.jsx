import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout";
import { useAuth } from "../../context/authContext";

export default function Dashboard() {
  const { signIn, admin } = useAuth();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signIn(email, password);
      router.push("/admin/message");
    } catch (err) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (admin) {
      router.push("/admin/message");
    }
  }, [router, admin]);

  return (
    <AdminLayout pageTitle={"Admin Dashboard"}>
      <h1 className="text-yellow-600 pt-20 text-center">Admin Dashboard</h1>
      <div className="text-center">
        <h2 className="text-[#fffb16] mt-12">Connexion</h2>
        <form
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col w-[50%] lg:w-[25vw] mx-auto"
        >
          <label htmlFor="email"></label>
          <input
            className="rounded-xl text-center"
            type="email"
            name="email"
            id="email"
            placeholder="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password"></label>
          <input
            className="mt-6 rounded-xl text-center"
            type="password"
            name="password"
            id="password"
            placeholder="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p>{error}</p>}

          <button
            className="rounded-3xl mx-auto h-[40px] w-[30vw] lg:w-[10vw] mt-20 text-yellow-600"
            type="submit"
            onClick={handleSubmit}
          >
            Connexion
          </button>
        </form>
      </div>
    </AdminLayout>
  );
}
