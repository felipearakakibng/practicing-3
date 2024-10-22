import { Controller, Get } from '@nestjs/common';
import { MemberService } from './member.service';

@Controller('member')
export class MemberController {
  constructor(private readonly member: MemberService) {}

  @Get('aloha')
  getHello(): string {
    return this.member.getHello();
  }
}
