import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Song } from './Song.entity';
import { User } from './User.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('text', { nullable: false })
  content!: string;

  @CreateDateColumn()
  createdAt!: Date;

  @ManyToOne(() => Song, song => song.comment)
  song!: Song;

  @ManyToOne(() => User, user => user.comments)
  user!: User;
}
