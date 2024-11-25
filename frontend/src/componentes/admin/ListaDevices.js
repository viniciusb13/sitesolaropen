import React from 'react'
import styled from 'styled-components'
import {Container, Table, Image} from "react-bootstrap"
import {useApi} from '../../hooks/useApi'
import moment from 'moment'
import Userfront from '@userfront/react'
import jwtDecode from 'jwt-decode'


Userfront.init("qbjqg94n")


const Foto = styled(Image)`
    height: 50px;
`;

const ListaDevices = ()=>{
    const userData = jwtDecode(Userfront.idToken())
    const email = userData.email
    const {data} = useApi(`/devices/${email}`)
    return(
        <Container>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Device</th>
                        <th>Data de cadastro</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.message?.map(projeto =>{
                        return(<tr>
                            <td><Foto src={projeto.imagem} thumbnail /></td>
                            <td>{projeto.nome}</td>
                            <td>{moment(projeto.data).format('DD-MM-YYYY')}</td>
                        </tr>)
                    })}
                </tbody>
            </Table>
        </Container>
    )
}
export default  ListaDevices
 