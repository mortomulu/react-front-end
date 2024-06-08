import PropTypes from 'prop-types'
import Sidebar from '../DashboardPage/Sidebar/sidebar'
import Header from '../DashboardPage/Header/Header'


export default function LayoutDashboard({ children }) {
  return (
        <div className='flex'>
            <Sidebar/>
            <div>
                <Header/>
                <div className='flex flex-col px-8 py-4 gap-4'>
                    {children}
                </div>
            </div>
        </div>
  )
}

LayoutDashboard.propTypes = {
  children: PropTypes.node.isRequired,
}
