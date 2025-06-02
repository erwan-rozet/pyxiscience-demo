import { ObjectType, Field, ID } from '@nestjs/graphql';

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
