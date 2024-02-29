import React from 'react'

import { Main } from '../../layouts/Main/Main'
import { DescriptionProfile } from '../../DescriptionProfile/DescriptionProfile'
import { Top } from "../../Top/Top";
import { ContainerCapsule } from '../../ContainerCapsule/ContainerCapsule';
import { ContainerCarts } from '../../ContainerCarts/ContainerCarts';
import { ContainerExp } from '../../ContainerExp/ContainerExp';


export const Home = () => {
  return (
    <>
      <Main>
        <Top D="Profile" title='PERFIL' /> 
        <DescriptionProfile />
        <Top D="Projects" title='PROYECTOS' /> 
        <ContainerCapsule/>
        <Top D="References" title='REFERENCIAS' /> 
        <ContainerCarts/>
        <Top D="Experience" title='EXPERIENCIA' /> 
        <ContainerExp/>
      </Main>
    </>
  )
}
