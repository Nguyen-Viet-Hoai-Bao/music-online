import { Genre } from '../entities/Genre.entity';

export class GenreService {
  async getAllGenres(): Promise<Genre[]> {
    return Genre.find();
  }

  async getGenreById(id: number): Promise<Genre | null> {
    return Genre.findOneBy({ id });
  }

  async createGenre(data: Partial<Genre>): Promise<Genre> {
    const genre = new Genre(data);
    return genre.save();
  }

  async updateGenre(id: number, data: Partial<Genre>): Promise<Genre | null> {
    const genre = await Genre.findOneBy({ id });
    if (genre) {
      Object.assign(genre, data);
      return genre.save();
    }
    return null;
  }

  async deleteGenre(id: number): Promise<boolean> {
    const result = await Genre.delete({ id });
    return result.affected !== 0;
  }
}
