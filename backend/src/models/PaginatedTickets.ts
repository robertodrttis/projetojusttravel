// PaginatedTickets.ts (ou no mesmo arquivo do seu resolver)

import { ObjectType, Field } from "type-graphql";
import { Ticket } from "../models/Ticket";

@ObjectType()
export class PaginatedTickets {
    @Field(() => [Ticket])
    tickets: Ticket[];

    @Field()
    totalTickets: number;
}
