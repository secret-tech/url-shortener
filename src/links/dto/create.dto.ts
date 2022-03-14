import { IsUrl, Length, IsString, IsOptional } from 'class-validator';

export class CreateDto {
  @IsUrl()
  @Length(1, 2000)
  longUrl: string;

  @IsString()
  @IsOptional()
  utm?: string;
}
