import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { post } from './../actions/postData'
const Form = (props) => {
    const [Name, setName] = useState('')
    const [Age, setAge] = useState('')
    const [Address, setAddress] = useState('')
    const [message, setmessage] = useState('Kindly enter your details to have gifts')
    const handleonclick = (e) => {
        setmessage("You will be encountered at " + Address)
    }
    const onSubmit = () => {
        const model = {
            Name: Name,
            Age: Age
        }
        post(model).then(res => {
            if (res.status) {

            } else {
                console.log(res.error)
            }
        }).catch(err => {
            console.log(err)
        })

    }

    console.log(Name, Age, Address)
    return (<div style={{
        backgroundColor: props.mode === 'light' ? "dark" : "light",
        color: props.mode === 'light' ? "dark" : "light"
    }}>

        <h1>{props.title}</h1>
        <form>
            <label>{props.head}<input type="text"
                name='Name'
                value={Name}
                onChange={(e) => {
                    setName(e.target.value)
                }}
            /></label>

            <br />
            <label>Age:<input type="number"
                name="Age"
                value={Age}
                onChange={(e) => {
                    setAge(e.target.value)
                }} /></label>

            <br />
            <label>Address:<input type="text"
                name="Address"
                value={Address}
                onChange={(e) => {
                    setAddress(e.target.value)
                }}></input></label>

            <br></br>
            <button type="button" onClick={handleonclick}>Submit</button>
        </form>
        <p>{message}</p>
    </div>);
}
Form.propTypes = {
    head: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};
Form.defaultProps = {
    head: "Title dede",
    title: "Home"
}


export default Form;