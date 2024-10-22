import { randomUUID } from "crypto";
import { PrismaService } from "src/database/prisma.service";
import { MemberRepository } from "../member-repository";
import { Injectable } from "@nestjs/common";

@Injectable()
export class PrismaMemberRepository implements MemberRepository {
  constructor(
    private prisma: PrismaService
  ) {}

  async create(name: string, memberFunction: string): Promise<any> {
    await this.prisma.member.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction
      }
    })
    return {
      message: `Successfully created member ${name} with as function ${memberFunction} !`
    }
  }
}
