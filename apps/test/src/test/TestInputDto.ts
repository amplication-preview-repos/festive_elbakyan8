import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
class TestInputDto {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    name!: string;

    @Field(() => String, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => String
    })
    @Type(() => String)
    description?: string;
}

export { TestInputDto as TestInputDto };