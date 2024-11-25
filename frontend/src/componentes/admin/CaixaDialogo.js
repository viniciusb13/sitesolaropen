import React from "react";

import {Button, Modal, ModalTitle, ModalHeader, ModalBody, ModalFooter} from "react-bootstrap"


const CaixaDialogo = ({show, setShow, escAtual, children, id, email})=>{
    const acao = ()=>{
        escAtual.callback(id, children[1].props)
        console.log(children)
        setShow(false)
    }
    return(
        <Modal
            show={show}
            onHide={()=> setShow(false)}
            backdrop="static"
            keyboard={false}
        >
            <ModalHeader closeButton>
                <ModalTitle>
                    {escAtual.header}<br/>
                    {id}<br/>
                    {email}
                </ModalTitle>
            </ModalHeader>
            <ModalBody>
                {children}
            </ModalBody>
            <ModalFooter>
                <Button variant={escAtual.variant} onClick={()=>setShow(false)}>Fechar</Button>
                <Button variant={escAtual.variant} onClick={()=>acao()}>{escAtual.label}</Button>
            </ModalFooter>
    </Modal>
    )
}
export default CaixaDialogo

