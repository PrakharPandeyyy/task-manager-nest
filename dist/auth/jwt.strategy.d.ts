import { Strategy } from 'passport-jwt';
import { UserRepository } from './users.respository';
import { JwtPayload } from './jwt-payload.interface';
import { User } from './user.entity';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    validate(payload: JwtPayload): Promise<User>;
}
export {};
