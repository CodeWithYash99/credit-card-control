import {RiDeleteBin6Fill} from 'react-icons/ri'

import './index.css'

const CardUsageDetailsItem = (props) => {
  const {cardDetails, getClickedId} = props
  const {id, bankName, amount, date, purpose} = cardDetails

  const onClickRowItem = () => {
    getClickedId(id)
  }

  return (
    <tr className='table-row' onClick={onClickRowItem}>
      <td className='table-data'>{bankName.toUpperCase()}</td>
      <td className='table-data'>{amount}</td>
      <td className='table-data'>{date}</td>
      <td className='table-data'>{purpose}</td>
      <td className='table-data'><RiDeleteBin6Fill className='delete-icon' /></td>
    </tr>
  )
}

export default CardUsageDetailsItem