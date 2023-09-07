import { ObjectType, Field, ID, Float } from "type-graphql";

@ObjectType()
export class Buy {
    @Field(type => ID)
    id: string;

    @Field()
    data: string;

    @Field()
    total: string;

    @Field(type => Float)
    price: GLfloat;

    @Field()
    tickets: string;

    
}
