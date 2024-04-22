import React from 'react'
import Image from 'next/image'

const labs = () => {
  return (
    <div>
      <div className="maindoctors">
      <div className="doctorsheading">
      </div>

      <div className="maininnerdoctor">
        <div className="docposter">
          
          {/* Replace image tag with Next.js Image component */}
          <Image src="/lab4.jpg" alt="" width={400} height={300} />

          
        </div>

        <div className="docposter">
          
          {/* Replace image tag with Next.js Image component */}
          <Image src="/lab5.jpg" alt="" width={400} height={300} />

          
        </div>
        <div className="docposter">
          
          {/* Replace image tag with Next.js Image component */}
          <Image src="/doct1.jpg" alt="" width={400} height={300} />

          
        </div>
      </div>
    </div>
    </div>
  )
}

export default labs
