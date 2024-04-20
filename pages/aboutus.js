import React from 'react'
import Image from 'next/image'
import Navbar from './components/Navbar';
import Footer from "./components/footer";

const aboutus = () => {
    return (
        <div className=''>
            <Navbar />
            <h1 className='head1'>About us</h1><br /><br /><br />
            <div className='images'>
                <Image id='img2' src="/aboutus.jpg" alt="Description of the image" width={250} height={300} /><br /><br /><br />
            </div>
            <div className='main1'>
            <h1 className='head1'>Pioneers in Pathology since 1963</h1><br /><br /><br />
            <p className='p1'>Since our inception in 1968, we at Dekhne Clinical Laboratory have been at the forefront of diagnostic excellence in pathology. With over 61 plus years of experience, we have continuously strived for precision, innovation, and unwavering commitment to healthcare.</p><br/>
            <p className='p1'>Established in 1963, our laboratory embarked on a journey driven by a vision to revolutionize diagnostic healthcare. Over the decades, we have evolved into a trusted institution known for our expertise, reliability, and advanced technology.</p><br/>
            <p className='p1'>At Dekhne Clinical Laboratory, our dedicated team of pathologists, and technicians bring forth a wealth of knowledge and experience. We employ state-of-the-art equipment and methodologies to deliver accurate, timely, and comprehensive diagnostic services.</p><br/>
            <p className='p1'>Our commitment to excellence extends beyond mere analysis; we prioritize patient care and satisfaction above all else. Every sample entrusted to us is handled with utmost care, ensuring precise results that healthcare professionals and patients can depend on.</p><br/>
            <p className='p1'>Over the years, we have expanded our services to encompass a wide range of diagnostic specialties, including but not limited to anatomical pathology, clinical pathology, molecular pathology, and cytogenetics. Whether it's routine screenings, complex molecular analyses, or specialized testing, we are equipped to meet the diverse needs of our clients and patients.</p><br/>
            <p className='p1'>As we move forward, we remain dedicated to advancing the field of pathology, embracing emerging technologies, and fostering collaborations that enhance healthcare outcomes. With a rich legacy of excellence spanning over 61 plus years, Dekhne Clinical Laboratory continues to be the trusted partner of healthcare providers and patients alike, striving towards a healthier future for all.</p><br/>
            
            </div>
            
            <Footer />
        </div>
    )
}

export default aboutus
