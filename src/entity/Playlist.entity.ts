import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, CreateDateColumn } from 'typeorm';
import { Song } from './Song.entity';
import { User } from './User.entity';
import { PlaylistTypes } from '../enums/PlaylistTypes.enum';

@Entity()
export class Playlist {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  title!: string;

  @Column({
    type: 'enum',
    enum: PlaylistTypes,
    default: PlaylistTypes.User, 
  })
  type!: PlaylistTypes;

  @CreateDateColumn()
  createdAt!: Date;

  @ManyToMany(() => Song, song => song.playlists)
  @JoinTable()
  songs!: Song[];

  @ManyToMany(() => User, user => user.playlists)
  users!: User[];
}
