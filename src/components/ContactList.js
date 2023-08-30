import { ContactItem } from "./ContactItem";


export const ContactList = ({ contacts }) => {
    return (
        <div>
            <h2>Contacts</h2>
            <ul>
                {contacts.map(item => (
                    <li key={item.id}>
                        <ContactItem item={item} />
                    </li>
                    
                ))}
            </ul>
        </div>
    )
}