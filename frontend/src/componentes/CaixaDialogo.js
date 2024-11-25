import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader, ModalTitle } from 'react-bootstrap';

function CaixaDialogo(show, setShow, escAtual, id, email, children){
    return(
        <Modal
            show={show}
            onHide={()=>setShow(false)}
            backdrop='static'
            keyboard={false}
        >
            <ModalHeader closeButton>
                <ModalTitle>
                    {escAtual.header}<br/>
                    {id}<br/>
                    {email}
                </ModalTitle>
                <ModalBody>
                    {children}
                </ModalBody>
                <ModalFooter>   
                    <Button variant={escAtual.variant} onClick={()=> setShow(false)}>Cancelar</Button>
                    <Button variant={escAtual.variant} onClick={()=> setShow(false)}>{escAtual.label}</Button>
                </ModalFooter>
            </ModalHeader>
        </Modal>
    )
}

export default CaixaDialogo