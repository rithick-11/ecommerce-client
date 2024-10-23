import React from 'react'
import FormControler from '../FormControler/FormControler'

const FromContainer = ({ renderFormList ,formData, handleFormData, handleSubmit, btnText}) => {

    const onSubmitForm = (e) => {
        e.preventDefault()
        handleSubmit()
    }
    
    
  return (
    <form onSubmit={onSubmitForm} className='flex flex-col gap-3'>
        {renderFormList.map(each => <FormControler key={each.name} data={each}  value={formData[each.name]} handleFormData={handleFormData} />)}
        <button className='btn btn-primary' type='submit' >{btnText}</button>
    </form>
  )
}

export default FromContainer