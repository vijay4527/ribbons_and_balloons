"use client"
import dynamic from "next/dynamic";
import initAOS from "@/components/initAOS";
import { useSession } from "next-auth/react";
import Container from "react-bootstrap/Container";
import Head from "next/head";
import React, { useEffect, useState } from "react";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const optionsNewLunched = {
  items: 4,
  loop: true,
  margin: 10,
  autoplay: false,
  nav: false,
  dots: false,
  navText: [
    '<span className="arrow-prev-icon"><span className="arrow-top-part"></span><span className="arrow-bottom-part"></span></span>',
    '<span className="arrow-next-icon"><span className="arrow-top-part"></span><span className="arrow-bottom-part"></span></span>',
  ],
};

const newLaunched = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { data:session, status } = useSession();
  useEffect(() => {
    if(typeof window !== "undefined"){
      initAOS();
      setIsMounted(true);
    }
  
  }, [session,isMounted]);

  return (
    <>
    <Head>
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"></script>    </Head>
    <div className="newLaunchWrap">
    <div className="lte-background-overlay"></div>
    <Container fluid>
      <div className="headerTitle">
        <h2>New Launches</h2>
        <div className="testimonialUnderLine">
          <div className="testimonialUnder">
            <div className="underLine"></div>
            <div className="shapLine"></div>
          </div>
        </div>
        {isMounted && (
          <OwlCarousel className="owl-theme" {...optionsNewLunched}>
            <div className="item">
              <div className="itemNewLunch">
                <div className="itemNewLunchImg">
                  <img
                    src="https://fama.b-cdn.net/RnB/Ln1.jpg"
                    alt="No image found"
                  />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="itemNewLunch">
                <div className="itemNewLunchImg">
                  <img
                    src="https://fama.b-cdn.net/RnB/Ln2.jpg"
                    alt="No image found"
                  />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="itemNewLunch">
                <div className="itemNewLunchImg">
                  <img
                    src="https://fama.b-cdn.net/RnB/Ln3.jpg"
                    alt="No image found"
                  />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="itemNewLunch">
                <div className="itemNewLunchImg">
                  <img
                    src="https://fama.b-cdn.net/RnB/Ln4.jpg"
                    alt="No image found"
                  />
                </div>
              </div>
            </div>
          </OwlCarousel>
        )}
      </div>
    </Container>
  </div>
    </>
    
  );
};

export default newLaunched;
