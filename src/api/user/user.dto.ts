import { IsOptional, IsString } from 'class-validator';

export class UserDto {
  @IsString()
  @IsOptional()
  public readonly firstName?: string;

  @IsString()
  @IsOptional()
  public readonly lastName?: string;
}