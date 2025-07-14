import './ContactList.css'
import ContactItem from './ContactItem'
import { useContext } from 'react';
import { ContactStateContext, ContactDispatchContext } from '../App';

const ContactList = () => {
    const contacts = useContext(ContactStateContext);
    const { onDelete } = useContext(ContactDispatchContext);
    return (
        <div className="contact-list">
            <h3>Contact List</h3>
            {/* map 이란 배열을 순회하는 함수 */}
            {contacts.map((contact) => 
                <ContactItem key={contact.id} contact={contact} />
            )}
        </div>
    )
}

export default ContactList