import express from 'express';
import { getQuestionsBySubject, createQuestion, updateQuestion, deleteQuestion } from '../controllers/questionController.js';

const router = express.Router();

router.get('/:subject', getQuestionsBySubject);
router.post('/', createQuestion);
router.put('/:id', updateQuestion);
router.delete('/:id', deleteQuestion);

export default router;
