import "../styles/globals.css";
import Navbar from "../components/Navbar";
import { useRouter } from "next/router";
import { AuthContextProvider } from "../context/authContext";
import ProtectedPath from "../components/ProtectedPath";

const noAuthRequired = ["/", "/admin"];

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <AuthContextProvider>
      {noAuthRequired.includes(router.pathname) ? (
        <>
          <Navbar />
          <Component {...pageProps} />
        </>
      ) : (
        <ProtectedPath>
          <Navbar />
          <Component {...pageProps} />
        </ProtectedPath>
      )}
    </AuthContextProvider>
  );
}

export default MyApp;
