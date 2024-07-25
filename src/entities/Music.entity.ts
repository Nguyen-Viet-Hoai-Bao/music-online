import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn, ManyToMany, JoinTable, OneToMany, OneToOne, BaseEntity } from 'typeorm';

@Entity()
export class Song extends BaseEntity{
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ nullable: false })
  title!: string;

  @Column({ nullable: false })
  artist!: string;

  @Column('text')
  lyrics!: string;

  @Column()
  imageUrl!: string;

  @Column({ nullable: false })
  url!: string;
  
}
