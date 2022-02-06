import { Anchor, Brand, Half, Header, Hero, HeroImage, Links, Main, Menu, Title, Toggle} from 'noonchaa-react-tailwind'
import Theme from './Theme';
import logo from './RedX.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [colorTheme, setTheme] = Theme()
    const [show, setShow] = useState(false)
    return(
        <Main>
          <Header onClick={()=>setShow(!show)} sticky>
            <Brand logo={logo}>
                <Link to={'/'}>NRT</Link>
            </Brand>
            <Menu toggle={<Toggle theme={colorTheme} onClick={()=>setTheme(colorTheme)}/>} open={show}>
              <Links>
                <Anchor color='red' line>
                    <Link to={'/components'}>Components</Link>
                </Anchor>
                <Anchor color='red' line>
                    <Link to={'/#example'}>example</Link>
                </Anchor>
                <Anchor color='red' line>
                    <a href='https://github.com/noonchaa/noonchaa-react-tailwind' target='_blank' rel='noreferrer'>github</a>
                </Anchor>
              </Links>
            </Menu>
          </Header>
          <Hero centered fullBG={logo}>
            <Title>Building Your Next App with <span style={{color:'#dc2626'}} >NRT</span> components</Title>
            <p>Easiest way to create your website</p>
          </Hero>
          <Hero stack>
            <Title>Building Your Next App with <span style={{color:'#dc2626'}} >NRT</span> components</Title>
            <p>Easiest way to create your website</p>
            <HeroImage>
                <img src={logo} alt='hero' height='100%' width='auto' style={{height:'100%',width:'auto',margin:'auto'}}/>
            </HeroImage>
          </Hero>
          <Hero>
              <Half>
                <Title>Building Your Next App with <span style={{color:'#dc2626'}} >NRT</span> components</Title>
            <p>Easiest way to create your website</p>
              </Half>
            <HeroImage side>
                <img src={logo} alt='hero' height='100%' width='auto' style={{height:'100%',width:'auto',margin:'auto'}}/>
            </HeroImage>
          </Hero>
        </Main>
    )
}
export default Home