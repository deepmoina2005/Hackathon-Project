import { NavLink } from 'react-router-dom'
import { MdDashboard } from 'react-icons/md'

const Footer = () => {
  return (
    <div className='m-5'>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <NavLink to="/" className="text-2xl flex items-center gap-2 font-bold uppercase">
                      <MdDashboard />
                      <p className="text-secondary2">Seller</p>
                      <p>Dashboard</p>
                    </NavLink>
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt alias illo aliquid nostrum doloribus ab facilis vel, cupiditate nisi optio hic sint a pariatur unde, dicta impedit et temporibus labore.
          </p>
        </div>

          <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>
            </ul>
          </div>

            <div>
              <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
              <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91 858-784-4829</li>
                <li>contact@gmail.com</li>
              </ul>
            </div>

      </div>

        <div>
          <hr />
          <p className='py-5 text-center text-sm'>Copyright 2025@ ondc.com - All Right Reserved.</p>
        </div>
    </div>
  )
}

export default Footer