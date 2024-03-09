import React from 'react'
import dis from '../../assets/dis1.webp'
const Discount = () => {
  return (
    <section className="lg:p-0 ">
        <h1 className='text-4xl font-bold text-center text-black '>Our Services</h1>
          <div className='w-full h-full lg:p-7'>
            <img src={dis} alt="discount" className='flex flex-wrap w-full h-full' />
          </div>
        
    </section>
  )
}

export default Discount