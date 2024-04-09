"use client"
import Container from "react-bootstrap/Container";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useSession } from "next-auth/react";
import initAOS from "@/components/initAOS";
import Head from "next/head";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Prociono } from "next/font/google";
const optionsMedia = {
    items: 5,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: [
      '<span className="arrow-prev-icon"><span className="arrow-top-part"></span><span className="arrow-bottom-part"></span></span>',
      '<span className="arrow-next-icon"><span className="arrow-top-part"></span><span className="arrow-bottom-part"></span></span>',
    ],
  };
const mediaCollaborators = () => {
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
    crossorigin="anonymous"></script> 
       </Head>
    <div className="mediaCollabWrap">
        <Container fluid>
          <div className="testimonialsBody">
            <div className="headerTitle">
              <h2>MEDIA COLLABORATIONS</h2>
              <div className="testimonialUnderLine">
                <div className="testimonialUnder">
                  <div className="underLine"></div>
                  <div className="shapLine"></div>
                </div>
              </div>
            </div>
            {isMounted && (
              <OwlCarousel className="owl-theme" {...optionsMedia}>
                <div className="item">
                  <div className="MediaContentImg">
                    <img
                      src="https://fama.b-cdn.net/RnB/media2.png"
                      alt="No image found"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="MediaContentImg">
                    <img
                      src="https://fama.b-cdn.net/RnB/media1.png"
                      alt="No image found"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="MediaContentImg">
                    <img
                      src="https://fama.b-cdn.net/RnB/media3.png"
                      alt="No image found"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="MediaContentImg">
                    <img
                      src="https://fama.b-cdn.net/RnB/media4.png"
                      alt="mediaImage"
                    />
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

export default mediaCollaborators