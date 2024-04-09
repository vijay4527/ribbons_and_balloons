"use client"
import Container from "react-bootstrap/Container";
import dynamic from "next/dynamic";
import initAOS from "@/components/initAOS";
import { useSession } from "next-auth/react";
import Head from "next/head";
import React, { useEffect, useState } from "react";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const options = {
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: true,
    dots: true,
    navText: [
      '<span className="arrow-prev-icon"><span className="arrow-top-part"></span><span className="arrow-bottom-part"></span></span>',
      '<span className="arrow-next-icon"><span className="arrow-top-part"></span><span className="arrow-bottom-part"></span></span>',
    ],
  };
const testimonial = () => {
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
      <div className="testimonialsWrap">
    <Container fluid>
      <div className="testimonialsBody">
        <div className="headerTitle">
          <p className=""> you said about us </p>
          <h2>Testimonials</h2>
          <div className="testimonialUnderLine">
            <div className="testimonialUnder">
              <div className="underLine"></div>
              <div className="shapLine"></div>
            </div>
          </div>
        </div>
        {isMounted && (
          <OwlCarousel className="owl-theme" {...options}>
            <div className="item">
              <div className="headerTitle">
                <h6>
                  An vis civibus albucius. Eu mea augue menandri consequat,
                  his graeco discere consequat ei. An autem nostrum
                  signiferumque mea, id ullum antiopam qui. Has eu timeam
                  utroque dissentiunt, eos te iriure verterem suis san.
                </h6>
                <h5>Roland Brown</h5>
                <div>Chef</div>
              </div>
            </div>
            <div className="item">
              <div className="headerTitle">
                <h6>
                  An vis civibus albucius. Eu mea augue menandri consequat,
                  his graeco discere consequat ei. An autem nostrum
                  signiferumque mea, id ullum antiopam qui. Has eu timeam
                  utroque dissentiunt, eos te iriure verterem suis san.
                </h6>
                <h5>Roland Brown</h5>
                <div>Chef</div>
              </div>
            </div>
            <div className="item">
              <div className="headerTitle">
                <h6>
                  An vis civibus albucius. Eu mea augue menandri consequat,
                  his graeco discere consequat ei. An autem nostrum
                  signiferumque mea, id ullum antiopam qui. Has eu timeam
                  utroque dissentiunt, eos te iriure verterem suis san.
                </h6>
                <h5>Roland Brown</h5>
                <div>Chef</div>
              </div>
            </div>
          </OwlCarousel>
        )}
      </div>
    </Container>
  </div> 
    </>
   )
}

export default testimonial