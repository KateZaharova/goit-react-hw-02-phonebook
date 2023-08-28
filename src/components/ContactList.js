import { ContactItem } from "./ContactItem";


export const ContactList = ({contacts}) => {
    return (
        <div>
            <h2>Contacts</h2>
            <ul>
                {contacts.map(item => {
                    <ContactItem item={item} />
                }
                    
                )}
            </ul>
        </div>
    )
}