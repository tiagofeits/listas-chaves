import React from 'react';
import IconBtn from '../IconBtn';

function formatar(item){
    if(item.includes('escola')||item.includes('ler')){
        return 'lead fw-normal mb-0 bg-warning w-100 ps-2 pe-2 py-2 text-light rounded';
    }
    return 'lead fw-normal mb-0 bg-success w-100 ps-2 pe-2 py-2 text-light rounded';
}

function salvar(caixaEdicao, textoEdicao, caixaExclusao){
    let cx = document.getElementById(caixaEdicao);
    let tx = document.getElementById(textoEdicao);
    let cd = document.getElementById(caixaExclusao);
    tx.value = cx.value;
    cx.style.display='none';
    tx.style.display='block';
    cd.style.display='block';
}

function fechar(caixaEdicao, textoEdicao, caixaExclusao){
    let cx = document.getElementById(caixaEdicao);
    let tx = document.getElementById(textoEdicao);
    let cd = document.getElementById(caixaExclusao);
    cx.style.display='none';
    tx.style.display='block';
    cd.style.display='block';
}

function editar(caixaEdicao, textoEdicao, caixaExclusao, novo, valor){
    let cx = document.getElementById(caixaEdicao);
    let tx = document.getElementById(textoEdicao);
    let cd = document.getElementById(caixaExclusao);
    let nv = document.getElementById(novo);
    nv.value=valor;
    cx.style.display='block';
    tx.style.display='none';
    cd.style.display='none';
}

function excluir(item, val){
    let lista = document.getElementById('listaTarefas');
    let obj = document.getElementById(item);
    if(window.confirm('Deseja realmente excluir a tarefa ' + val + '?')){
        lista.removeChild(obj);
    }
}

function List(props) {
  return (
    <ul id='listaTarefas' className='list-group list-group-vertical rounded-0 bg-transparent'>  
      {props.itemsList.map((item, index) => (
        <li id={'tarefa'+index} className='list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent' key={index}>
            <div className='form-check'>
                <input className='form-check-input me-0' type='checkbox'
                aria-label='...' checked />
            </div>
            <p id={'lblEditar'+index} className={formatar(item)}>{item}</p>
            <div id={'cxEditar'+index} style={{display:'none'}}>
            <div className='pb-2'>
              <div className='card'>
                <div className='card-body'>
                <div className='flex-row align-items-center'>
                    <input id={'txtNovoValor'+index} type='text' class="form-control form-control-lg" />
                    <div>
                        <IconBtn name='save' tooltip='Salvar' onClick={()=>{salvar('cxEditar'+index,'lblEditar'+index,'cxExcluir'+index)}}>
                        </IconBtn>
                        <IconBtn name='close' tooltip='Cancelar' onClick={()=>{fechar('cxEditar'+index,'lblEditar'+index,'cxExcluir'+index)}}>
                        </IconBtn>
                    </div>
                </div>
                </div>
                </div>
                </div>
            </div>
            <div id={'cxExcluir'+index} className='flex-row justify-content-end mb-1'>
                <IconBtn id={'btnEditar'+index} name='edit' tooltip='Editar' 
                        onClick={()=>{editar('cxEditar'+index,'lblEditar'+index,'cxExcluir'+index,'txtNovoValor'+index,item)}}>
                </IconBtn>
                <IconBtn name='delete' tooltip='Excluir' onClick={()=>{excluir('tarefa'+index, item)}}>
                </IconBtn>
            </div>
        </li>
      ))}
    </ul>
  )
}

export default List;