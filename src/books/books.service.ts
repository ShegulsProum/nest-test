import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './entities/book.entity';

@Injectable()
export class BooksService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  findAll() {
    return this.bookRepository.find();
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

    return this.bookRepository.save(bookToUpdate);
  }

  async remove(id: string): Promise<void> {
    await this.bookRepository.delete(id);
  }
}
