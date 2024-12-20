import { Strategy } from 'passport-jwt';
import { UserRepository } from './users.respository';
import { JwtPayload } from './jwt-payload.interface';
import { User } from './user.entity';
import { ConfigService } from '@nestjs/config';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly userRepository;
    private readonly configService;
    constructor(userRepository: UserRepository, configService: ConfigService);
    validate(payload: JwtPayload): Promise<User>;
}
export {};
