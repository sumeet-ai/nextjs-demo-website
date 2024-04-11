import React from 'react'
import Image from 'next/image'
import { FaShare, FaEye, FaHeart, FaLinkedin } from 'react-icons/fa';
const doctors = () => {
  return (
    <div className="maindoctors">
      <div className="doctorsheading">
        <h2>Our doctors</h2>
      </div>

      <div className="maininnerdoctor">
        <div className="docposter">
          <div className="docicons">
            <FaShare />
            <FaEye />
            <FaHeart />
          </div>
          {/* Replace image tag with Next.js Image component */}
          <Image src="/hero2.png" alt="" width={400} height={300} />

          <div className="docdetails">
            <h2>Mr Sumeet</h2>
            <FaLinkedin />
          </div>
        </div>

        <div className="docposter">
          <div className="docicons">
            <FaShare />
            <FaEye />
            <FaHeart />
          </div>
          {/* Replace image tag with Next.js Image component */}
          <Image src="/hero2.png" alt="" width={400} height={300} />

          <div className="docdetails">
            <h2>Mr Arnav</h2>
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  )
}

export default doctors
