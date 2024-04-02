/*const participante = {
    nome: "Waldomiro",
    email: "Wmiro@gmail.com",
    dataInscricao: new Date(2024, 2, 22, 19, 20),
    dataCheckIn:new Date(2024, 2, 25, 22, 0) 
}
*/
let participantes = [
    {
        nome: "Waldomiro",
        email: "Wmiro@gmail.com",
        dataInscricao: new Date(2024, 2, 22, 19, 20),
        dataCheckIn:new Date(2024, 2, 25, 22, 0) 
    },
    {
        nome: "Antônio",
        email: "antonioreidelas@gmail.com",
        dataInscricao: new Date(2024, 2, 1, 4, 13),
        dataCheckIn:new Date(2024, 2, 2, 15, 30)
    },
    {
        nome: "Renan",
        email: "galeto@gmail.com",
        dataInscricao: new Date(2024, 2, 12, 5, 29),
        dataCheckIn:new Date(2024, 2, 15, 14, 15) 
    },
    {
        nome: "Bruno",
        email: "brunogelokobr@gmail.com",
        dataInscricao: new Date(2024, 2, 22, 12, 0),
        dataCheckIn:new Date(2024, 2, 24, 21, 0) 
    },
    {
        nome: "Pablo",
        email: "pablitohermanito@gmail.com",
        dataInscricao: new Date(2024, 2, 19, 6, 45),
        dataCheckIn:new Date(2024, 2, 29, 23, 50) 
    },
    {
        nome: "Adam",
        email: "adamadidas@gmail.com",
        dataInscricao: new Date(2024, 2, 2, 11, 20),
        dataCheckIn:new Date(2024, 2, 2, 20, 10) 
    },
    {
        nome: "Matheus",
        email: "matheusgamerpro@gmail.com",
        dataInscricao: new Date(2024, 2, 7, 7, 0),
        dataCheckIn:new Date(2024, 2, 14, 14, 0) 
    },
    {
        nome: "Carlos",
        email: "loscar@gmail.com",
        dataInscricao: new Date(2024, 2, 16, 16, 43),
        dataCheckIn:new Date(2024, 2, 29, 19, 32) 
    },
    {
        nome: "Kaike",
        email: "kaikevascosubiu@gmail.com",
        dataInscricao: new Date(2024, 2, 18, 3, 37),
        dataCheckIn:new Date(2024, 2, 25, 12, 30) 
    },
    {
        nome: "Pedro",
        email: "predo@gmail.com",
        dataInscricao: new Date(2024, 2, 1, 5, 20),
        dataCheckIn:new Date(2024, 2, 27, 23, 59) 
    }
]

const criarNovoParticipante = (participante) => {
    const dataInscricao = dayjs(Date.now().toFixed(participante.dataInscricao))
    const dataCheckIn = dayjs(Date.now().toFixed(participante.dataCheckIn))
    
    return `
<tr>
    <td>
        <strong>
            ${participante.nome}
        </strong>
        <br>
        <small>
            ${participante.email}
        </small>
    </td>
    <td>${dataInscricao}</td>
    <td>${dataCheckIn}</td>
</tr>
`
}

const atualizarLista = (participantes) => {
    let output = ""
    for(let participante of participantes){
        output = output + criarNovoParticipante(participante)
    }
    document.querySelector('tbody').innerHTML = output
}

atualizarLista(participantes)