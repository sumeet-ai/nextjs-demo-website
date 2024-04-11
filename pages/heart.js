import React from 'react'
import Image from 'next/image'
import Navbar from './components/Navbar';
import Footer from './components/footer';
const heart = () => {
    return (
        <div>
        <div className='main'>
            <Navbar />
            <h1 className='head'>Heart</h1>
            <h1 className='head'>1. Lipid profile test:</h1>
            <Image id='img1' src="/heart_img1.jpg" alt="Description of the image" width={500} height={400} /><br /><br /><br />
            <p className='p1'>Also called cholesterol test, this test measures the levels of fats in your blood and can point out towards your risk of having a heart attack, stroke or other heart disease. This test typically includes measurements of various other numbers:</p><br />
            <p className='p1'>•	<b>Total cholesterol: </b> This refers to the amount of cholesterol in your blood. An increased level of total cholesterol increases your risk of heart disease. In general, your total cholesterol should be under 200 milligrams per decilitre (mg/dL) or 5.2 millimoles per litter (mmol/L).</p> <br />
            <p className='p1'>•	<b>High-density lipoprotein (HDL) cholesterol:</b>Also called the "good" cholesterol, it helps keep arteries open and your blood to flow more freely</p><br />
            <p className='p1'>•	<b>Low-density lipoprotein (LDL) cholesterol:</b>Also called the "bad" cholesterol, too much LDL cholesterol in your blood can lead to plaque deposition in your blood vessels, and results in reduced blood flow. These plaques build up may rupture and cause major heart and blood vessel problems.</p>
            <p className='p1'>•<b>Triglycerides:</b>These are another type of fat in the blood, high levels of which can raise your risk of heart disease. Your triglyceride level should be less than 150 mg/dL (1.7 mmol/L).</p>
            <p className='p1'>For your reference:</p><br />
            <p className='p1'>Total cholesterol = HDL cholesterol + LDL cholesterol + 20% of Triglycerides level</p>

            <h1 className='head'>2. High-sensitivity C-reactive protein test (hs CRP test):</h1>
            <Image id='img1' src="/heart_img2.jpeg" alt="Description of the image" width={500} height={400} /><br /><br /><br />
            <p className='p1'>C-reactive protein (CRP) is a protein which is produced by your liver as part of your body's response to inflammation that may occur due to an injury or infection. The hs-CRP test can spot lower levels of C-reactive protein (CRP) in your blood. A raised hs-CRP test values indicate a higher risk of heart attack, stroke and cardiovascular disease</p><br />
            <p className='p1'>This blood test has a great significance in diagnosing heart conditions as it can help determine your risk of heart disease before you have symptoms. An hs-CRP level above 2.0 mg/L is considered to indicate an increased risk of heart disease.However, CRP levels can be temporarily increased by many other situations other than a heart disease, lik.e a viral infection. </p><br />
            <p className='p1'>Hence, some experts may suggest doing the test twice, two weeks apart.Remember, only looking at hs-CRP levels may not be enough to arrive at something definite. Your doctor can ask for other health tests as well, and combine your hs-CRP test and other blood test results with your risk factors to get an overall sense of your heart health.</p><br />

            <h1 className='head'>3. Troponin (T) Test for Heart Attack</h1>
            <Image id='img1' src="/heart_img3.png" alt="Description of the image" width={500} height={400} /><br /><br /><br />
            <p className='p1'>Troponin (or cardiac troponin) is a type of protein found in your heart muscles. It isn't normally found in the blood and is released into the blood when heart muscles become damaged. A troponin test looks for the level of troponin in your blood. As more and more heart muscle get damaged, greater amounts of troponin are released in the blood. Two types of cardiac troponin T (cTnT) and I (cTnI) are used as cardiac profile test to identify heart injury or damage. A high level of troponin in the blood may indicate you are having or recently had a heart attack.</p><br />
            <p className='p1'>Some studies have found that troponin I is more specific and a better cardiac marker than troponin T blood test for heart attack.</p><br />
            <p className='p1'>Remember that one heart blood test alone may not determine your overall risk of heart disease. If you think your lifestyle or family history can put you at risk of developing heart disease at an early age, get in touch with a doctor, book yourself blood test for heart blockage and heart disease as advised, and improve your lifestyle habits.</p><br />

        </div>
        <Footer />
        </div>
    )
}

export default heart
