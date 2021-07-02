import { IsString, IsNumber, IsOptional } from 'class-validator'

export class Product {
  @IsNumber() @IsOptional() readonly id: number
  @IsString() readonly name: string
  @IsString() readonly description: string
  @IsString() readonly image: string
}
