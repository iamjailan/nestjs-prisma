import { Module } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { PrismaService } from 'src/prisma/prisma.service';
import { PasswordService } from 'src/GlobalService/password.service';
import { AuthModule } from './auth/auth.module';

@Module({
  controllers: [AdminController],
  providers: [AdminService, PrismaService, PasswordService],
  imports: [AuthModule],
})
export class AdminModule {}
