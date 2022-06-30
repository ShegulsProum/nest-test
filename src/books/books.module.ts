import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity';
import { BooksResolver } from './books.resolver';
import { User } from '../users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Book]), TypeOrmModule.forFeature([User])],
  controllers: [BooksController],
  providers: [BooksService, BooksResolver],
})
export class BooksModule {}
