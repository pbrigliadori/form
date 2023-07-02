function meuEscopo() {
    const form = document.querySelector('.form')
    const resultado =document.querySelector('.resultado')

    const pessoas = [];

    let contador = 1;
    function recebeEventoform(evento) {
        evento.preventDefault();

        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const cpf = form.querySelector('.cpf').value;
        const rg = form.querySelector('.rg').value;

        pessoas.push({
            nome : nome,
            sobrenome : sobrenome,
            cpf : cpf,
            rg : rg,
        });
        console.log(pessoas)
        resultado.innerHTML +=`<p> ${nome} ${sobrenome} ${cpf} ${rg}`;
        
    }
    form.addEventListener('submit', recebeEventoform)

}
meuEscopo();