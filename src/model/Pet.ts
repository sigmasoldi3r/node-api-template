import { Entity, Column, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * Example model entity.
 */
@Entity()
export default class Pet extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number;

  @Column()
    name: string;
}
