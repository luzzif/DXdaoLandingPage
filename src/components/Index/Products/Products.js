import React, { useEffect, useState, Fragment } from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";
import Swapr from "../../../images/landing/svg/Logo-Product_Swapr.svg";
import Omen from "../../../images/landing/svg/Logo-Product_Omen.svg";
import Carrot from "../../../images/landing/svg/Carrot.svg";
import DXgov from "../../../images/landing/svg/DXgov.svg";
import Aqua from "../../../images/Logo-AquaRound.svg";
import MobileConnector from "./../../../images/Products-Conector-Mobile@2x.png";
import ProductsGradientDesktop from "./../../../images/ProductsGradientDesktop.png";
import { breakpoints } from "../../../utils/theme";

const Products = () => {
  let [viewportWidth, setViewportWidth] = useState(null);
  let [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    if (window) {
      window.addEventListener("resize", (e) => {
        setViewportWidth(e.target.innerWidth);
      });
    }
  }, []);

  useEffect(() => {
    setIsMobile(viewportWidth < 992);
  }, [viewportWidth]);

  const products = [
    {
      img: Swapr,
      title: "Swapr",
      positionImg: "center",
      positionText: "center",
      description: (
        <span>
          A governance-enabled
          <br />
          automated-market maker with adjustable fees.
        </span>
      ),
      primaryButton: {
        size: "small",
        type: "secondary",
        label: "USE SWAPR",
        to: "https://swapr.eth.link/",
      },
      secondaryButton: {
        size: "small",
        type: "outline",
        label: "LEARN MORE",
        to: "https://dxdocs.eth.link/docs/Products/swapr/",
      },
    },
    {
      img: Omen,
      title: "Omen",
      positionImg: "center",
      positionText: "center",
      description:
        "A fully decenetralized prediction market platform built on top of the Gnosis conditional token framework.",
      primaryButton: {
        size: "small",
        type: "secondary",
        label: "USE OMEN",
        to: "https://omen.eth.link/",
      },
      secondaryButton: {
        size: "small",
        type: "outline",
        label: "LEARN MORE",
        to: "https://dxdocs.eth.link/docs/Products/omen/",
      },
    },
    {
      img: Aqua,
      title: "Aqua",
      positionImg: "center",
      positionText: "center",
      description:
        "Aqua is the place to conduct transparent token auctions with a fair price discovery.",
      primaryButton: {
        size: "small",
        type: "secondary",
        label: "COMING SOON",
        disabled: true,
        to: "https://Aqua.eth.link/",
      },
      secondaryButton: {
        size: "small",
        type: "outline",
        label: "LEARN MORE",
        to: "https://dxdocs.eth.link/docs/Products/aqua/",
      },
    },
    {
      img: Carrot,
      title: "Carrot",
      positionImg: "center",
      positionText: "center",
      description:
        "Carrot gives users permissionless access to create community-driven programmable incentives that reward them when set criterias are met.",
      primaryButton: {
        size: "small",
        type: "secondary",
        label: "COMING SOON",
        disabled: true,
        to: "https://carrot.eth.link",
      },
      secondaryButton: {
        size: "small",
        type: "outline",
        label: "LEARN MORE",
        to: "https://dxdocs.eth.link/docs/Products/carrot/",
      },
    },
    ,
    {
      img: DXgov,
      title: "DXgov",
      positionImg: "center",
      positionText: "center",
      description: (
        <span>
          Governance 2.0.
          <br />A platform made for DAOs by a DAO.
          <br />
          Reputation, token voting and holographic consensus.
        </span>
      ),
      primaryButton: {
        size: "small",
        type: "secondary",
        label: "COMING SOON",
        disabled: true,
        to: "https://dxvote.eth.link/",
      },
      secondaryButton: {
        size: "small",
        type: "outline",
        label: "LEARN MORE",
        to: "https://dxdocs.eth.link/docs/Governance/DXvote",
      },
    },
  ];

  return (
    <StyledProductsWrapper>
      <section className="products-title" data-aos="fade-up">
        <span className="title-text">DXDAO PRODUCTS</span>
      </section>
      <section className="products-wrapper main-width">
        {products.map((product, i) => {
          return (
            <Fragment key={i}>
              <ProductCard
                className={`product-` + (i + 1)}
                key={`product-` + i}
                img={product.img}
                title={product.title}
                positionImg={product.positionImg}
                positionText={product.positionText}
                description={product.description}
                primaryButton={product.primaryButton}
                secondaryButton={product.secondaryButton}
                aosDelay={isMobile ? 0 : i * 400}
              />
              <div
                className={`mobile-separator mobile-separator-${i + 1}`}
                data-aos={"fade-up"}
              />
            </Fragment>
          );
        })}
      </section>
      <div className="gradient-background" data-aos="fade" />
    </StyledProductsWrapper>
  );
};

const StyledProductsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  .mobile-separator {
    display: none;
    @media screen and (max-width: ${breakpoints.md}) {
      display: unset;
      height: 180px;
      width: 100%;
      max-width: 560px;
      background-size: 100%;
      background-position: center;
      background-repeat: no-repeat;
      background-image: url(${MobileConnector});
      position: relative;
      bottom: 56px;
    }
    &.mobile-separator-6 {
      display: none !important;
    }
    &.mobile-separator-1 {
      transform: scaleY(1) !important;
    }
    &.mobile-separator-2 {
      transform: scaleY(-1) !important;
    }
    &.mobile-separator-3 {
      transform: scaleY(1) !important;
    }
    &.mobile-separator-4 {
      transform: scaleY(-1) !important;
    }
    &.mobile-separator-5 {
      transform: scaleY(1) !important;
    }
  }
  .product-2,
  .product-3,
  .product-4,
  .product-5,
  .product-6 {
    @media screen and (max-width: ${breakpoints.md}) {
      margin-top: -128px;
    }
  }
  .products-title,
  .products-wrapper {
    position: relative;
    z-index: 2;
  }
  .products-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;
    margin: 0px 0px 45px;
    .title-text {
      font-family: MavenPro;
      font-weight: 500;
      font-size: 22px;
      line-height: 170%;
      letter-spacing: 0.44em;
      text-transform: uppercase;
      margin: 0 0px 24px;
      text-align: center;
      background: linear-gradient(
        180deg,
        #e5e5e5 47.59%,
        rgba(229, 229, 229, 0.74) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      @media screen and (max-width: ${breakpoints.md}) {
        font-size: 18px;
      }
    }
  }
  .products-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 1166px;
    padding: 0;
    gap: 24px;
    @media screen and (max-width: ${breakpoints.l}) {
      width: 100%;
      justify-content: center;
      padding: 0 24px;
      gap: 0;
    }
  }
  .gradient-background {
    top: 0;
    width: 1338px;
    height: 1338px;
    background-image: url("${ProductsGradientDesktop}");
    background-position: center;
    z-index: 1;
    position: absolute;
    top: -310px;
    /* transform: rotate(45deg); */
    /* background: rgba(61, 90, 254, 0.59); */
    /* filter: blur(700px); */
    /* opacity: .4; */
    /* box-shadow: 0px 0px 250px 0px rgba(61, 90, 254, 0.59); */
    @media screen and (max-width: ${breakpoints.md}) {
      display: none;
    }
  }
`;

export default Products;
