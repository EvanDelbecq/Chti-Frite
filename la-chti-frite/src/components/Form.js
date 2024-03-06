import React, {useState} from 'react'
import {db} from '../firebase/firebase.js';
import { collection, addDoc } from 'firebase/firestore';
import './Form.css'


const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(collection(db, "client-mails"), {
            'name': name,
            'email': email,
            'subject': subject
        });
        setName('');
        setEmail('');
        setSubject('');
    }
  return (
    
    <div className='Form'>
        <form onSubmit={handleSubmit}>
            <input type='text' id='name' name='name' placeholder='Nom' value={name} onChange={(e)=> setName (e.target.value)}/>
            <input type='text' id='email' name='email' placeholder='Email' value={email} onChange={(e)=> setEmail (e.target.value)}  />
            <input type='text' id='subject' name='subject' placeholder='Message' value={subject} onChange={(e)=> setSubject (e.target.value)} />
            <input type='submit' value='Envoyer' />
        </form>
    </div>
  )
}

export default Form
