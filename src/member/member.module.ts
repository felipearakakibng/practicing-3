import { Module } from '@nestjs/common';
import { MemberController } from './member.controller';
import { MemberService } from './member.service';
import { PrismaModule } from 'src/database/prisma.module';
import { MemberRepository } from './repositories/member-repository';
import { PrismaMemberRepository } from './repositories/implementation/prisma-member-repository';

@Module({
  imports: [PrismaModule],
  controllers: [MemberController],
  providers: [
    MemberService,
    {
      provide: MemberRepository,
      useClass: PrismaMemberRepository
    }
  ]
})
export class MemberModule {}
