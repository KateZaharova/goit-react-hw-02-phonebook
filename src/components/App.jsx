import { Layout } from "./Layout";
import { GlobalStyle } from "./GlobalStyle";
import { Component } from "react";
import { Form } from "./Form";
import { ContactList } from "./ContactList";


export class App extends Component {
state = {
    contacts: [],
    filter: "",
  };


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
    <Form />
    <ContactList/>
    <GlobalStyle/>
    </Layout>
  );
  };

  
    
};
