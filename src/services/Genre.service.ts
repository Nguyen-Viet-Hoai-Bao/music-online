import { AppDataSource } from '../config/data-source';
import { Genre } from '../entities/Genre.entity';

const genreRepository = AppDataSource.getRepository(Genre);

export const getGenres = async () => {
  return genreRepository.find();
};

export const createGenre = async (data: Partial<Genre>) => {
  try {
    const genre = new Genre(data);
    await genre.save();
    return genre;
  } catch (error) {
    throw new Error('Error creating genre');
  }
};

export const getGenreById = async (genreId: number) => {
  try {
    return await genreRepository.findOne({ where: { id: genreId }, relations: ['songs'] });
  } catch (error) {
    throw new Error('Error fetching genre');
  }
};

export const updateGenre = async (genreId: number, data: Partial<Genre>) => {
  try {
    const genre = await genreRepository.findOne({ where: { id: genreId } });
    if (!genre) {
      throw new Error('Genre not found');
    }
    Object.assign(genre, data);
    await genre.save();
    return genre;
  } catch (error) {
    throw new Error('Error updating genre');
  }
};

export const deleteGenre = async (genreId: number) => {
  try {
    const genre = await genreRepository.findOne({ where: { id: genreId } });
    if (!genre) {
      throw new Error('Genre not found');
    }
    await genre.remove();
  } catch (error) {
    throw new Error('Error deleting genre');
  }
};
