// Home.jsx
import { get } from 'lodash'
import React from "react";
import  Header  from '../components/Header';
import NavbarIndex from "../components/NavbarIndex";
import Footer from "../components/Footer";
import SlidersMessage from '../components/SlidersMessage'
import SecondCallToAction from '../components/SecondCallToAction'
import Service from '../components/Service';
import Proyectos from '../components/Proyectos'
import BanerLogos from '../components/BanerLogos';
import Slider from '../components/Slider'

const Home = ({ deviceType }) => {

  //const { loading: bannerLoading, error: bannerError, data: bannerList } = useQuery(GET_BANNER)

  React.useEffect(() => {
    document.body.classList.add("index-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  
  return (
    <>
      <Header />
      <div className="flex flex-col items-center w-full mt-[88px]">
      <SlidersMessage />
      <Service/>
      <Proyectos/>
      <Slider/>
      <BanerLogos/>
      <SecondCallToAction />
      </div>
      <Footer />
    </>
  );
}

export default Home;
