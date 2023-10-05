import Logout from '../Logout'
import {FaUserCircle} from 'react-icons/fa'
import CardUsageDetails from '../CardUsageDetails'

import './index.css'

const Home = (props) => {
  const {token} = props
  
  return (
    <div className='home-container'>
      <div className='home-heading-container'>
        <h1 className='home-heading'>Credit Card Control</h1>
        <div className='logout-profile-container'>
          <div className='logout-profile-block'>
            <FaUserCircle className='user-profile-icon' />
            <h1 className='user-name'>{token.user.user_metadata.full_name}</h1>
          </div>
          <Logout />
        </div>
      </div>
      <CardUsageDetails />
    </div>
  )
}

export default Home