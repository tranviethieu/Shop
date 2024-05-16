import { NavLink } from 'react-router-dom'

function Header({}: any) {
  return (
    <aside className='col-span-1' aria-label='Sidebar'>
      <div className='flex h-full flex-col overflow-y-auto bg-gray-100 py-4 px-3 shadow-lg'>
        <ul className='space-y-2'>
          <li>
            <NavLink
              to='/'
              end
              className={({ isActive }) => {
                const activeClass = isActive ? 'bg-gray-300' : ''
                return `flex items-center rounded-lg ${activeClass} p-2 text-base font-normal text-gray-900 hover:bg-gray-300`
              }}
            >
              {({ isActive }) => <span className={`ml-3 ${isActive ? 'font-bold' : ''}`}>Dashboard</span>}
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/page1'
              className={({ isActive }) => {
                const activeClass = isActive ? 'bg-gray-300' : ''
                return `flex items-center rounded-lg ${activeClass} p-2 text-base font-normal text-gray-900 hover:bg-gray-300`
              }}
            >
              {({ isActive }) => <span className={`ml-3 ${isActive ? 'font-bold' : ''}`}>Page 1</span>}
            </NavLink>
          </li>
        </ul>
        {/* <div className='mt-auto'>
          ©️ Copyright{' '}
          <a href='https://test.com' target='_blank' rel='noreferrer' className='text-cyan-500'>
            test.com
          </a>
        </div> */}
      </div>
    </aside>
  )
}

export default Header
