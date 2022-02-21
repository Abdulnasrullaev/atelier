import styled from "styled-components";

export const Abouts = styled.div`
  width: 100%;
  color: white;
  margin: auto;

  .layout {
    text-align: center;
    padding: 30px 10px;
  }

  .pages {
    font-size: 60px;
    text-align: center;
    color: darkorange;
  }

  .card-wrapper {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
    margin: 20px auto;

    .cards {
      border: 1px solid #4B4136;
      box-sizing: border-box;
      border-radius: 0px;
      margin: 20px;
      padding: 20px 1px;

      .land {
        text-align: center;
        text-transform: uppercase;
      }
    }
  }

  .background {
    width: 100%;
    background-size: 100%;
  }
`

export const Service = styled.div`
  width: 100%;
  color: white;

  .title {
    text-align: center;
    padding: 30px 0;
    font-size: 60px;
    color: darkorange;
    text-transform: capitalize;

    span {
      font-size: 13px;
    }
  }

  .card-wrappers {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;

    .card {
      border: 1px solid #4B4136;
      box-sizing: border-box;
      width: 28%;
      padding-bottom: 20px;
      align-content: center;

      img {
        margin: 70px 0px 20px 35px;
      }

      p {
        width: fit-content;
        margin: 20px 35px;
      }

      .design {
        font-size: 29px;
        color: darkorange;
      }

      .text {
        font-size: 15px;

        span {
          font-size: 13px;
        }
      }
    }
  }

  .img-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 40px auto;
    align-items: center;
    width: 90%;
    padding-bottom: 20px;

    .img {
      width: 16.1%;
      margin: 0px 3px;

      .instagram {
        width: 23%;
        background: transparent;
        position: sticky;
        margin: -23px 80px;
      }
    }

    .flash {
      text-align: center;
      width: fit-content;
      margin: 0px 30px;

    
      .follow {
        text-align: center;
        color: darkorange;
        font-size: 40px;
        margin: -100px 10px 30px 30px;
      }

      #text {
        position: static;
        width: fit-content;
        margin: -3px auto;
        padding: 10px 15px;
        background-color: darkorange;
        border: none;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    .img-wrapper {
      display: flex;
      justify-content: center;
      margin: 20px auto;
      flex-wrap: wrap;
align-items: center;
      .img {
        width: fit-content;

        .instagram {
          width: 40px;
        }
      }

      .flash {
        width: 100%;
        margin: 40px auto;

        .books {
          width: fit-content;
        }
      }
    }
    .card-wrappers{
      display: flex;
      width: fit-content;
      flex-wrap: wrap;
    .card{
      width: fit-content;
      margin: 10px;
    }
    }
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    .title {
      width: fit-content;
      font-size: 40px;
      margin: 10px auto;


    }

    .card-wrappers {
      display: flow-root;

      .card {
        text-align: center;
        width: fit-content;
        margin: 30px auto;
      }
    }
  }
`;



