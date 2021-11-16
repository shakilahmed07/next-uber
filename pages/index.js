import Head from "next/head";
import Map from "../components/Map";
import Header from "../components/Header";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Uber</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* body */}
      <div className="flex flex-col h-screen md:flex-row-reverse">
        <Map />
        <Header />
      </div>
    </div>
  );
}
