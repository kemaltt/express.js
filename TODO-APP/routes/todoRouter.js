const router = require('express').Router();

// const express=require('express')
// const router=express.Router()

const { addOneTodo, getAllTodos, updateTodo, deleteTodo } = require('../controllers/todoControllers')

router.post('/', addOneTodo)
router.get('/', getAllTodos)
router.patch('/:id', updateTodo)
router.delete('/:id', deleteTodo)

module.exports = router