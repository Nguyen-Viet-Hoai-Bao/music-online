import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, BaseEntity } from 'typeorm';
import { Song } from './Song.entity';

@Entity()
export class Genre extends BaseEntity{
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  name!: string;

  @ManyToMany(() => Song, song => song.genres)
  songs!: Song[];

  constructor(data?: Partial<Genre>){
    super();
    if(data){
      Object.assign(this, data);
    }
  }

  getName(): string {
    return this.name;
  }
}
