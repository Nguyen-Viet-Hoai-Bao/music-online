import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn, UpdateDateColumn, ManyToOne } from 'typeorm';
import { Song } from './Song.entity';
import { Author } from './Author.entity';

@Entity()
export class Album {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  title!: string;

  @Column()
  imageUrl!: string;

  @Column()
  releaseDate!: Date;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @OneToMany(() => Song, song => song.album)
  songs!: Song[];

  @ManyToOne(() => Author, author => author.albums)
  author!: Author;
}
