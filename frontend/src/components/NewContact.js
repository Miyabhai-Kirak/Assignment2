import { useState } from 'react';

function NewContact(props) {
    const { contacts, setContacts } = props;
    const [name, setName] = useState('');
    const [address, setAddress] = useState(''); // State to store address on frontend

    async function createContact(e) {
        e.preventDefault();

        // Send only name to the backend; address remains on the frontend
        const response = await fetch('http://localhost/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name, // Only name sent to the backend
            })
        });

        const data = await response.json();

        if (data.id) {
            // Add contact to the local list, include address (only on frontend)
            setContacts([...contacts, { ...data, address }]);
        }

        // Reset the input fields
        setName('');
        setAddress('');
    }

    return (
        <form className='new-contact' onSubmit={createContact}>
            <input 
                type='text' 
                placeholder='Name' 
                onChange={(e) => setName(e.target.value)} 
                value={name} 
            />
            <input 
                type='text' 
                placeholder='Address' 
                onChange={(e) => setAddress(e.target.value)} 
                value={address} 
            />
            <button className='button green' type='submit'>Create Contact</button>
        </form>
    );
}

export default NewContact;
