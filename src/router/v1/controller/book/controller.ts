import { Request, Response, NextFunction } from 'express';
import BookModel from '../../../../models/book';
import functionResponseError from '../../components/responseError';

export const getAllBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await BookModel.find();
    if (response) {
      res.status(200).json(response);
    }
  } catch (e) {
    functionResponseError(e, res);
  }
};

export const createBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, author, description } = req.body;

    const bookData = {
      title,
      author,
      description,
    };
    const response = await BookModel.create(bookData);
    console.log(response);
    if (response) {
      res.status(200).json({
        status: 200,
        code: 'SUCCESS_Collector_CREATE',
        message: 'Created Collector Success.',
      });
    }
  } catch (e) {
    functionResponseError(e, res);
  }
};
export const deleteBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { bookId } = req.params;
    const response = await BookModel.findByIdAndRemove({ _id: bookId });
    console.log(response);
    if (response) {
      res.status(200).json({
        status: 200,
        code: 'SUCCESS_BOOK_REMOVE',
        message: 'Removed Book Success.',
      });
    }
  } catch (e) {
    functionResponseError(e, res);
  }
};
export const updateBook = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { LecturerId } = req.params;
    const { title, author, description } = req.body;
    const bookData = {
      title,
      author,
      description,
    };
    const response = await BookModel.findByIdAndUpdate(
      {
        _id: LecturerId,
      },
      bookData,
    );
    console.log(response);
    if (response) {
      res.status(200).json({
        status: 200,
        code: 'SUCCESS_LECTURER_CREATE',
        message: 'Updated Lecturer Success.',
      });
    }
  } catch (e) {
    functionResponseError(e, res);
  }
};
