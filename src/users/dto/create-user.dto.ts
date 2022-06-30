import { Field, Float, InputType } from '@nestjs/graphql';

@InputType({ description: 'Type for creating a user' })
export class CreateUserDto {
  @Field({ nullable: true, description: "User's name" })
  name: string;

  @Field(() => Float, { description: 'Height of user', nullable: true })
  height: number;
}
