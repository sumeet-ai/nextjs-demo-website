// components/MainFooter.js
import Link from 'next/link';

const MainFooter = () => {
  return (
    <div className="main-footer">
      <div className="footer-inner">
        <div className="footer-content">
          <h1></h1>
          <div className="link">
            <Link href="/">
              Home
            </Link>
            <Link href="/aboutus">
              About Us
            </Link>
            <Link href="/">
              Services
            </Link>
            <Link href="/">
              Contact Us
            </Link>
            Developed by Students of WIT, Solapur
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
