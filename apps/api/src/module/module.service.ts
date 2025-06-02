import { Injectable } from '@nestjs/common';
import { CreateModuleInput } from './dto/create-module.input';
import { UpdateModuleInput } from './dto/update-module.input';
import { PrismaClient } from '@prisma/client';
import { mockModules } from './data';

const prisma = new PrismaClient();

// @Injectable()
// export class ModuleService {
//   create(createModuleInput: CreateModuleInput) {
//     return 'This action adds a new module';
//   }

//   findAll() {
//     return `This action returns all module`;
//   }

//   findOne(id: number) {
//     return `This action returns a #${id} module`;
//   }

//   update(id: number, updateModuleInput: UpdateModuleInput) {
//     return `This action updates a #${id} module`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} module`;
//   }
// }

// @Injectable()
// export class ModuleService {
//   async findAll() {
//     return prisma.module.findMany();
//   }
// }
@Injectable()
export class ModuleService {
  findAll() {
    return mockModules;
  }
}
