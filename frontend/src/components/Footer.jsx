import React from 'react'
import { assets } from '../assets/assets'

function Footer() {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-row sm:gird grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* ---- Left Section ---- */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>The hospital partnered with Prescripto is a multi-specialty center providing quality care across various medical fields. Staffed by experienced healthcare professionals, it offers services like general medicine, emergency care, and specialist consultations. Integrated with Prescripto, the hospital supports digital prescriptions, reducing paperwork and improving communication between doctors, patients, and pharmacists for a smoother healthcare experience.</p>
            </div>

            {/* ---- Middle Section ---- */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            {/* ---- Right Section ---- */}
            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>prescriptoglobal@gmail.com</li>
                </ul>
            </div>

        </div>

        {/* ----- Copyright Section ---- */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center text-gray-600'>Copyright © 2025 Prescripto - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer