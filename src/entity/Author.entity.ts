import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Song } from './Song.entity';
import { Album } from './Album.entity';

@Entity()
export class Author {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  fullname!: string;

  @Column()
  avatar!: string;

  @Column()
  dateOfBirth!: Date;

  @OneToMany(() => Song, song => song.author)
  songs!: Song[];

  @OneToMany(() => Album, album => album.author)
  albums!: Album[];
}
