import React,{useState} from 'react'
import './Add-Form.Styles.scss'

export const AddForm = (props) => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [number,setNumber] = useState('');

    const InputName = (event) => {
        event.preventDefault()
        setName(event.target.value)
    }

    const InputEmail = (event) => {
        event.preventDefault()
        setEmail(event.target.value)
    }

    const InputNumber = (event) => {
        event.preventDefault()
        setNumber(event.target.value)
    }

    const handleChange = (e) => {
        e.preventDefault()
        props.onSubmit({
            id:1,
            name: name,
            email: email,
            number : number
        })
        setName('')
        setEmail('')
        setNumber('')
    }


    return(
        <form id ="contact-form" onSubmit ={handleChange}>
            <label>Name:</label>
            <input type="text" onChange = {InputName} value = {name} placeholder = 'Name' className ="input-name" />
            <label>Email:</label>
            <input type="text" onChange = {InputEmail} value = {email} placeholder = 'Email' className ="input-email" />
            <label>Number:</label>
            <input type="text" onChange = {InputNumber} value = {number} placeholder = 'Number' className ="input-number" />
            <div className ="add-btn">
            <button>Add</button>
            </div>
        </form>
    )
}