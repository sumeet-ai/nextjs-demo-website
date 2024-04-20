import React from 'react'
import Image from 'next/image'
import style from '../styles/blog.module.css';
import styles from '../styles/Home.module.css';
import Navbar from './components/Navbar';
import Footer from "./components/footer";

const kidney = () => {
  return (
    <div>
    <div className='main'>
      <Navbar />
      <h1 className='head'>Kidney</h1><br /><br /><br />
      <Image id='img1' src="/kidney_img1.jpg" alt="Description of the image" width={500} height={400} /><br /><br /><br />

      <p className='p1'>A urine test is when a doctor examines a small amount of your urine (pee) to check for signs of kidney disease and other health problems. When your kidneys are damaged, they may let protein leak into your urine. This can be one of the earliest signs of kidney disease.<br />
        Urine tests help your doctor:</p><br />

      <p className='p1'>• Measure your kidney function </p>
      <p className='p1'>•	Find out what stage of kidney disease you are in</p>
      <p className='p1'>•	Keep track of health problems that can cause kidney disease, such as diabetes</p>
      <p className='p1'>•	Check for complications (problems) from kidney disease such as anemia and metabolic acidosis </p>
      <p className='p1'>• Check for other problems such as a kidney infection or a urinary tract infection (UTI)</p><br /><br /><br />

      <Image id='img1' src="/kidney_img2.jpeg" alt="Description of the image" width={500} height={400} /><br /><br /><br />
      <h1 id='head2'>Kidney biopsy</h1>
      <p className='p1'>A kidney biopsy can help your doctor figure out what is causing your kidney problem, how severe your kidney problem is and the best treatment. </p>
      <p className='p1'>Your doctor may suggest a kidney biopsy if tests show:</p>
      <p className='p1'> • Blood in your urine (hematuria) </p>
      <p className='p1'> • Protein in your urine (proteinuria)</p>
      <p className='p1'> • Kidney disease with no clear cause</p><br /><br /><br />

      <p className='p1'>Your doctor may also suggest a kidney biopsy to find out if:</p><br />
      <p className='p1'>•The treatment for your kidney problem is working</p>
      <p className='p1'>•There is damage to your kidneys that cannot be reversed</p>
      <p className='p1'>•A transplanted kidney is not working well</p>
      <p className='p1'>•You have a kidney tumor</p>
      <p className='p1'>•If your kidney problem is caused by a rare kidney disease </p>
      <p className='p1'>If you have any questions about why you need a kidney biopsy and how it could help treat your kidney problem, talk to your doctor</p><br/><br/><br/>
      
      
    </div>
    <Footer />
    </div>
  )
}

export default kidney
