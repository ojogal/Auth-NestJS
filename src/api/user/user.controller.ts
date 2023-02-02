import { ClassSerializerInterceptor, Controller, Req, UseGuards, 
         UseInterceptors, Put, Get, Body, Inject } from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '@/api/user/auth/auth.guard';
import { UserDto } from './user.dto';
import { User } from './user.entity';
import { UserService } from './user.service';
import { AuthUser } from './user.decorator';

@Controller('user')
export class UserController {
  @Inject(UserService)
  private readonly service: UserService;

  @Put('name')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  private updateName(@Body() body: UserDto, @Req() req: Request): Promise<User> {
    return this.service.updateName(body, req);
  };

  @Get('name')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  private showUser(@AuthUser() user) {
    return { user }
  }
 
}