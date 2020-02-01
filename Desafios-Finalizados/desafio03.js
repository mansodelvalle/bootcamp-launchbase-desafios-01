/* ============================================
        DESAFIO 3 - Vetores e objetos
   ============================================ */

    const dev = {
        nome: "Marcos Del Valle",
        idade: 22,
        tecnologias: [
            {
                nome: 'C++',
                especialidade: 'Desktop'
            },
            {
                nome: 'Python',
                especialidade: 'Data Science'
            },
            {
                nome: 'Javascript',
                especialidade: 'Web/Mobile'
            }
        ]
    }

    console.log(`O Dev ${dev.nome} tem ${dev.idade} anos e usa a tecnologia ${dev.tecnologias[2].nome} com especialidade em ${dev.tecnologias[2].especialidade}`)