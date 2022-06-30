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
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Book } from '../../books/entities/book.entity';

@ObjectType({ description: "System's user" })
@Entity()
export class User {
  @Field(() => ID, { description: 'Id of user' })
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id!: string;

  @Field({ nullable: true, description: "User's name" })
  @Column({ nullable: true })
  @ApiProperty()
  name: string;

  @Field(() => Float, { description: "User's height", nullable: true })
  @Column({ nullable: true })
  @ApiProperty()
  height: number;

  @ApiProperty({ type: () => [Book] })
  @Field(() => [Book], {
    nullable: true,
    description: "Book's year of publication",
  })
  @OneToMany(() => Book, (book) => book.owner)
  ownedBooks: Book[];

  @Field(() => GraphQLISODateTime, {
    description: 'Time of creation',
    nullable: true,
  })
  @CreateDateColumn()
  @ApiProperty()
  created_at: Date;

  @Field(() => GraphQLISODateTime, {
    description: 'Time of update',
    nullable: true,
  })
  @UpdateDateColumn()
  @ApiProperty()
  updated_at: Date;
}
