import { IsBoolean, IsObject, IsOptional, IsString } from 'class-validator';

export class SportCreateDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsObject()
  nameISO?: Record<string, string>;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
