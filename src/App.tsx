import './App.css';
import styled from 'styled-components';
import {Header} from './layout/header/Header';
import {Main} from './layout/section/main/Main';
import {MySkils} from './layout/section/skills/Skills';
import {Works} from "./layout/section/works/Works";
import {Testimony} from "./layout/testimony/Testimony";
import { Contact } from './layout/section/contacts/Contacts';
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Works/>
            <MySkils/>
            <Testimony/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default App;

const Title = styled.div`
  font-size: 36px;
  text-align: start;
  color: #fff;
`;