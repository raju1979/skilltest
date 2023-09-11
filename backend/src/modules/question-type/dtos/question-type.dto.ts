import { faker } from '@faker-js/faker';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
    IsString,
    IsNotEmpty,
    MaxLength,
    MinLength,
    IsEnum,
    IsArray,
    ArrayNotEmpty,
    ValidateIf,
    ValidateNested,
} from 'class-validator';


export class QuestionTypeCreateDto {
    @ApiProperty({
        description: 'Name of role',
        example: faker.person.jobTitle(),
        required: true,
    })
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(30)
    @Type(() => String)
    readonly title: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @Type(() => String)
    readonly key: string;

}
