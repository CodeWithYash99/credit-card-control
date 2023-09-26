import { useNavigate } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'

import './index.css'

const Logout = () => {
  const navigate = useNavigate()

  const onClickLogout = () => {
    sessionStorage.removeItem('token')
    navigate('/credit-card-control')
  }

  return (
    <div className='logout-container'>
      <button className='logout-button' onClick={onClickLogout}>Logout</button>
      <FiLogOut className='logout-icon' />
    </div>
  )
}

export default Logout