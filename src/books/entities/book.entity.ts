import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import {
  Field,
  GraphQLISODateTime,
  ID,
  Int,
  ObjectType,
} from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  @ApiProperty()
  id!: string;

  @Column()
  @ApiProperty()
  @Field({ nullable: true, description: "Book's name" })
  name: string;

  @Column()
  @ApiProperty()
  @Field({ nullable: true, description: "Book's description" })
  description: string;

  @Column()
  @ApiProperty()
  @Field(() => Int, {
    nullable: true,
    description: "Book's year of publication",
  })
  yearOfPublication: number;

  @CreateDateColumn()
  @ApiProperty()
  @Field(() => GraphQLISODateTime, {
    description: 'Time of creation',
    nullable: true,
  })
  created_at: Date;

  @UpdateDateColumn()
  @ApiProperty()
  @Field(() => GraphQLISODateTime, {
    description: 'Time of update',
    nullable: true,
  })
  updated_at: Date;
}
