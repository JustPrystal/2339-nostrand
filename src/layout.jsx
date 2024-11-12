import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SpecialsBanner from "./components/SpecialsBanner";
export default function GlobalLayout() {
  return (
    <>
      <Header />
      <SpecialsBanner/>
      <Outlet />
      <Footer />
    </>
  )
}