// Commented for test purposes with mocked data

// import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
// import { ModuleService } from './module.service';
// import { Module } from './entities/module.entity';
// import { CreateModuleInput } from './dto/create-module.input';
// import { UpdateModuleInput } from './dto/update-module.input';

// @Resolver(() => Module)
// export class ModuleResolver {
//   constructor(private readonly moduleService: ModuleService) {}

//   @Mutation(() => Module)
//   createModule(@Args('createModuleInput') createModuleInput: CreateModuleInput) {
//     return this.moduleService.create(createModuleInput);
//   }

//   @Query(() => [Module], { name: 'module' })
//   findAll() {
//     return this.moduleService.findAll();
//   }

//   @Query(() => Module, { name: 'module' })
//   findOne(@Args('id', { type: () => Int }) id: number) {
//     return this.moduleService.findOne(id);
//   }

//   @Mutation(() => Module)
//   updateModule(@Args('updateModuleInput') updateModuleInput: UpdateModuleInput) {
//     return this.moduleService.update(updateModuleInput.id, updateModuleInput);
//   }

//   @Mutation(() => Module)
//   removeModule(@Args('id', { type: () => Int }) id: number) {
//     return this.moduleService.remove(id);
//   }
// }

import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ModuleService } from './module.service';
import { CreateModuleInput, ModuleType } from './module.type';

@Resolver(() => ModuleType)
export class ModuleResolver {
  constructor(private moduleService: ModuleService) {}

  @Query(() => [ModuleType])
  modules() {
    return this.moduleService.findAll();
  }

  @Mutation(() => ModuleType)
  createModule(@Args('input') input: CreateModuleInput) {
    return this.moduleService.create(input);
  }
}
