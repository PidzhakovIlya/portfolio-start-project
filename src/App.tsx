import './App.css';
import styled from 'styled-components';
import { Header } from './layout/header/Header';
import { Main } from './layout/section/main/Main';
import { MySkils } from './layout/skills/Skills';



function App() {
    return (
        <div className="App">
           <Header />
           <Main />
           <MySkils />
        </div>
    );
}

export default App;

const Title = styled.div`
    font-size: 36px;
    text-align: start;
    color: #fff;
`;