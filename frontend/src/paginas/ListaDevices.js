import React from 'react';
import Table from 'react-bootstrap/Table';
import Image from 'react-bootstrap/Image';
import styled from 'styled-components';
import {useApi} from '../hooks/useApi';
import moment from 'moment';

const Foto = styled(Image)`
    height: 100px;
`;

const ListaDevices = ()=>{
    const {data} = useApi('/devices')
    return(
        <div>
            <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>Foto</th>
                        <th>Device</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.data?.message?.map(item =>{
                        return(
                            <tr>
                            <td><Foto src = {item.imagem}></Foto></td>
                            <td>{item.nome}</td>
                            <td>{moment(item.data).format('DD-MM-AAAA')}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </Table>
        </div>
    )
}
export default ListaDevices