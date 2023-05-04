import "../styles/globals.css";
import useUser from "../hooks/useUser";

export default function Nextra({ Component, pageProps }) {
  if (process.env.NODE_ENV === "production") {
    const { isLoggedIn } = useUser();

    if (!isLoggedIn) {
      return <></>;
    }
  }

  return <Component {...pageProps} />;
}
