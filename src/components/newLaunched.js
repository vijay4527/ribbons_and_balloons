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
        <meta charset="utf-8"></meta>
        {/* <title>Online Cake Delivery in Mumbai, Pune and Mangalore</title> */}
        <meta
          name="description"
          content="Online Cakes Shop in Mumbai, Pune and Mangalore . Online Cakes Delivery . Buy,Order &amp; Send Birthday, Wedding Anniversary &amp; Chocolate Cakes anywhere in Mumbai from best Cake Shop Ribbons &amp; Balloons."
        ></meta>
        <meta
          name="keywords"
          content="Ribbons and Balloons, Buy Cakes Online, Online Cake delivery, Cakes Mumbai, Cakes to Mumbai, order cakes online, cake delivery in mumbai, Send Cakes to Mumbai, Mumbai Cake Shop, Online Cakes to Mumbai, Cakes Mumbai, Cake delivery to Mumbai, Chocolate Cakes Mumbai, Heart Shape Cakes, Eggless Cakes, Occasion Cakes, birthday cakes online delivery, Send Birthday Cakes, Congratulations Cakes, Missing You Cakes, Baby and Kids Cakes, Anniversary Cakes Online, Thank You Cakes, House Warming Cakes, Wedding Cakes Mumbai, customised cakes in mumbai, cup cakes mumbai, Online Cakes Shop Mumbai, valentine special cakes mumbai, plum cakes mumbai, fresh fruit cakes online"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
        ></meta>
        <link
          rel="icon"
          href="https://ribbonsandballoons.com/frontassets/images/fav.png"
          type="image/x-icon"
        />
        <meta
          name="google-site-verification"
          content="hj44_Ud2995b4jkL3My7hTX96_sALd3yQ7tlf0El0IE"
        ></meta>
        <meta
          name="p:domain_verify"
          content="e35c0804c87b42f9187c00fa30ff64f9"
        ></meta>
        <meta
          name="facebook-domain-verification"
          content="1cpqqtudq8imtqkiwxpq0vd20x3b69"
        ></meta>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha2/dist/js/bootstrap.bundle.min.js"></script>

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        ></link>
        <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
      </Head>
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
