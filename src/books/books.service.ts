import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';
import { Books } from './entities/books';
import { User } from '../users/entities/user.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.bookRepository.find();
  }

  async findAllWithCount(): Promise<Books> {
    let [books, count] = await this.bookRepository.findAndCount();
    return new Books(books, count);
  }

  findOne(id: string) {
    return this.bookRepository.findOneBy({ id });
  }

  create(createBookDto: CreateBookDto) {
    return this.bookRepository.save(createBookDto);
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    let bookToUpdate = await this.bookRepository.findOneBy({ id });

    if (updateBookDto.name) bookToUpdate.name = updateBookDto.name;
    if (updateBookDto.description)
      bookToUpdate.description = updateBookDto.description;

    if (updateBookDto.yearOfPublication)
      bookToUpdate.yearOfPublication = updateBookDto.yearOfPublication;

    if (updateBookDto.ownerId)
      bookToUpdate.owner = await this.userRepository.findOneBy({
        id: updateBookDto.ownerId,
      });

    return this.bookRepository.save(bookToUpdate);
  }

  async remove(id: string): Promise<void> {
    await this.bookRepository.delete(id);
  }
}
