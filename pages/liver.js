import React from 'react'
import Image from 'next/image'
import Navbar from './components/Navbar'
import Footer from "./components/footer";

const liver = () => {
    return (
        <div>
        <div className='main'>
            <Navbar />

            <h1 className='head'>Liver</h1><br /><br /><br />
            <Image id='img1' src="/liver_img1.jpeg" alt="Description of the image" width={500} height={400} /><br /><br /><br />
            <p className='p1'>Liver function tests check the levels of certain enzymes and proteins in your blood. Levels that are higher or lower than usual can mean liver problems. The pattern and degree of elevation of these tests along with the overall clinical picture can provide hints to the underlying cause of these problems.</p>
            <p className='p1'>Some common liver function tests include:</p><br />
            <p className='p1'>•	<b>Alanine transaminase (ALT):</b> ALT is an enzyme found in the liver that helps convert proteins into energy for the liver cells. When the liver is damaged, ALT is released into the bloodstream and levels increase. This test is sometimes referred to as SGPT.</p>
            <p className='p1'> •	<b>Aspartate transaminase (AST):</b> AST is an enzyme that helps the body break down amino acids. Like ALT, AST is usually present in blood at low levels. An increase in AST levels may mean liver damage, liver disease or muscle damage. This test is sometimes referred to as SGOT.</p>
            <p className='p1' >•	<b>Alkaline phosphatase (ALP):</b> ALP is an enzyme found in the liver and bone and is important for breaking down proteins. Higher-than-usual levels of ALP may mean liver damage or disease, such as a blocked bile duct, or certain bone diseases, as this enzyme is also present in bones.</p>
            <p className='p1'>•	<b>Albumin and total protein:</b> Albumin is one of several proteins made in the liver. Your body needs these proteins to fight infections and to perform other functions. Lower-than-usual levels of albumin and total protein may mean liver damage or disease. These low levels also can be seen in other gastrointestinal and kidney-related conditions.</p>
            <p className='p1'>•	<b>Bilirubin:</b> Bilirubin is a substance produced during the breakdown of red blood cells. Bilirubin passes through the liver and is excreted in stool. Higher levels of bilirubin might mean liver damage or disease. At times, conditions such as a blockage of the liver ducts or certain types of anaemia also can lead to elevated bilirubin.</p>
            <p className='p1'>•	<b>Gamma-glutamyl transferase (GGT):</b> GGT is an enzyme in the blood. Higher-than-usual levels may mean liver or bile duct damage. This test is nonspecific and may be elevated in conditions other than liver disease </p>
            <p className='p1'>•	<b>L-lactate dehydrogenase (LD):</b> LD is an enzyme found in the liver. Higher levels may mean liver damage. However, other conditions also may cause higher levels of LD.</p>
            <p className='p1'>•	<b>Prothrombin time (PT):</b> PT is the time it takes your blood to clot. Increased PT may mean liver damage. However, it also can be higher if you're taking certain blood-thinning drugs, such as warfarin</p><br /><br /><br />
            <Image id='img1' src="/liver_img2.jpeg" alt="Description of the image" width={500} height={400} /><br /><br /><br />
            
        </div>
        <Footer />
        </div>
    )
}

export default liver
