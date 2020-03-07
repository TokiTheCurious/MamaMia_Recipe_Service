const Recipe = require('../models/recipe-model')
const recipeService = require('../service/recipe-service')

module.exports = async (req, res) => {
    switch(req.method.toLowerCase()){
        case 'get':
            return await recipeGetRequests(req, res)
        case 'post':
            return recipeService.createRecipe(req, res)
        case 'put':
            return await recipeService.updateRecipe(req, res)
        case 'delete':
            return await recipeService.deleteRecipe(req, res)
    }
}

recipeGetRequests = async (req, res) => {
    if (req.query){
        if(req.query.id)
            return await recipeService.getRecipeById(req,res)
        if(req.query.search)
            return await recipeService.searchRecipeByTitle(req, res)
    }
    return recipeService.getRecipes(req, res)
}