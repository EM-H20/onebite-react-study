import './ContactItem.css'
const ContactItem = ({ contact, onDelete }) => {
    return (
        <div className="contact-item">
            <div className="name">{contact.name}</div>
            <div className="email">{contact.email}</div>
            <button type="button" onClick={() => onDelete(contact)}>🗑️ Remove</button>
        </div>
    )
}

export default ContactItem