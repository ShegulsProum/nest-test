// @ts-ignore
import { Field, Float, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @Field(() => Int, { description: 'Id of user' })
  @PrimaryGeneratedColumn()
  id!: number;

  @Field({ nullable: true, description: "User's name" })
  @Column()
  name: string;

  @Field(() => Float, { nullable: true })
  @Column()
  height: number;
}
