const express = require("express");
const router = express.Router();

//listar as categorias - show.ejs
router.get("/", async(req, res) => {
  res.render("base", {
    title: "Alunos",
    view: "aluno/show"
  });
});

//add categorias -  add.ejs
router.get("/addaluno", (req, res) => {
    res.render("base", {
      title: "Adicionar Alunos",
      view: "aluno/add",
    });
  });
//editar categorias - edit.ejs
router.get("/editaluno", async(req, res) => {
    res.render("base", {
      title: "Editar Alunos",
      view: "aluno/edit",
    });
  });
  module.exports = router;