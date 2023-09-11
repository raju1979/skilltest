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
    IsUUID,
    IsInt,
    IsOptional,
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
    @Type(() => String)
    readonly question: string;

    @IsNotEmpty()
    @IsUUID('4')
    readonly question_type: string;

    @IsInt()
    @IsNotEmpty()
    @MinLength(3)
    @Type(() => String)
    readonly duration: string;

    @IsNotEmpty()
    @IsUUID('4')
    readonly subject: string;

    @IsArray()
    @IsNotEmpty()
    @ArrayNotEmpty()
    readonly answer: [];

    @IsOptional()
    readonly options: []

}
