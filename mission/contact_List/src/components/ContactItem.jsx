import './ContactItem.css'
import {memo, useContext} from 'react';
import { ContactDispatchContext } from '../App';

const ContactItem = ({ contact }) => {
    const { onDelete } = useContext(ContactDispatchContext);
    return (
        <div className="contact-item">
            <div className="name">{contact.name}</div>
            <div className="email">{contact.email}</div>
            <button type="button" onClick={() => onDelete(contact)}>🗑️ Remove</button>
        </div>
    )
}

export default memo(ContactItem);