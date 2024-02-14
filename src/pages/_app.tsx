// import { NextComponentType, NextPageContext } from 'next'

import { DefaultSeo } from "next-seo";

import "tailwindcss/tailwind.css";
import "../styles/app.css";

import { defaultSEO } from "../../next-seo.config";
import { WishlistProvider } from "../context/wishlist";
import Layout from "../components/Layout";

import type { AppProps } from "next/app"

interface CustomAppProps {
  Component: AppProps["Component"] & {
    auth: {
      role: string
    }
  }
  pageProps: AppProps["pageProps"]
}

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <WishlistProvider>
    <Layout>
      <DefaultSeo {...defaultSEO} />
       <AnyComponent {...pageProps} />
       </Layout>
      </WishlistProvider>
  )

}




export default MyApp;


