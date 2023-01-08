import React from 'react';
import {confirm} from 'react-bootstrap-confirmation';
import Icon from 'react-crud-icons';

import 'react-crud-icons/dist/css/react-crud-icons.css';

const ConfirmBtn = (props) => {

    function excluir(item){
        let lista = document.getElementById('listaTarefas');
        let obj = document.getElementById(item);
        lista.removeChild(obj);
    }

    let msg = 'Deseja realmente excluir a atividade '+props.texto+' ?';

    const mensagem = async () => {
        const result = 
            await confirm(msg,
                            {
                                title: 'Confirmação de exclusão',
                                okText:'Sim',
                                cancelText:'Não. Eu cliquei sem querer!!',
                                okButtonStyle:'danger'
                            }
                        );
        if(result){
            excluir(props.li);
        }
    };
    return (
        <Icon
            name={props.name}
            tooltip={props.tooltip}
            theme='light'
            size='medium'
            onClick={mensagem}
        />
    );
};

export default ConfirmBtn;