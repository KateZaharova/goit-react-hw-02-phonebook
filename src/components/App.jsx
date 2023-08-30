import { Layout } from "./Layout";
import { GlobalStyle } from "./GlobalStyle";
import { Component } from "react";
import { NewPhoneForm } from "./Form";
import { ContactList } from "./ContactList";
import { nanoid } from 'nanoid';


export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', contact:{ name: 'Rosie Simpson', phone: '459-12-56' } },
    { id: 'id-2', contact:{ name: 'Hermione Kline', phone: '443-89-12' } },
    { id: 'id-3', contact:{ name: 'Eden Clements', phone: '645-17-79' } },
    { id: 'id-4', contact:{ name: 'Annie Copeland', phone: '227-91-26' } },
  ],
  filter: '',
  };


  addContact = contact => {
    
    if (-1 !== this.state.contacts.findIndex(option => option.name === contact.name)) {
      alert(`${contact.name} is already in contacts.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, { id: nanoid(), ...contact}],
    }))
    
  } 

  findName = filterName => {
    this.setState(prevState => ({
          filter: filterName
        })
   );  };


  render() {

return (
    <Layout
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}>
    <h1>React homework template</h1>
    <NewPhoneForm onAddContact={this.addContact}/>
    <ContactList contacts={this.state.contacts} onChangeFilter={ } />
    <GlobalStyle/>
    </Layout>
  );
  };
};
