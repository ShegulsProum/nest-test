import { ApiProperty } from '@nestjs/swagger';
import { Field, InputType, Int } from '@nestjs/graphql';
import { Column } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { UpdateUserDto } from '../../users/dto/update-user.dto';

@InputType({ description: 'Type for creating a book' })
export class CreateBookDto {
  @Field({ nullable: true, description: "Book's name" })
  @ApiProperty()
  name?: string;

  @Field({ nullable: true, description: "Book's description" })
  @ApiProperty()
  description?: string;

  @Field(() => Int, {
    nullable: true,
    description: "Book's year of publication",
  })
  @ApiProperty()
  yearOfPublication?: number;

  @Field({ nullable: true, description: 'Id of book owner' })
  @ApiProperty()
  ownerId: string;
}
