import React from 'react';
import IconBtn from '../IconBtn';
import ConfirmBtn from '../ConfirmBtn';

function formatar(item){
    if(item.includes('escola')||item.includes('ler')){
        return 'lead fw-normal mb-0 bg-primary ps-2 pe-2 py-2 text-light rounded';
    }
    return 'lead fw-normal mb-0 bg-success ps-2 pe-2 py-2 text-light rounded';
}

function salvar(caixaEdicao, labelEdicao, caixaExclusao, novoValor){
    let cx = document.getElementById(caixaEdicao);
    let lx = document.getElementById(labelEdicao);
    let cd = document.getElementById(caixaExclusao);
    let nw = document.getElementById(novoValor);
    lx.innerHTML = nw.value;
    cx.style.display='none';
    lx.style.display='block';
    cd.style.display='block';
}

function cancelar(caixaEdicao, labelEdicao, caixaExclusao){
    let cx = document.getElementById(caixaEdicao);
    let lx = document.getElementById(labelEdicao);
    let cd = document.getElementById(caixaExclusao);
    cx.style.display='none';
    lx.style.display='block';
    cd.style.display='block';
}

function editar(caixaEdicao, labelEdicao, caixaExclusao, novo, valor){
    let cx = document.getElementById(caixaEdicao);
    let lx = document.getElementById(labelEdicao);
    let cd = document.getElementById(caixaExclusao);
    let nv = document.getElementById(novo);
    nv.value=valor;
    cx.style.display='block';
    lx.style.display='none';
    cd.style.display='none';
}

function List(props) {
  return (
    <ul id='listaTarefas' className='list-group list-group-vertical rounded-0 bg-transparent'>  
      {props.itemsList.map((item, index) => (
        <li id={'tarefa'+index} className='list-group-item align-items-center rounded-0 border-0 bg-transparent' key={index}> 
            <div id={'cxExcluir'+index} className='container'>
                <div className='row align-items-center'>
                    <div className='col'>
                        <div className='form-check'>
                            <input className='form-check-input me-0' type='checkbox'
                            aria-label='...' />
                            
                        </div>
                    </div>
                    <div className='col col-xl-9'>
                        <p id={'lblEditar'+index} className={formatar(item)}>{item}</p>
                    </div>
                    <div className='col col-sm-2'>
                        <div className='flex-row justify-content-end mb-1'>
                            <IconBtn id={'btnEditar'+index} name='edit' tooltip='Editar' 
                                    onClick={()=>{editar('cxEditar'+index,'lblEditar'+index,'cxExcluir'+index,'txtNovoValor'+index,item)}}>
                            </IconBtn>
                            <ConfirmBtn name='delete' tooltip='Excluir' li={'tarefa'+index} texto={item}>
                            </ConfirmBtn>
                        </div>
                    </div>
                </div>
            </div>
            <div id={'cxEditar'+index} style={{display:'none'}}>
                <div className='pb-1'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='flex-row align-items-center'>
                                <input id={'txtNovoValor'+index} type='text' class="form-control form-control-lg" />
                                <div>
                                    <IconBtn name='save' tooltip='Salvar' onClick={()=>{salvar('cxEditar'+index,'lblEditar'+index,'cxExcluir'+index, 'txtNovoValor'+index)}}>
                                    </IconBtn>
                                    <IconBtn name='close' tooltip='Cancelar' onClick={()=>{cancelar('cxEditar'+index,'lblEditar'+index,'cxExcluir'+index)}}>
                                    </IconBtn>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </li>
      ))}
    </ul>
  )
}

export default List;