import React from 'react'
import {Form, Container} from 'react-bootstrap'

function FormEdit({nome, setNome, descricao, setDescricao, imagem, setImagem}) {
  return (
    <Container>
        <Form>
            <Form.Group className="mb-3" controlId="nome">
                <Form.Label>Nome do Device</Form.Label>
                <Form.Control 
                    type="text"
                    value={nome}
                    onChange={(e)=> setNome(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="descricao">
                <Form.Label>Descricão</Form.Label>
                <Form.Control 
                    as="textarea" rows='3'
                    value={descricao}
                    onChange={(e)=> setDescricao(e.target.value)}
                />
            </Form.Group>

            <Form.Group className="mb-3" controlId="foto">
                <Form.Label>Foto</Form.Label>
                <Form.Control 
                    type='text'
                    value={imagem}
                    onChange={(e)=> setImagem(e.target.value)}
                />
            </Form.Group>
        </Form>
    </Container>
  )
}

export default FormEdit