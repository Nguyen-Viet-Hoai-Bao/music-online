import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from 'typeorm';
import { Song } from './Song.entity';

@Entity()
export class Genre {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  name!: string;

  @ManyToMany(() => Song, song => song.genres)
  songs!: Song[];
}
