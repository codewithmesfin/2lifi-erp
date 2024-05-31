import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Layout from "@/components/layout/layout";
import { useEffect } from "react";


export default function App({ Component, pageProps }: AppProps) {
useEffect(() => {
    AOS.init({
      duration: 1500,
      once: false,
    })
  }, [])

  return (
    <Layout>
      <Component {...pageProps} />
      <ToastContainer />
    </Layout>
  );
}