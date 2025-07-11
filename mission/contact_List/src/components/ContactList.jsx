import './ContactList.css'
import ContactItem from './ContactItem'

const ContactList = ({ contacts, onDelete }) => {
    return (
        <div className="contact-list">
            <h3>Contact List</h3>
            {/* map 이란 배열을 순회하는 함수 */}
            {contacts.map((contact) => 
                <ContactItem key={contact.id} contact={contact} onDelete={onDelete} />
            )}
        </div>
    )
}

export default ContactList