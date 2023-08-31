import { ContactItem } from "./ContactItem";
import { LiItem} from "./ContactList.styled";


export const ContactList = ({ contacts, onDelete}) => {
    return (
        <div>
           
            <ul>
                {contacts.map(item => (
                    <LiItem key={item.id}>
                        <ContactItem item={item.contact} onDelete={onDelete} />
                    </LiItem>
                    
                ))}
            </ul>
        </div>
    )
}