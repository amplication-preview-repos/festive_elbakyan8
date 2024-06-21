import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("TestOutputDtoObject")
class TestOutputDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    status!: string;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    result?: string;
}

export { TestOutputDto as TestOutputDto };