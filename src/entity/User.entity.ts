import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import { Playlist } from './Playlist.entity';
import { Song } from './Song.entity';
import { Comment } from './Comment.entity';
import { SuggestedSong } from './SuggestedSong.entity';
import { UserRoles } from '../enums/UserRoles.enum';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  username!: string;

  @Column({ nullable: false })
  email!: string;

  @Column({ nullable: false })
  password!: string;

  @Column()
  dateOfBirth!: Date;

  @Column({
    type: 'enum',
    enum: UserRoles,
    default: UserRoles.Guess, 
  })
  role!: UserRoles;

  @CreateDateColumn()
  createdAt!: Date; 

  @UpdateDateColumn()
  updatedAt!: Date; 

  @ManyToMany(() => Playlist, playlist => playlist.users)
  @JoinTable()
  playlists!: Playlist[];

  @ManyToMany(() => Song, song => song.favoritedBy)
  @JoinTable()
  favoriteSongs!: Song[];

  @OneToMany(() => Comment, comment => comment.user)
  comments!: Comment[];

  @OneToMany(() => SuggestedSong, suggestedSong => suggestedSong.user)
  suggestedSongs!: SuggestedSong[];
}
