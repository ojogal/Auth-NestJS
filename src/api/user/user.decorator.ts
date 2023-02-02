import { createParamDecorator, ExecutionContext,
         HttpException, HttpStatus } from '@nestjs/common';
import { Request } from 'express';
import { AuthHelper } from './auth/auth.helper';

export const AuthUser = createParamDecorator((data: string, ctx: ExecutionContext) => {
  const request = ctx.switchToHttp().getRequest<Request>();
  const jwt = request.headers['authorization'].split(' ')[1];

  if (!jwt) { throw new HttpException('Unauthorized access', HttpStatus.UNAUTHORIZED) }

  try {
    const decoded = AuthHelper.decode(jwt);
    const user = AuthHelper.validateUser(decoded)
    return user
  } catch (error) {
    throw new HttpException(error.message, HttpStatus.FORBIDDEN);
  }
});