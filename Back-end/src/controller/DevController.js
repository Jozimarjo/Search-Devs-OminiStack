const Dev = require('../models/Dev');
const axios = require('axios');
const parseStringAsArray = require('../utils/parseStringAsArray');

let produtos = [{id: '1', nome: 'PRoduto Default', descricao: 'descrica Default', img: ''}]

module.exports = {//index, show, store, update, destroy
    async index(req, res) {
        const devs = await Dev.find();
        return res.json(devs);
    },
    async store(req, resp) {
        const {github_username, techs, longitude, latitude} = req.body;
        let dev = await Dev.findOne({github_username});
        if (!dev) {
            const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
            const {name = login, avatar_url, bio} = apiResponse.data;

            const techsArray = parseStringAsArray(techs);

            const location = {
                type: 'Point',
                coordinates: [longitude, latitude]
            };

            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location
            });

        }
        return resp.json(dev)
    },

    async prod(req, resp) {
        const {nome, descricao, img} = req.body;
        const produto = {nome, descricao, img}
        produto.id = produtos.length + 1;
        console.log(produtos.push(produto))
        return resp.json(produtos)
    }
};