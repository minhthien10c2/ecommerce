import styled from "styled-components";

export const FooterContainer = styled.div`
  margin-top: 50px;

  background-color: #364146;
  @media (min-width: 1200px) {
    padding: 0px 150px;
  }
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AboutUs = styled.div`
  margin-top: 50px;

  display: flex;
  flex-direction: column;
  img {
    width: 168.96px;
    height: 30px;
  }
  .about-us {
    margin-top: 24px;
  }
  .blog {
    margin-top: 11px;
  }
  a {
    font-size: 14px;
    text-decoration: none;
    color: #ffffff;
  }
  ul {
    margin-top: 17px;
    padding: 0;
    display: flex;
  }
  li {
    margin-right: 12px;
    list-style-type: none;
  }
  .icon-facebook {
    color: blue;
  }
  .icon-instagram {
    background: transparent
      linear-gradient(
        180deg,
        #e09b3d 0%,
        #c74c4d 30%,
        #c21975 60%,
        #7024c4 100%
      )
      0% 0% no-repeat padding-box;
  }
  .icon-youtube {
    color: red;
  }
  .icon-twitter {
    color: #03a9f4;
  }
`;

export const FooterContent = styled.div`
  margin-top: 50px;
  h3 {
    color: white;
    font-size: 14px;
    text-transform: uppercase;
    margin-bottom: 22px;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    color: white;
    list-style-type: none;
    margin-bottom: 12px;
  }
  a {
    text-decoration: none;
    color: white;
  }
`;

export const Copyright = styled.div`
margin-top: 30px;
  hr{
    margin: 0px;
    color: #999999;
    opacity: 0.5;
  }
  .copyright-container{
    display:flex;
    justify-content: space-between;
  }
  p{
    padding 15px 0;
    margin: 0;
    color: #999999;
    float: left;
  }
  img{
    width: 40px;
    height: 24px;
    margin-left: 10px;
    margin-top: 15px;
    float: right;
  }
`;
