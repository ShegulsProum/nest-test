import { CreateUserInput } from './create-user.input';
import { Field, Float, InputType, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => Int, { description: 'Id of user', nullable: true })
  id!: number;

  @Field({ nullable: true, description: "User's name" })
  name: string;

  @Field(() => Float, { nullable: true })
  height: number;
}
