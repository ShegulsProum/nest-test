import { Field, Float, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => Int, { description: 'Id of user', nullable: true })
  id!: number;

  @Field({ nullable: true, description: "User's name" })
  name: string;

  @Field(() => Float, { nullable: true })
  height: number;
}
