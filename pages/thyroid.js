import React from 'react'
import Image from 'next/image'
import Navbar from './components/Navbar';
import Footer from "./components/footer";

const thyroid = () => {
    return (
        <div>
        <div className='main'>
            <Navbar />
            <h1 className='head'>Thyroid</h1><br /><br /><br />
            <p className='p1'>The Thyroid, a small gland located in the lower part of your neck, is vital because it controls many functions in your body. It is this gland that controls body temperature, metabolism, nervous system and the rate of heartbeat. Thyroid tests are done to check if your thyroid is functioning well and if you have issues like hypothyroidism and hyperthyroidism.</p>
            <Image id='img1' src="/thyroid.jpg" alt="Description of the image" width={500} height={400} /><br /><br /><br />

            <p className='p1'><b>Thyroid blood test include:</b></p>
            <p className='p1'>•	<b>TSH</b> - Done to measure the TSH levels and check for hormonal imbalance</p>
            <p className='p1'>•	<b>T4</b> - Done to measure free T4 (FT4 or FTI) and rule out hypothyroidism and hyperthyroidism</p>
            <p className='p1'>•	<b>T3</b> - Done to confirm the diagnosis of hyperthyroidism and determine its severity</p>
            <p className='p1'>•	<b>Thyroid antibody test</b> - done to measure the level of thyroid antibodies to check if your immune system has mistakenly attacked your thyroid gland</p><br/><br/>
            <p className='p1'><b>Thyroid imaging tests include:</b></p>
            <p className='p1'>1. CT scan</p>
            <p className='p1'>2. Ultrasound </p>
            <p className='p1'>3. Nuclear medicine tests like a thyroid scan</p>
            
        </div>
        <Footer />
        </div>
        
    )
}

export default thyroid
