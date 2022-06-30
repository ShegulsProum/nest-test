import { User } from './user.entity';
import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({ description: 'Array of users' })
export class Users {
  @Field(() => [User], { description: 'Users' })
  users: User[];

  @Field(() => Int)
  count: number;

  constructor(users: User[], count: number) {
    this.users = users;
    this.count = count;
  }
}
