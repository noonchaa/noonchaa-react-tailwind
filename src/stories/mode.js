import {Main, Toggle} from '..'

const Mode = ({children}) => {
    return(
        <Main>
            {children}
            &nbsp;
            <Toggle/>
        </Main>
    )
}
export default Mode