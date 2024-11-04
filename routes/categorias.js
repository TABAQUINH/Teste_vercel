const express = require('express');
const router = express.Router();

//listar as categorias - show.ejs
router.get('/categorias', async(req, res) => {
  res.render("base", {
    title: "Categorias",
    view: "categorias/show"
  });
});

//add categorias -  add.ejs
router.get('/add', async(req, res) => {
    res.render("base", {
      title: "Adicionar Categorias",
      view: "categorias/add"
    });
  });
//editar categorias - edit.ejs
router.get('/edit', async(req, res) => {
    res.render("base", {
      title: "Editar Categorias",
      view: "categorias/edit"
    });
  });
  module.exports = router;