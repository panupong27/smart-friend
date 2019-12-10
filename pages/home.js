import React from 'react'
import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'

const Home = () => (
  <Layout>
    <style jsx global>{`body{margin: 0; padding: 0;}`}</style>

    <div className="jumbotron">
      <div className="header">
        <img src="/logoApp.jpg" alt="" />
        <span className="txt-title">SMART FRIEND</span><br />
      </div>

      <span className="btn-title-link">หาเพื่อนที่ไลฟ์สไตล์เหมือนคุณ</span>
      <Link href="/menu">
        <a className="btn-click">คลิกเลย</a>
      </Link>

      <div className="bg-header"></div>
      <div className="bg-footer"></div>
    </div>


    <style jsx>{`
      .jumbotron{
        width: 100%;
        postion: relative;
        background: black;
        height: 100vh;
      }
      .bg-header{
        background: url(home_background.jpg);
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
  
        height: 100vh;
        position: abolute;
        z-index: -1;
        opacity: .45;
      }
      .header{
        position: absolute;
        width: 100%;
        height: 120px;
        background: rgb(238, 0, 30);
        z-index: 1;
      }
      img{
        position: absolute;
        top: -49px;
        width: 150px;
        left: -17px;
      }  


      .txt-title{
        position: absolute;
        font-weight: bold;
        font-size: 23px;
        left: 152px;
        color: rgba(255, 255, 255, 1);
        letter-spacing: 1px;
        top: 45px;
      }
      .btn-title-link{
        position: absolute;
        top: 40%;
        left: 40%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 20px;
        width: 70%;
        text-decoration: none;
        letter-spacing: 2px;
        line-height: 30px;
        z-index: 999;
      }
      .btn-click{
        position: absolute;
        top: 45%;
        left: 50%;
        color: white;
        font-size: 20px;
        text-decoration: none;
        z-index: 999;
        background: rgba(0,0,0,0.5);
        padding: 20px;
        border: 1px solid white;
        box-shadow: 3px 3px 5px rgba(255,255,255,.4);
        transition: .3s;
      }
      .btn-click:hover{
        background: white;
        color: black;
      }

      .bg-footer{
        width: 100%;
        height: 100vh;
        blackground: white;
      }
    `}</style>
  </Layout>
)

export default Home
