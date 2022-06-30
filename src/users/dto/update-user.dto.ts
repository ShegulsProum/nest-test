import { CreateUserDto } from './create-user.dto';
import { Field, ID, InputType, PartialType } from '@nestjs/graphql';

@InputType({ description: 'Type for updating a user' })
export class UpdateUserDto extends PartialType(CreateUserDto) {
  @Field(() => ID, { description: 'Id of user' })
  id!: string;
}
