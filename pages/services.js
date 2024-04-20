import React from 'react'
import Navbar from './components/Navbar';
import Footer from "./components/footer";
import Servicelayout from './components/servicelayout';
import styles from '../styles/blog.module.css';
const services = () => {
    return (
        <>
            <div>
                <Navbar />
                <Servicelayout />
                
                <Footer />
            </div>

        </>
    )
}

export default services
