import { ButtonDlt, Wrapper } from "./ContactItem.styled";


export const ContactItem = ({ item: { name, phone }, onDelete}) => {
    return (
        <Wrapper>
            <>{name}: {phone}</>
            <ButtonDlt type="button">Delete</ButtonDlt>
        </Wrapper>
        
        
    )
}

/*<button onClick={() => onDelete(contacts.id)}>Delete</button>*/