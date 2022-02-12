import React from "react";
import { Alert } from '../../'

export default {
    component: Alert
}

export const standard = () => <Alert status={'Your Status'}>Your message here</Alert>
export const standardFull = () => <Alert status={'Your Status'} full>Your message here</Alert>
export const success = () => <Alert status={'Your Status'} success>Your message here</Alert>
export const successFull = () => <Alert status={'Your Status'} full success>Your message here</Alert>
export const info = () => <Alert status={'Your Status'} info>Your message here</Alert>
export const infoFull = () => <Alert status={'Your Status'} full info>Your message here</Alert>
export const warning = () => <Alert status={'Your Status'} warning>Your message here</Alert>
export const warningFull = () => <Alert status={'Your Status'} full warning>Your message here</Alert>
export const danger = () => <Alert status={'Your Status'} danger>Your message here</Alert>
export const dangerFull = () => <Alert status={'Your Status'} full danger>Your message here</Alert>
export const notify = () => <Alert status={'Your Status'} notify imgUrl='https://source.unsplash.com/c-NEiPIxpYI'>Your message here</Alert>