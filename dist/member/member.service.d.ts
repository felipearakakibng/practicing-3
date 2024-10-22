import { MemberRepository } from './repositories/member-repository';
export declare class MemberService {
    private readonly member;
    constructor(member: MemberRepository);
    getHello(label: string): string;
    create(data: {
        name: string;
        function: string;
    }): Promise<any>;
}
