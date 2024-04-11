import React from 'react'
import { FaHeart } from "react-icons/fa";
import { GiKidneys } from "react-icons/gi";
import { GiLiver } from "react-icons/gi";
import { PiBoneThin } from "react-icons/pi";
import { FaCalendarPlus } from "react-icons/fa6";
import { FaGlassMartiniAlt } from "react-icons/fa";
import Link from 'next/link';
const services = () => {
  return (
    <div className="our-service">
      <div className="service-heading">
        <h2>Blogs</h2>
      </div>

      
      <div className="main-services">
        <div className="inner-services">
          <div className="service-icon">
            <GiKidneys />
          </div>
          <h3>kidneys</h3>
          <Link href='/kidney'>
          <button className="aboutbtn">Read More</button>
          </Link>
          <p></p>
        </div>

        <div className="inner-services">
          <div className="service-icon">
            <GiLiver />
          </div>
          <h3>Liver</h3>
          <Link href='/liver'>
          <button className="aboutbtn">Read More</button>
          </Link>
          <p></p>
        </div>

        <div className="inner-services">
          <div className="service-icon">
            <FaGlassMartiniAlt />
          </div>
          <h3>Alcohol</h3>
          <Link href='/alcohol'>
          <button className="aboutbtn">Read More</button>
          </Link>
          <p></p>
        </div>

        <div className="inner-services">
          <div className="service-icon">
            <PiBoneThin />
          </div>
          <h3>Bone related</h3>
          <Link href='/bone'>
          <button className="aboutbtn">Read More</button>
          </Link>
          <p></p>
        </div>

        <div className="inner-services">
          <div className="service-icon">
            <FaCalendarPlus />
          </div>
          <h3>Thyroid</h3>
          <Link href='/thyroid'>
          <button className="aboutbtn">Read More</button>
          </Link>
          <p></p>
        </div>

        <div className="inner-services">
          <div className="service-icon">
            <FaHeart />
          </div>
          <h3>Heart</h3>
          <Link href='/heart'>
          <button className="aboutbtn">Read More</button>
          </Link>
          <p></p>
        </div>
      </div>
    </div>
  )
}

export default services
