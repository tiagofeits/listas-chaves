import React, { useState, useEffect } from 'react';

import Button from './components/Button';
import Form from './components/Form';
import Input from './components/Input';
import List from './components/List';

import './App.css';

function ListaTarefas() {
  const [tarefa, setTarefa] = useState('');
  const [itemsList, setItemsList] = useState([]);

  function capturarTexto(event) {
    const inputTarefa = event.target.value;
    
    setTarefa(inputTarefa);
  }
  
  // Adiciona um novo elemento na lista
  function adicionaTarefa(event) {
    //impede refresh na pagina
    event.preventDefault();

    if (!tarefa) {
      return
    };
    
    setItemsList([...itemsList, tarefa]);
    setTarefa('');
  }

  useEffect(() => {
    document.title = 'Tarefa 4 de Listas e Chaves sem Chapolin';
  }, []);

  return (
    <section className='vh-100'>
      <div className='container py-5 h-100'>
        <div className='row d-flex justify-content-center align-items-center h-100'>
        <div className='col'>
        <div className='card titulo' id='list1'>
          <div className='card-body py-4 px-4 px-md-5'>
            <p className='h1 text-center mt-3 mb-4 pb-3 text-primary'>
              <i className='fas fa-check-square me-1'></i>
              <u>Lista de Tarefas do Feitosa</u>
            </p>
          <Form onSubmit={adicionaTarefa}>
          <div className='pb-2'>
              <div className='card'>
                <div className='card-body'>
                  <div className='d-flex flex-row align-items-center'>
                    <Input type='text' placeholder='Escreva sua tarefa' onChange={capturarTexto} value={tarefa} />
                    <div>
                      <Button type='submit'>Adicionar</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr className='my-4'/>
          </Form>
          <List itemsList={itemsList} />
          </div>
          </div>
          </div>
        </div>
      </div>
    </section>
    
  );
}

export default ListaTarefas;