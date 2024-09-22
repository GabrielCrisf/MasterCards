export function paus(){

    const Paus ={
        "1": {
            "MAO": "(REAÇÃO): 'Quando um CardFigura ativar seu efeito no CAMPO; “Envie este card da sua MÃO para o LIXO; “Negue o efeito.",
            "CAMPO": "N/A",

            "DESCT": `(REAÇÃO): 'Quando este card for “Descartado: Escolha um dos efeitos a seguir:
            ”Compre um card, e depois, ”Descarte um card.
            ”Devolva um card da MÃO para o DECK.`,

            "TIPO": "CardNumero"
        },

        "2": {
            "MAO": "Quando um descarta for declarado, envie este card para o [LIXO]; half o valor do “Descarte",
            "CAMPO": `(AÇÃO): 'Escolha 1 card no LIXO; “Recupere-o para sua MÃO.`,
            "DESCT": `(REAÇÃO): 'Quando este card for “Descartado: “Recupere 1 card do LIXO para a MÃO.`,
            "TIPO": "CardNumero"
        },
        "3": {
            "MAO": `(REAÇÃO): 'Quando um efeito no LIXO, ou que adicionaria cards do LIXO para a mão ou DECK for ativado: “Envie este card da sua MÃO para o LIXO; “Negue o efeito.`,
            "CAMPO": `“Revele os 5 cards do topo do DECK, e depois, “Adicione um CardFigura entre os cards revelados.`,
            "DESCT": `'Quando este card for “Descartado: Devolva 2 cards aleatórios da MÃO do seu oponente para o DECK.`,
            "TIPO": `(REAÇÃO): 'Se a ativação de quaisquer dos efeitos destes cards for negada: “Descarte 3 cards do topo do DECK; “Negue a ativação do efeito aplicado contra estes cards.`
        },

        "4": {
            "MAO": ``,
            "CAMPO": `(AÇÃO): “Descarte um card da MÃO para o LIXO.`,
            "DESCT": ``,
            "TIPO": ``
        },
        "5": {
            "MAO": ``,
            "CAMPO": `(AÇÃO): “Devolva um card da MÃO para o DECK.`,
            "DESCT": ``,
            "TIPO": ``
        },
        "6": {
            "MAO": `(AÇÃO):Uma vez por turno se você tiver menos cards que seu oponente: 'Revele este card da sua MÃO; “Devolva-o para o DECK e depois, compre 2 cards.`,
            "CAMPO": ``,
            "DESCT": ``,
            "TIPO": ``
        },
        "7": {
            "MAO": `(REAÇÃO): 'Se seu oponente te fizer descartar sete cards enquanto você tiver um card “7” na MÃO, 'Revele e 'Envie quantos cards “7” possíveis da sua MÃO e ative apenas um dos efeitos:
                * “Compre 2 cards para cada card “7” revelado.
                * “Descarte 7 cards do topo do DECK do seu oponente para cada card “7” revelado.`,
            "CAMPO": ``,
            "DESCT": ``,
            "TIPO": ``
        },
        "8": {
            "MAO": `Uma vez por turno se você tiver dois do mesmo card “10”, “9“ ou “8” na sua MÃO: 'Revele dois destes cards iguais, 'Envie um deles para o LIXO e depois “Compre 2 cards. Você só pode ativar este efeito se tiver ou controlar a mesma quantidade de cards ou menos que seu oponente.`,
            "CAMPO": ``,
            "DESCT": ``,
            "TIPO": ``
        },
        "9": {
            "MAO": `Uma vez por turno se você tiver dois do mesmo card “10”, “9“ ou “8” na sua MÃO: 'Revele dois destes cards iguais, 'Envie um deles para o LIXO e depois “Compre 2 cards. Você só pode ativar este efeito se tiver ou controlar a mesma quantidade de cards ou menos que seu oponente.`,
            "CAMPO": ``,
            "DESCT": ``,
            "TIPO": ``
        },
        "10": {
            "MAO": `Uma vez por turno se você tiver dois do mesmo card “10”, “9“ ou “8” na sua MÃO: 'Revele dois destes cards iguais, 'Envie um deles para o LIXO e depois “Compre 2 cards. Você só pode ativar este efeito se tiver ou controlar a mesma quantidade de cards ou menos que seu oponente.`,
            "CAMPO": ``,
            "DESCT": ``,
            "TIPO": ``
        },
    
    
        "K": {
            "MAO": `(REAÇÃO): 'Quando um efeito ou descarte for ativado: “Inverta o jogador que irá realizar o descarte/efeito.`,
            "CAMPO": ``,
            "DESCT": ``,
            "TIPO": ``
        },
        "Q": {
            "MAO": `(REAÇÃO): 'Quando um efeito ou descarte for ativado: “Inverta a ação que jogador irá realizar. `,
            "CAMPO": ``,
            "DESCT": ``,
            "TIPO": ``
        },
        "J": {
            "MAO": ``,
            "CAMPO": `(AÇÃO): “Compre 2 Cards.`,
            "DESCT": ``,
            "TIPO": ``
        },
        "Joker": {
            "MAO": `(REAÇÃO RÁPIDA): 'Quando um efeito no CAMPO for ativado: “Negue o efeito e “Envie esse card que ativou para o LIXO.`,
            "CAMPO": ``,
            "DESCT": ``,
            "TIPO": ``
        }
    }
    
    return Paus
     
}
    