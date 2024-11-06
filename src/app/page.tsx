"use client";

import "@/app/page.css"
import Image from "next/image";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li><a href="#">Works</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="home">
          <div className="information">
            <h1>
              Hi, I am John, <br /> Creative Technologist
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique esse quasi ea sit, facere dolorem consectetur eos illum ipsam quia tenetur, qui magni, labore at?
            </p>
            <button className="btn">Download Resume</button>
          </div>
          <Image
            width={300}
            height={300}
            src="/img/profile.jpg"
            alt="Profile Image"
            className="profile-image"
          ></Image>
        </section>

        <section id="recent-post">
          <div className="recent-posts-header">
            <h2>Recent Post</h2>
            <p>View all</p>
          </div>
          <div className="recent-posts">
            <div className="post">
              <h3>Making a design system from scratch</h3>
              <p className="date-category">12 Feb 2020 | Design, Pattern</p>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className="post">
              <h3>Making a design system from scratch</h3>
              <p className="date-category">12 Feb 2020 | Design, Pattern</p>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
          </div>
        </section>

        <section id="featured-works">
          <h2>Featured works</h2>
          <div className="featured-works">
            <div className="work">
              <Image
                width={400}
                height={300}
                src="/img/work1.png"
                alt="Designing Dashboards"
              ></Image>
              <div className="work-info">
                <h3>Designing Dashboards</h3>
                <span>
                  <p className="date">2020</p>
                  <p className="category">Dashboard</p>
                </span>
                <p className="description">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="work">
              <Image
                width={400}
                height={300}
                src="/img/work2.png"
                alt="Designing Dashboards"
              ></Image>
              <div className="work-info">
                <h3>Designing Dashboards</h3>
                <span>
                  <p className="date">2020</p>
                  <p className="category">Dashboard</p>
                </span>
                <p className="description">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
            <div className="work">
              <Image
                width={400}
                height={300}
                src="/img/work3.png"
                alt="Designing Dashboards"
              ></Image>
              <div className="work-info">
                <h3>Designing Dashboards</h3>
                <span>
                  <p className="date">2020</p>
                  <p className="category">Dashboard</p>
                </span>
                <p className="description">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div className="links">
          <a href="http://facebook.com/abdullah.sheikh.97" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
          <a href="https://instagram.com/abdullah.sheikh.26" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          <a href="https://linkedin.com/in/abdullahsalahuddin" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        </div>
        <p>Copyright ©2020 All rights reserved</p>
      </footer>
    </>
  );
}
