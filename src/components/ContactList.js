import { ContactItem } from "./ContactItem";


export const ContactList = ({ contacts }) => {
    return (
        <div>
            <h2>Contacts</h2>

            <label>Find contacts by name</label>
            
             <input
                type="text"
                value={contactName}
                name="Findname"
                        onChange={evt => {
                            this.setState(() => ({contactName: evt.target.value }))
                        }  }
                pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
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