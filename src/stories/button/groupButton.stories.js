import React from "react";
import {ButtonGroup,Button} from '../..'

export default {
    component: ButtonGroup
}

const icon = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

const icon2 = <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

export const groupButton = () => (
    <ButtonGroup>
        <Button color="success" style={{marginLeft:'16px'}}>One</Button>
        <Button color="info" style={{marginLeft:'16px',marginRight:'16px'}}>{icon}</Button>
        <Button>{icon2}Add</Button>
    </ButtonGroup>
)