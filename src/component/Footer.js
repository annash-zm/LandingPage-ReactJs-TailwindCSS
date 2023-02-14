import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { footer, navData } from '../global/Data'

function Footer() {
  return (
    <section className='lg:pt-[50px] bg-gray-100 py-8'>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-32 lg:flex-row lg:justify-between px-32'
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className='flex flex-col justify-between h-[260px] lg:max-w-sm'>
            <div>
              <img src={navData.image} alt="" />
            </div>
            <div className='flex-1 mt-6 text-gray-500'>
              {footer.word}
            </div>
            <div className='flex flex-row space-x-5'>
              <FaFacebook style={
                {
                  color: 'red',
                  fontSize: '30px'
                }
              }
              />
              <FaTwitter style={
                {
                  color: 'red',
                  fontSize: '30px'
                }
              }
              />
              <FaInstagram style={
                {
                  color: 'red',
                  fontSize: '30px'
                }
              }
              />
            </div>
            <div className='mt-6 text-gray-400'>
              {footer.copyRight}
            </div>
          </div>

          <div className='flex flex-col gap-y-10 lg:flex-row lg:space-x-32 justify-between'>
            <div className='flex flex-col'>
              <div className='font-bold mb-3'>
                Product
              </div>
              {footer.product.map((item, idx) => {
                return (
                  <div key={idx} className="mt-3">
                    {item}
                  </div>
                )
              })}
            </div>
            <div className='flex flex-col'>
              <div className='font-bold mb-3'>
                Engage
              </div>
              {footer.engage.map((item, idx) => {
                return (
                  <div key={idx} className="mt-3">
                    {item}
                  </div>
                )
              })}
            </div>
            <div className='flex flex-col'>
              <div className='font-bold mb-3'>
                Earn Money
              </div>
              {footer.earnMoney.map((item, idx) => {
                return (
                  <div key={idx} className="mt-3">
                    {item}
                  </div>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
