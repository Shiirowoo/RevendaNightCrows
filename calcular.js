const div = document.querySelector('.input_calc');
const button = document.querySelector('#calcular');

button.addEventListener('click', () => {
    const quant = Number(document.querySelector('#quant').value);
    const valor = Number(document.querySelector('#valor').value);
    const valorM = Number(document.querySelector('#valorM').value);

    const totalCompra = quant * valor;
    const totalRevenda = quant * valorM - (quant * valorM * 0.05);

    const lucro = totalCompra < totalRevenda ? true : false;

    const diferenca = totalRevenda - totalCompra;


    if(lucro){
        div.innerHTML += `
        <div class="result">
            <p> Você lucrará ${diferenca} Diamantes na Revenda</p>
        </div>
        `
    } else {
        div.innerHTML = `
        <div class="result">
            <p> Você não lucrará Diamantes na Revenda</p>
        </div>
        `
    }
});