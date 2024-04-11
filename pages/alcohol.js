import React from 'react'
import Image from 'next/image'
import Navbar from './components/Navbar';
import Footer from "./components/footer";

const alcohol = () => {
    return (
        <div>
        <div className='main'>
            <Navbar />
            <h1 className='head'>Alcohol</h1><br /><br /><br />
            <Image id='img1' src="/alc_img1.jpeg" alt="Description of the image" width={500} height={400} /><br /><br /><br />
            <p className='p1'>There are several different types of blood tests for alcoholism. The most common type is the liver function test (LFT). This test measures how well the liver is functioning and can give a good indication of whether or not someone is drinking excessively. Other tests that may be done include a complete blood count, a glucose test and a lipid panel.</p><br />
            <h1 className='head'>Liver Function Test</h1><br /><br /><br />
            <p className='p1'>Liver function tests are important for individuals with alcoholism because liver damage is one of the most common complications of chronic alcohol use. These tests can help identify liver damage early on before symptoms develop and can also be used to monitor the progression of liver disease.</p><br/>
            <p className='p1'>There are several different liver function tests available but the two most commonly used are the alanine aminotransferase (ALT) test and the aspartate aminotransferase (AST) test. These tests measure levels of enzymes in the blood that are released when the liver is damaged.</p><br/>
            <p className='p1'>Elevated levels of these enzymes in the blood are a sign of liver damage. The ALT test is generally considered to be more sensitive than the AST test and is therefore the preferred test for screening for liver damage in individuals with alcoholism.</p><br/>
            <p className='p1'>If liver damage is suspected, additional testing may be needed to confirm the diagnosis and determine the severity of the damage. This may include imaging tests such as ultrasound, MRI or a biopsy of liver tissue. Liver function tests should be repeated periodically to monitor any changes in enzyme levels and to assess the progression of liver disease.</p><br/>
            <h1 className='head'>Why do I need liver function testing?</h1><br /><br /><br />
            <Image id='img1' src="/alc_img2.jpeg" alt="Description of the image" width={500} height={400} /><br /><br /><br />
            <p className='p1'>Many liver function tests are included in a common blood test called a comprehensive metabolic panel (CMP). Your provider often orders a CMP as part of your routine checkup to screen for liver and other diseases.</p><br/>
            <p className='p1'>You may also need liver function tests if you have symptoms of liver disease or damage. These include:</p><br/>
            <p className='p1'>• Nausea and vomiting</p>
            <p className='p1'>• Lack of appetite</p>
            <p className='p1'>• Fatigue</p>
            <p className='p1'>• Weakness</p>
            <p className='p1'>• Jaundice, a condition that causes your skin and eyes to turn yellow</p>
            <p className='p1'>• Swelling and/or pain in your abdomen (belly)</p>
            <p className='p1'>• Swelling in your ankles and legs</p>
            <p className='p1'>• Dark-coloured urine (pee) and/or light-coloured stool (poop)</p>
            <p className='p1'>• Frequent itching</p>
        </div>
        <Footer />
        </div>
    )
}

export default alcohol
