function comprar(){
  let quantidade = document.getElementById('qtd').value;
     
  let ingresso = document.getElementById('tipo-ingresso').value;
  
  let valorUnitario = document.getElementById(`qtd-${ingresso}`);
  
    if(valorUnitario.textContent <= 0){
    alert(`Os ingressos para ${ingresso} acabaram, volte mais tarde!!`);
    return;
    }  else if(quantidade < 1){
    alert('Número insuficiente!!');
    return;
    } 

    valorUnitario.textContent = valorUnitario.textContent - quantidade; 
 
}