import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "../components/Breadcrumb";
import { MainNavigation } from "../components/Navigation";

const Home: NextPage = () => {
  return (
    <div>
      <MainNavigation />
      <Breadcrumb />
    </div>
  );
};

export default Home;
