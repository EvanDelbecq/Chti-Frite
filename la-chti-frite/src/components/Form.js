import React, {useState} from 'react'
import {db} from '../firebase/firebase.js';
import { collection, addDoc } from 'firebase/firestore';
import './Form.css'


const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [persons, setPersons] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [subject, setSubject] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        addDoc(collection(db, "client-mails"), {
            'name': name,
            'email': email,
            'persons': persons,
            'date': date,
            'time': time,
            'subject': subject,
        });
        setName('');
        setEmail('');
        setPersons('');
        setDate('');
        setTime('');
        setSubject('');
    }
  return (
    
    <div className='Form'>
        <h2>Reserver</h2>
        <form onSubmit={handleSubmit}>
            <input type='text' id='name' name='name' placeholder='Nom' value={name} onChange={(e)=> setName (e.target.value)}/>
            <input type='email' id='email' name='email' placeholder='Email' value={email} onChange={(e)=> setEmail (e.target.value)}  />
            <input type='number' id='persons' name='persons' placeholder='Nombre de personnes' value={persons} onChange={(e)=> setPersons (e.target.value)} />
            <input type='date' id='date' name='date' value={date} onChange={(e)=> setDate (e.target.value)} />
            <select id="time" name="time" required  value={time} onChange={(e)=> setTime (e.target.value)}>
                <option value="" selected>Sélectionnez un horaire</option>
                <option value="11:00">11:00</option>
                <option value="11:30">11:30</option>
                <option value="12:00">12:00</option>
                <option value="12:30">12:30</option>
                <option value="13:00">13:00</option>
                <option value="13:30">13:30</option>
                <option value="14:00">14:00</option>
                <option value="15:00">15:00</option>
                <option value="16:00">16:00</option>
                <option value="17:00">17:00</option>
                <option value="18:00">18:00</option>
                <option value="19:00">19:00</option>
                <option value="19:30">19:30</option>
                <option value="20:00">20:00</option>
                <option value="20:30">20:30</option>
                <option value="21:00">21:00</option>
                <option value="21:30">21:30</option>
                <option value="22:00">22:00</option>
            </select>
            <input type='text' id='subject' name='subject' placeholder='Message' value={subject} onChange={(e)=> setSubject (e.target.value)} />
            <input type='submit' id ='submit' value='Envoyer' />
        </form>
    </div>
  )
}

export default Form
