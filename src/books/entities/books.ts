import { Book } from './book.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Array of books' })
export class Books {
  @Field(() => [Book], { description: 'Books' })
  books: Book[];

  @Field(() => Int)
  count: number;

  constructor(books: Book[], count: number) {
    this.books = books;
    this.count = count;
  }
}
