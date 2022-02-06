import './App.css';
import { Anchor, Brand, Header, Links, Main, Menu, Sub, Toggle} from 'noonchaa-react-tailwind'
import Theme from './Theme';
import logo from './RedX.svg'
import { useState } from 'react';

function App() {
  const [colorTheme, setTheme] = Theme()
  const [show, setShow] = useState(false)
  return (
    <Main>
      <Header onClick={()=>setShow(!show)} sticky>
        <Brand logo={logo}>NRT</Brand>
        <Menu toggle={<Toggle theme={colorTheme} onClick={()=>setTheme(colorTheme)}/>} open={show}>
          <Links>
            <Anchor color='red' line>
              <a href='#components'>Components</a>
            </Anchor>
            <Anchor color='red' line>
              <a href='#components'>example</a>
            </Anchor>
            <Anchor color='red' line>
              <a href='#components'>github</a>
            </Anchor>
          </Links>
        </Menu>
      </Header>
      <Sub>
        <Links centered>
          <Anchor color='red' block>
            <a href='#components'>Components</a>
          </Anchor>
          <Anchor color='red' block>
            <a href='#components'>example</a>
          </Anchor>
          <Anchor color='red' block>
            <a href='#components'>github</a>
          </Anchor>
          <Anchor color='red' block>
            <a href='#components'>Components</a>
          </Anchor>
          <Anchor  color='red' block>
            <a href='#components'>example</a>
          </Anchor>
          <Anchor block color='red'>
            <a href='#components'>github</a>
          </Anchor>
        </Links>
      </Sub>
      <div style={{height:'100vh'}}></div>
    </Main>
  );
}

export default App;
