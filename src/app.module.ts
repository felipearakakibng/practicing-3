import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MemberModule } from './member/member.module';
import { PrismaModule } from './database/prisma.module';

@Module({
  imports: [MemberModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
