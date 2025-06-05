import { Injectable } from '@nestjs/common';

import { UpdateModuleInput } from './dto/update-module.input';
import { PrismaClient } from '@prisma/client';
import { mockModules } from './data';
import { CreateModuleInput, ModuleType } from './module.type';
import { PrismaService } from 'prisma/prisma.service';

const prisma = new PrismaClient();

// Commented for test purposes with mocked data

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

// MOCKED DATA
// @Injectable()
// export class ModuleService {
//   private modules: ModuleType[] = [];

//   findAll() {
//     return mockModules;
//   }

//   create(input: CreateModuleInput): CreateModuleInput {
//     const newModule = {
//       ...input,
//       id: Date.now().toString(),
//     };
//     this.modules.push(newModule);
//     return newModule;
//   }
// }
@Injectable()
export class ModuleService {
  constructor(private readonly prisma: PrismaService) {}

  create(input: CreateModuleInput): Promise<CreateModuleInput> {
    return this.prisma.module.create({
      data: input,
    });
  }

  findAll(): Promise<CreateModuleInput[]> {
    return this.prisma.module.findMany();
  }
}
