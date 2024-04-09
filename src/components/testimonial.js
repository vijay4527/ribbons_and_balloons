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
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"></script>    </Head>
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