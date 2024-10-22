import { MemberService } from './member.service';
import { CreateMemberBody } from './dtos/create-member-body';
export declare class MemberController {
    private readonly member;
    constructor(member: MemberService);
    getHello(): string;
    create(body: CreateMemberBody): Promise<any>;
}
