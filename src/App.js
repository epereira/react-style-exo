
import './App.css';
import { jsx, css } from '@emotion/react';
import style from '@emotion/styled';


const Card = style.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  max-width: 400px;
  :hover{
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  }
  & > img{
    width:100%;
  }
`;

const CardContainer = style.div`
  padding: 6px 16px;
`;

const Strong = style.b`
  color: blue;
  :hover {
    color: red;
    cursor: zoom-in;
  }
`;

function App() {
  return (
    <div className="App">
     <Card>
        <img src="./img/img_avatar.png" alt="Avatar" />
        <CardContainer>
          <h4><Strong>John Doe</Strong></h4> 
          <p>React Developer</p> 
        </CardContainer>
    </Card>
    </div>
  );
}

export default App;
