
import { Request,Response,NextFunction } from "express"

export const validationPost = (req: Request, res: Response, next: NextFunction) => {
  try {
    const { title, author, description } = req.body
    if (!title || title.trim() === '') {
      res.status(400).json({
        status: 400,
        code: 'ERROR_TITLE_REQUIRED',
        message: 'Title is required',
      })
    } else if (!author || author.trim() === '') {
      res.status(400).json({
        status: 400,
        code: 'ERROR_AUTHOR_REQUIRED',
        message: 'Author is required',
      })
    } else if (!description || description.trim() === '' ) {
      res.status(400).json({
        status: 400,
        code: 'ERROR_DESCRIPTION_REQUIRED',
        message: 'Description is required',
      })
    } else {
      next()
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({
      status: 500,
      code: 'ERROR_INTERNAL_SERVER',
      message: 'Unknown Internal Server Error.',
    })
  }
}

