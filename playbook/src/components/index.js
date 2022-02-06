import {Main} from 'noonchaa-react-tailwind'
import { Outlet } from 'react-router-dom'

const Comp = () => {
    return(
        <Main>
            <h1>Components</h1>
            <Outlet/>
        </Main>
    )
}
export default Comp