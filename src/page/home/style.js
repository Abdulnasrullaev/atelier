import styled from "styled-components";
import background from '../../assest/background.jpg'

export const Navbar = styled.div`
  width: 100%;
  display: flex;
  background: #181511;

  .logo {
    color: #FFAE2B;
    margin: 26px 100px;
    font-size: 22px;
  }

  nav {
    display: flex;
    margin: 30px -4px;

    li {
      margin: 0px 20px;
      list-style: none;

      a {
        text-transform: uppercase;
        text-decoration: none;
        color: white;
      }

      a:focus {
        color: #FFAE2B;
      }

      a:hover {
        color: #FFAE2B;
      }
    }
  }

  .template {
    color: #FFAE2B;
    background: transparent;
    border: 2px solid #FFAE2B;
    margin: auto;
    padding: 10px 12px;
    text-transform: uppercase;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
    .logo {
      margin: 25px 20px;
    }

    nav {
      width: fit-content;
      margin: 20px 10px;

      li {
        margin: 8px;

        a {
          font-size: 14px;
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    .logo {
      margin: 26px;
      width: fit-content;
    }

    nav {
      margin: 34px 4px;
      width: fit-content;

      li {
        font-size: 13px;
        margin: 0px 10px;

        a {
          font-size: 13px;
        }
      }
    }

    .template {
      padding: 4px 10px;
      font-size: 12px;
      width: fit-content;
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    display: grid;
    .logo {
      margin: 13px auto;
      width: fit-content;
    }

    nav {
      display: grid;
      margin: 10px auto;
      width: fit-content;

      li {
        margin: 10px;

        a {
          font-size: 13px;
        }
      }
    }

    .template {
      padding: 4px 10px;
      font-size: 12px;
      margin: 14px auto;
      width: fit-content;
    }
  }

`;

export const Homes = styled.div`
  width: 100%;
  background: url("${background}");
  text-align: center;

  .title {
    color: white;
    position: relative;
    top: 50px;
    padding: 30px 0;
    background: transparent;
  }

  .title2 {
    background: transparent;
    position: relative;
    top: 80px;
    margin: auto;
    color: white;
    font-size: 70px;
    width: 70%;

  }

  .layout {
    padding: 10px 14px;
    text-transform: uppercase;
    border: none;
    background-color: #FFAE2B;
    border-radius: 2px;
    margin: 120px auto;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    background-repeat: no-repeat;
    font-size: 56px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    background-repeat: no-repeat;
    .title {
      width: fit-content;
      margin: auto;
    }

    .title2 {
      font-size: 40px;
    }
  }
`;

export const Footer = styled.div`
  width: 100%;
  color: white;
  margin: 60px auto;
  justify-content: center;

  .subscribe {
    width: 50%;
    color: darkorange;
    font-size: 60px;
    text-align: center;
    margin: auto;
  }

  .lorem {
    font-size: 15px;
    margin: 20px 0;
    text-align: center;
  }

  input {
    width: 34%;
    padding: 12px 0;
    margin: 0px 420px;
  }

  #text {
    background-color: darkorange;
    border: none;
  }

  #email {
    border: 1px solid #4B4136;
    box-sizing: border-box;
  }

  .link-wrapper {
    margin: 30px auto;
    width: 20%;
    display: flex;
    justify-content: space-between;

    .border {
      margin: 10px auto;
      padding: 3px 6px;
      width: 48px;
      height: 48px;
      align-items: center;
      border: 1px solid #4B4136;
      box-sizing: border-box;

      .facebook {
        margin: 4px;
      }

      .book {
        width: 25px;
      }

    }
  }
  .hr{
    width: 95%;
    margin: 20px auto;
    height: 1px;
    background: #4B4136;
  }
   .texts{
     display: flex;
     width: 90%;
     margin: auto;
     justify-content: space-between;
  .license{
    text-transform: capitalize;
    color: #FFAE2B;

  }
   }
  
  @media screen and (max-width: 768px) {
    width: 100%;
    .subscribe{
      font-size: 52px;
    }
    .lorem{
      width: fit-content;
      margin: 10px auto;
    }
    input{
      margin: auto;
      width: fit-content;
    }
  }
  @media screen and (max-width: 480px) {
    width: 100%;
    justify-content: center;
    align-items: center;
    .subscribe{
      font-size: 40px;
      margin: 20px auto;
    }
    input{
      width: fit-content;
      margin: 0 70px;
    }
   .link-wrapper{
     display: flex;
     justify-content: center;
margin:  20px 140px;
   }
   .texts{
     .license{
       font-size: 14px;
     }
     p{
       font-size: 14px;
       margin: 10px;
     }
   }
  }
`;