import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function HomeLayout() {
  const navigation = useNavigation();
  const isPageLoading = navigation.state=== 'loading';

  return (
    <>
      <Navbar></Navbar>
      <section className="page">
        {isPageLoading ? <div className="loading"></div> : <Outlet></Outlet> }
      </section>
    </>
  );
}
