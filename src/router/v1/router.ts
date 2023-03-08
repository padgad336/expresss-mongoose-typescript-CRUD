import { Router } from 'express';
import { createBook, deleteBook, getAllBook, updateBook } from './controller/book/controller';
import { validationPost } from './controller/book/validate';

const router = Router();

router.route('/book')
.get(getAllBook)
.post(validationPost, createBook);
router.route('/book/:bookId')
.delete(deleteBook)
.put(validationPost, updateBook);

export default router;
