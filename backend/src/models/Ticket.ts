import { ObjectType, Field, ID, Float } from "type-graphql";

@ObjectType()
export class Ticket {
    @Field(type => ID)
    id: string;

    @Field()
    name: string;

    @Field()
    location: string;

    @Field(type => Float)
    price: GLfloat;

    @Field()
    city: string;

    
}
