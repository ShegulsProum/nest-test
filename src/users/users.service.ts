import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Users } from './entities/users';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  count(): Promise<number> {
    return this.usersRepository.count();
  }

  async findAll(): Promise<Users> {
    let users = await this.usersRepository.find();
    let count = await this.count();

    return new Users(users, count);
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  create(createUserInput: CreateUserDto) {
    return this.usersRepository.save(createUserInput);
  }

  async update(id: string, updateUserInput: UpdateUserDto) {
    let userToUpdate = await this.usersRepository.findOneBy({ id });

    if (updateUserInput.name) userToUpdate.name = updateUserInput.name;
    if (updateUserInput.height) userToUpdate.height = updateUserInput.height;

    return this.usersRepository.save(userToUpdate);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
