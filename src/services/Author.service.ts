import { AppDataSource } from '../config/data-source';
import { Author } from '../entities/Author.entity';

const authorRepository = AppDataSource.getRepository(Author);

export class AuthorService {
  private authorRepository = AppDataSource.getRepository(Author);

  async getIndexDataAuthor() {
    return await this.authorRepository.count();
  }
}

export const getAuthors = async () => {
  return  authorRepository.find();
};

export const createAuthor = async (data: Partial<Author>) => {
  try {
    const author = new Author(data);
    await author.save();
    return author;
  } catch (error) {
    throw new Error('Error creating author');
  }
};

export const getAuthorById = async (authorId: number) => {
  try {
    return await Author.findOne({ where: { id: authorId }, relations: ['songs', 'albums'] });
  } catch (error) {
    throw new Error('Error fetching author');
  }
};

export const updateAuthor = async (authorId: number, data: Partial<Author>) => {
  try {
    const author = await Author.findOne({ where: { id: authorId } });
    if (!author) {
      throw new Error('Author not found');
    }
    Object.assign(author, data);
    await author.save();
    return author;
  } catch (error) {
    throw new Error('Error updating author');
  }
};

export const deleteAuthor = async (authorId: number) => {
  try {
    const author = await Author.findOne({ where: { id: authorId } });
    if (!author) {
      throw new Error('Author not found');
    }
    await author.remove();
  } catch (error) {
    throw new Error('Error deleting author');
  }
};