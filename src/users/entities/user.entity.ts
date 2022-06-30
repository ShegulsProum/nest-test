import {
  Field,
  Float,
  GraphQLISODateTime,
  ID,
  ObjectType,
} from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType({ description: "System's user" })
@Entity()
export class User {
  @Field(() => ID, { description: 'Id of user' })
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field({ nullable: true, description: "User's name" })
  @Column()
  name: string;

  @Field(() => Float, { description: "User's height", nullable: true })
  @Column()
  height: number;

  @Field(() => GraphQLISODateTime, {
    description: 'Time of creation',
    nullable: true,
  })
  @CreateDateColumn()
  created_at?: Date;

  @Field(() => GraphQLISODateTime, {
    description: 'Time of update',
    nullable: true,
  })
  @UpdateDateColumn()
  updated_at?: Date;
}
