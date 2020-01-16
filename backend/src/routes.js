const { Router } = require('express');
const axios = require('axios');
const Dev = require('./models/Dev');

const routes = Router()

routes.post('/devs', async (request, response) => {
    const { github_username, techs } = request.body;

    const dateUser = await axios.get(`https://api.github.com/users/${github_username}`)

    const { name = login, avatar_url, bio } = dateUser.data
    
    const techsArray = techs.split(',').map(tech => tech.trim())
//https://rocketseat.com.br/week-10/aulas#2
//    const   dev = await Dev.create({
//         github_username,
//         name,
//         avatar_url,
//         bio,
//         techs: techsArray
//     })

    return response.json({"dev":techsArray})
})

module.exports = routes;