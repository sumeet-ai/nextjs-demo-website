import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const aboutus = () => {
    return (
        <div className="mainabout">
            <div className="aboutheading">About Us</div>

            <div className="innermainabout">
                <div className="aboutinnercontentleft">
                    <Image src="/board.png" alt="" width={500} height={300} />
                </div>

                <div className="aboutinnercontent">
                    <div className="aboutrightcontent">
                        <h4>Dekhne Clinical Laboratory, established in 1968, pioneers in diagnostic excellence,<br /> with over 60+ years of unwavering commitment to healthcare, emphasizing precision and innovation.</h4>
                        <p></p>
                        <p className="aboutseccontent"></p>
                        <Link href='/aboutus'>
                            <button className="aboutbtn">Read More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default aboutus
