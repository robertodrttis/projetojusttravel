import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Ticket } from "../models/Ticket";
import crypto from 'crypto';
import { PaginatedTickets } from "../models/PaginatedTickets";
import { Buy } from "../models/Buy";

@Resolver()
export class BuyResolver {
    private data: Buy[] = [
        {
            id: '1',
            data: "22/12/2022",
            total: "03 Ingressos",
            price: 1.391,
            tickets: "Ingresso infantil"
        }
    ];
    

    @Query(() => Buy, { nullable: true })
    async getBuyById(@Arg('id') id: string): Promise<Buy | null> {
        return this.data.find(buy => buy.id === id) || null;
    }
    
    
    
    @Mutation(() => Buy)
    async createBuy(
        @Arg('name') name: string
    ): Promise<Buy> {
        const buy = { 
            id: '1',
            data: "22/12/2022",
            total: "03 Ingressos",
            price: 1.391,
            tickets: "Ingresso infantil"
        };
    
        this.data.push(buy);
    
        return buy;
    }
    
}