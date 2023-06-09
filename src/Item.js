import React from 'react'
import styled from "styled-components";

export default styled.div`

@import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Bebas+Neue&family=Gentium+Book+Plus:wght@700&family=Geologica:wght@300&family=Josefin+Sans:wght@400;500&family=Kanit:wght@800&family=Karla&family=Mukta:wght@700&family=PT+Sans:wght@700&family=Raleway:ital,wght@0,300;1,400&display=swap');
font-family: "Segoe UI", "SegoeUI", "Helvetica Neue", "Helvetica", "Arial", "sans-serif";
  height: 450px;
  width: 90%;
  text-align:left;
  padding: 20px; 
  border-left:20px solid rgb(55, 200, 55);
  background-color: rgba(79, 125, 213, 0.67);
  color: white;
  margin: 0 50px;
  font-size: 1.3rem;
  font-weight:300;
  border-radius:10px;
  margin-bottom:-50px;
  box-shadow: 16px 16px 16px rgba(0, 0, 0, 0.9);
  overflow:scroll;


  @media (max-width: 1650px) {
    font-size:1rem;
    height:360px;
  }
  @media (max-width: 1270px) {
    font-size:0.9rem;
    height:310px;
  }
`;