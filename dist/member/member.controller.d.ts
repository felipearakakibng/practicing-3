import { MemberService } from './member.service';
export declare class MemberController {
    private readonly member;
    constructor(member: MemberService);
    getHello(): string;
}
