import { CreateBookDto } from './create-book.dto';
import { ApiProperty } from '@nestjs/swagger';
import { Field, ID, InputType } from '@nestjs/graphql';

@InputType({ description: 'Type for updating a book' })
export class UpdateBookDto extends CreateBookDto {
  @Field(() => ID)
  @ApiProperty()
  id!: string;
}
