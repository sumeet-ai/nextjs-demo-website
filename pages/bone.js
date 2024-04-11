import React from 'react'
import Image from 'next/image'
import Navbar from './components/Navbar';
import Footer from './components/footer';
const bone = () => {
    return (
        <div>
        <div className='main'>
            <Navbar />

            <h1 className='head'>Bone related issue</h1>
            <h3 className='head'>What is a bone profile test?</h3><br /><br /><br />
            <p className='p1'>A bone profile test includes examining calcium, alkaline phosphatase, phosphate, and albumin levels in your blood, along with a bone density scan. Calcium, alkaline phosphatase, phosphate, and albumin are essential minerals and enzymes present in your blood and ascertaining their levels helps determine the status and functioning of your bones.<br /> Whereas a bone density scan reveals how sturdy your bones are to withstand forces on the body during daily activities.<br /> Let us understand these in more depth.Our bones are meant to enable movement, maintain the body posture, absorb forces that tend to displace the body and throw it off balance, provide shape to the body parts, and also protect your internal organs. But, to carry out these functions it needs a wholesome supply of minerals and enzymes described above, deficiency or excess of which may predispose your bones to damage and disorders. </p><br /><br />
            <Image id='img1' src="/DEX-machine.webp" alt="Description of the image" width={500} height={400} /><br /><br /><br />
            <p className='p1'>Some important causes of these and bone disorders include : </p>
            <p className='p1'>•	Osteoporosis</p>
            <p className='p1'>•	Osteomalacia</p>
            <p className='p1'>•	Rickets </p>
            <p className='p1'>•	Bone cancer</p>
            <p className='p1'>•	Bone infections</p>
            <p className='p1'>•	Disorders of the thyroid and parathyroid glands that cause fractures</p>
            <h3 className='head'>When is a bone profile test advised?</h3><br /><br /><br />
            <p className='p1'>A Bone profile test is a bone health verification. Your Physician or Bone specialist may prescribe a bone profile and/or a bone density scan if you experience the following symptoms:</p><br />
            <p className='p1'>•	Lethargy out of proportion to activities performed</p>
            <p className='p1'>•	Generalized weakness in the body muscles</p>
            <p className='p1'>•	Joint pain</p>
            <p className='p1'>•	Bone pain</p>
            <p className='p1'>•	Trivial falls causing fractures</p>
            <p className='p1'>•	Nausea, and vomiting associated with the above symptoms</p>
            <p className='p1'>•	Dehydration</p>
            <p className='p1'>•	Night pain</p><br />
            <p className='p1'>The above symptoms may be a part of an ongoing bone disease or disorder hidden beneath the symptoms. It is also useful to rule out bone disorders to help your doctor come to a definite diagnosis and to monitor a treatment plan in progress.</p>
            <p className='p1'>A bone test can also be done as a part of a routine health check-up along with other tests. This is especially useful in elderly individuals to confirm the onset of age-related osteoporosis (reduction in bone density).</p>
            <h3 className='head'>Why is bone testing important?</h3><br /><br /><br />
            <p className='p1'>To understand why a bone test is important, you need to understand the importance of each of the parameters examined in a bone profile test.</p><br/>
            <h1>•	Calcium</h1>
            <p className='p1'>Calcium is required for the effective functioning of your bones. It is an important indicator of how well your kidneys and parathyroid glands are working. A deficiency or excess of calcium levels in your blood points to disease or disorders of the bones, kidneys, etc.</p>
            <h1>•	Alkaline Phosphatase</h1>
            <p className='p1'>Your bones make an enzyme or aprotein called Alkaline Phosphatase that helps in the growth of your bones. Abnormal levels of Alkaline Phosphatase are associated with osteoporosis, bone cancers, and Paget's disease.</p>
            <h1>•	Phosphate</h1>
            <p className='p1'>Phosphate teams up with Calcium in your blood and bones to help in your bone formation and repair during daily wear and tear. Abnormal levels point to Kidney disorders, signifying the ineffective clearing away of phosphate from your blood and urine.</p>
            <h1>•	Albumin</h1>
            <p className='p1'>Albumin helps keep your blood vessels intact. It, therefore, is essential to keep your nutrient supply constant to your bones. A lower level of albumin has been associated with osteoporosis.</p>
            <h1 >•	Bone density</h1>
            <p className='p1'>A bone density scan helps determine the porosity or how fragile or sturdy your bones are through the T and/or the Z score. A lower score is diagnosed as Osteoporosis and/or Osteopenia.</p>


        </div>
        <Footer />
        </div>
    )
}

export default bone
