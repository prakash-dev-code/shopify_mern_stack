import Layout from "@/components/layout";
import { AuthProvider } from "@/context/authContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>MERNCart - Online Shopping</title>
      </Head>
      <AuthProvider>
        <Layout>
          {" "}
          <Component {...pageProps} />
        </Layout>
      </AuthProvider>
    </>
  );
}
