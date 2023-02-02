import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Request } from 'express';
import { UserDto } from './user.dto';
import { User } from './user.entity';

@Injectable()
export class UserService {
  @InjectRepository(User)
  private readonly repository: Repository<User>;

  public async updateName(body: UserDto, req: Request): Promise<User> {
    const user: User = <User>req.user;
    user.firstName = body.firstName;
    user.lastName = body.lastName;

    return this.repository.save(user)
  };

  // public async showUser(body: UserDto, req: Request): Promise<User> {
    // const user: User = <User>req.user;
    // return this.repository.findOne(user.id);
  // }
}