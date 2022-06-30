import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
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
import { User } from '../../users/entities/user.entity';
import { UpdateUserDto } from '../../users/dto/update-user.dto';

@ObjectType()
@Entity()
export class Book {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => ID)
  @ApiProperty()
  id!: string;

  @Column({ nullable: true })
  @ApiProperty()
  @Field({ nullable: true, description: "Book's name" })
  name: string;

  @Column({ nullable: true })
  @ApiProperty()
  @Field({ nullable: true, description: "Book's description" })
  description: string;

  @Column({ nullable: true })
  @ApiProperty()
  @Field(() => Int, {
    nullable: true,
    description: "Book's year of publication",
  })
  yearOfPublication: number;

  // @ApiProperty({ type: () => User })
  @ManyToOne(() => User, (user) => user.ownedBooks)
  // @Field(() => User, {
  //   nullable: true,
  //   description: 'Owner of book',
  // })
  owner: User;

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
