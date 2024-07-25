import { Request, Response } from 'express';
import { GenreService } from '../services/Genre.service';

export class GenreController {
  private genreService = new GenreService();

  async getAllGenres(req: Request, res: Response): Promise<void> {
    try {
      const genres = await this.genreService.getAllGenres();
      res.json(genres);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getGenreById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const genre = await this.genreService.getGenreById(id);
      if (genre) {
        res.json(genre);
      } else {
        res.status(404).json({ message: 'Genre not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async createGenre(req: Request, res: Response): Promise<void> {
    try {
      const genre = await this.genreService.createGenre(req.body);
      res.status(201).json(genre);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateGenre(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const updatedGenre = await this.genreService.updateGenre(id, req.body);
      if (updatedGenre) {
        res.json(updatedGenre);
      } else {
        res.status(404).json({ message: 'Genre not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async deleteGenre(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const result = await this.genreService.deleteGenre(id);
      if (result) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: 'Genre not found' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}
