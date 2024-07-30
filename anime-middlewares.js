const listaAnimes = require("../mocks/listaAnimes")

function middlewareGetAnimeById(req, res, next) {
    const { id } = req.params;
    const anime = listaAnimes.find(anime => anime.id === Number(id));
    
    if(!anime){
        return res.status(404).send("Anime Não Encontrado")
    }

    next();
}

function middlewaresInsertAnime(req, res, next) {
    const {
        nome,
        ano,
        genero,
        imagem,
        sinopse
    } = req.body;

    if(
        !nome || !ano || !genero || !imagem || !sinopse){
            return res.status(400).send("Dados Incompletos");
    }

    const anime = listaAnimes.find(anime => anime.nome === nome);

    if(anime){
        return res.status(400).send("Anime Já Cadastrado");
    }
    next();

}

function middlewareUpdateAnime(req, res, next) {
    const { id } = req.params;
    const {episodios} = req.body;

    if(!id || !episodios){
        return res.status(404).send("Anime Não Encontrado");
    }

    next();
}

function middlewareDeleteAnime(req, res, next) {
    const { id } = req.params;

    if(!id){
        return res.status(400).send("Dados Incompletos");
    }

    const anime = listaAnimes.find(anime => anime.id === Number(id));

    if(!anime){
        return res.status(404).send("Anime Não Encontrado")
    }

    next();

}


module.exports =  {
    middlewareGetAnimeById,
    middlewaresInsertAnime,
    middlewareUpdateAnime,
    middlewareDeleteAnime
}
