import { Field, ID, ObjectType } from "type-graphql";
import 'reflect-metadata'
@ObjectType()
export class Photo {
    @Field(() => ID)
    id: string;
    @Field()
    url: string;
    @Field()
    label: string;
    @Field(() => Date)
    createdAt: Date;
}