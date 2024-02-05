document.addEventListener('DOMContentLoaded', function(){
    const nome = document.querySelector('#name')
    const usuario = document.querySelector('#username')
    const avatar = document.querySelector('#avatar')
    const repositorios = document.querySelector('#repositorio')
    const seguidores = document.querySelector('#followers')
    const seguindo = document.querySelector('#following')
    const link = document.querySelector('#link')

    fetch('https://api.github.com/users/marcelokg')
        .then(function(resposta){
            return resposta.json()
        })
        .then(function(json){
            nome.innerText = json.name
            usuario.innerText = json.login
            avatar.src = json.avatar_url
            seguidores.innerText = json.followers
            seguindo.innerText = json.following
            repositorios.innerText = json.public_repos
            link.href = json.html_url
        })
        .catch(function(erro){
            alert("Ocorreu um erro. Tente novamente")
        })
})