import { Module } from '@nestjs/common';
import { ModuleService } from './module.service';
import { ModuleResolver } from './module.resolver';
import { PrismaModule } from 'prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ModuleResolver, ModuleService],
})
export class ModuleModule {}
