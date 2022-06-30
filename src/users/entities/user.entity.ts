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
import { ApiProperty } from '@nestjs/swagger';

@ObjectType({ description: "System's user" })
@Entity()
export class User {
  @Field(() => ID, { description: 'Id of user' })
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id!: string;

  @Field({ nullable: true, description: "User's name" })
  @Column()
  @ApiProperty()
  name: string;

  @Field(() => Float, { description: "User's height", nullable: true })
  @Column()
  @ApiProperty()
  height: number;

  @Field(() => GraphQLISODateTime, {
    description: 'Time of creation',
    nullable: true,
  })
  @CreateDateColumn()
  @ApiProperty()
  created_at?: Date;

  @Field(() => GraphQLISODateTime, {
    description: 'Time of update',
    nullable: true,
  })
  @UpdateDateColumn()
  @ApiProperty()
  updated_at?: Date;
}
