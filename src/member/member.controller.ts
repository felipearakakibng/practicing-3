import { Body, Controller, Get, Post } from '@nestjs/common';
import { MemberService } from './member.service';
import { randomUUID } from 'node:crypto';
import { CreateMemberBody } from './dtos/create-member-body';

@Controller('member')
export class MemberController {
  constructor(
    private readonly member: MemberService
  ) {}

  @Get('aloha')
  getHello(): string {
    return this.member.getHello('member controller');
  }
  @Post('create')
  async create(@Body() body: CreateMemberBody) {
    const { name, function: memberFunction } = body
    const data: any = {
      name: name,
      function: memberFunction
    }
    return await this.member.create(data)
  }
}
