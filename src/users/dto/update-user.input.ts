import { CreateUserInput } from './create-user.input';
import { Field, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType({ description: 'Type for updating a user' })
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => Int, { description: 'Id of user' })
  id!: number;
}
