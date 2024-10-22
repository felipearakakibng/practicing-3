import { Injectable } from '@nestjs/common';
import { MemberRepository } from './repositories/member-repository';

@Injectable()
export class MemberService {
  constructor(
    private readonly member: MemberRepository
  ) {}

  getHello(label: string): string {
    return `Hello World! + ${label}`;
  }

  async create(data: { name: string, function: string }) {
    return await this.member.create(data.name, data.function)
  }
}
