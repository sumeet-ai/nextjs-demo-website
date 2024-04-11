import React from 'react'
import Image from 'next/image'
const home = () => {
  return (
    <div>
      <div className='mainHome' > 
        <div className='home'> 
          <div className='homeLeftContent'> 
              <span>Welcome to Dekhne Clinical Lab</span>
              <h2>We take care our <br /> Patients</h2>
              <p className='lorem'>"Empowering Diagnosis, Enriching Lives: Welcome to Dekhne Clinical laboratory,<br/>
               where precision meets compassion in pathology excellence."</p>
          <div className='homeBtn'> 
            
            <a className='homeBtnSec' href="/aboutus">Read More</a> 
          </div>
        </div>
          <div className='homeRightContent'> 
          <Image src="/hero2.png" alt="Description of the image" width={500} height={400} />
          </div>
        </div>
      </div>
      <div className='technology'> 
        <div className='mainTechnology'> 
          <div className='innerTechnology'> 
            <span></span>
            <i className="fi fi-tr-hands-heart "></i>
            <h2>Quality and Safety</h2>
            <p>We prioritize uncompromising quality standards, employing state-of-the-art equipment and rigorous protocols to ensure accurate diagnostic results.</p>
          </div>
          
          <div className='innerTechnology'>
            <span></span>
            <i className="fi fi-tr-user-md"></i>
            <h2>Precision and Accuracy </h2>
            <p>Precision and accuracy are the cornerstones of our pathology laboratory,we utilize advanced methodologies and quality assurance measures to ensure precise and accurate results, providing clinicians with dependable diagnostic information for optimal patient care.</p>
          </div>

         
        </div>
      </div>
    </div>
  )
}

export default home
