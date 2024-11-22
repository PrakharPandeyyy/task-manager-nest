import { UserRepository } from './users.respository';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
export declare class AuthService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    signUp(authCredentialsDto: AuthCredentialsDto): Promise<void>;
    signIn(authCredentialsDto: AuthCredentialsDto): Promise<string>;
}
