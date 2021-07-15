function enviarForm() {
    const nomeVal = document.querySelector('#nome') //Pega o que input de Nome
    const nome = String(nomeVal.value) //Transforma o input em string

    const emailVal = document.querySelector('#email') //Pega o que input de Email
    const email = String(emailVal.value) //Transforma o input em string

    const formInfos = `Nome: ${nome} - Email: ${email}` //Template string pegando as infos do form

    localStorage.setItem('formInfos', formInfos) // Armazena os infos do form no LocalStorage

    alert(`Obrigado ${nome}, seu email ${email} foi cadastrado com sucesso. Você receberá nossas novas promoções ;)`)
}