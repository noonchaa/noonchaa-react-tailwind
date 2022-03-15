import React from "react";
import { Main, Container } from "../../components";

export default {
    component: Container
}

export const container = args => (
    <Main>
        <Container {...args}>
            <p style={{marginBottom:'32px'}}>First Content</p>
            <p style={{marginBottom:'32px'}}>Second Content</p>
        </Container>
    </Main>
)

// const Template = (args) => {
//     return(
//         <Main slate>
//             <Container {...args}>
//                     <p style={{marginBottom:'32px'}}>First Content</p>
//                     <p style={{marginBottom:'32px'}}>Second Content</p>
//             </Container>
//         </Main>
//     )
// }

// export const Props = Template.bind({})
// Props.args = {
//     style: {
//         border: '1px solid #000000'
//     }
// }