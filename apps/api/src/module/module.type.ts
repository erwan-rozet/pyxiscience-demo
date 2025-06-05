import { ObjectType, Field, ID, InputType } from '@nestjs/graphql';

@ObjectType()
export class ModuleType {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  category: string;

  @Field()
  color: string;
}

@InputType()
export class CreateModuleInput {
  @Field()
  title: string;

  @Field()
  category: string;

  @Field()
  color: string;
}
