import { useState, useEffect } from 'react'
import CardUsageDetailsItem from '../CardUsageDetailsItem'
import { v4 as uuidv4 } from 'uuid' 
import { supabase } from '../Client'

import './index.css'

const CardUsageDetails = () => {
  const [bankName, setBankName] = useState('')
  const [amount, setAmount] = useState('')
  const [date, setDate] = useState('')
  const [purpose, setPurpose] = useState('')
  const [formCardData, setFormCardData] = useState([])

  useEffect(() => {
    getCardDetails()
  }, [])

  const getCardDetails = async () => {
    try{
      const { data, error} = await supabase
        .from('card_usage_data')
        .select('*')

        if (error) throw error
        if (data != null) {
          setFormCardData(data)
        }
    }
    catch(error) {
      alert(error.message)
    }
  }

  const insertCardDetails = async () => {
    try{
      const { data, error} = await supabase
        .from('card_usage_data')
        .insert({
          bankName: bankName.toUpperCase(),
          amount: amount,
          date: date,
          purpose: purpose,
        })

        if (error) throw error
        if (data != null) {
          setFormCardData(data)
        }
    }
    catch(error) {
      alert(error.message)
    }
  }

  const getClickedId = async (id) => {
    const filteredFormData = formCardData.filter(each => each.id !== id)
    setFormCardData(filteredFormData)

    try{      
      const { error } = await supabase
      .from('card_usage_data')
      .delete()
      .eq('id', id)        

      if (error) throw error
    }
    catch(error) {
      alert(error.message)
    }
  }

  const handleCardUsageDetails = (e) => {
    e.preventDefault()

    if (bankName !== '' && amount!== '' && date !== '' && purpose !== '') {
      const newData = {
        id: uuidv4(),
        bankName,
        amount,
        date,
        purpose,
      }
      setFormCardData((prev) => [...prev, newData])
    }

    setBankName('')
    setAmount('')
    setDate('')
    setPurpose('')
  }

  const onChangeBankName = (e) => {
    setBankName(e.target.value)
  }

  const onChangeAmount = (e) => {
    setAmount(e.target.value)
  }

  const onChangeDate = (e) => {
    setDate(e.target.value)
  }

  const onChangePurpose = (e) => {
    setPurpose(e.target.value)
  }

  return (
    <div className='card-usage-details-container'>
      <form className='form-card-usage-details-container' onSubmit={handleCardUsageDetails}>
        <div className='input-container'>
          <label className='label-name' htmlFor='bankName'>Bank Name</label>
          <input 
            className='user-input' 
            id='bankName' 
            name='bankName' 
            type='text' 
            placeholder='Enter Bank Name' 
            value={bankName} 
            onChange={onChangeBankName} 
          />
        </div>
        <div className='input-container'>
          <label className='label-name' htmlFor='amount'>Amount in INR</label>
          <input 
            className='user-input' 
            id='amount' 
            name='amount' 
            type='text' 
            placeholder='Enter Amount'
            value={amount}
            onChange={onChangeAmount} 
          />
        </div>
        <div className='input-container'>
          <label className='label-name' htmlFor='date'>Date</label>
          <input 
            className='user-input' 
            id='date' 
            name='date' 
            type='date' 
            placeholder='Enter Date'
            value={date} 
            onChange={onChangeDate}
          />
        </div>
        <div className='input-container'>
          <label className='label-name' htmlFor='purpose'>Purpose</label>
          <input 
            className='user-input' 
            id='purpose' 
            name='purpose' 
            type='text' 
            placeholder='Enter Purpose' 
            value={purpose} 
            onChange={onChangePurpose} 
          />
        </div>
        <button className='usage-details-add-btn' type='submit' onClick={insertCardDetails}>Add</button>
      </form>

      <div className='card-usage-table-container'>
        <table className='card-usage-table'>
          <thead >
            <tr>
              <th className='table-heading'>Bank Name</th>
              <th className='table-heading'>Amount</th>
              <th className='table-heading'>Date</th>
              <th className='table-heading'>Purpose</th>
              <th className='table-heading'>Remove</th>
            </tr>
          </thead>

          <tbody>
            {formCardData.map(each => (<CardUsageDetailsItem key={each.id} cardDetails={each} getClickedId={getClickedId} />))} 
          </tbody>
        </table>
        
        {formCardData.length > 0 ? "" : <><p className='empty-list-text'>No details are added yet!!!</p></> }
      </div>
    </div>
  )
}

export default CardUsageDetails