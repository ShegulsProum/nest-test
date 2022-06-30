import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
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

  findOne(id: number): Promise<User> {
    return this.usersRepository.findOneBy({ id });
  }

  create(createUserInput: CreateUserInput) {
    return this.usersRepository.save(createUserInput);
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    let userToUpdate = await this.usersRepository.findOneBy({ id });

    if (updateUserInput.name) userToUpdate.name = updateUserInput.name;
    if (updateUserInput.height) userToUpdate.height = updateUserInput.height;

    return this.usersRepository.save(userToUpdate);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
