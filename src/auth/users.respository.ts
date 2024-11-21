import { DataSource, EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }
  async createUser(authCredentialsDto: AuthCredentialsDto): Promise<void> {
    try {
      const { username, password } = authCredentialsDto;
      const user = this.create({ username, password });
      await this.save(user);
    } catch (e) {
      if (e.code === '23505') {
        //duplicate error
        throw new ConflictException('Username already Exist');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
}
