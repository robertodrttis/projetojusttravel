import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { Ticket } from "../models/Ticket";
import crypto from 'crypto';
import { PaginatedTickets } from "../models/PaginatedTickets";

@Resolver()
export class TicketResolver {
    private data: Ticket[] = [
        {
            id: crypto.randomUUID(),
            name: "Lorem ipsum dolor amet consectetur 1",
            location: "Lorem ipsum dolor amet consectetur São Paulo - Sp",
            price: 1.391,
            city: "Alphaville"
        },
        {
            id: crypto.randomUUID(),
            name: "Lorem ipsum dolor amet consectetur 2",
            location: "Lorem ipsum dolor amet consectetur Rio de Janeiro - RJ",
            price: 1.391,
            city: "Copacabana"
        },
        {
            id: crypto.randomUUID(),
            name: "Lorem ipsum dolor amet consectetur 3",
            location: "Lorem ipsum dolor amet consectetur Rio de Janeiro - RJ",
            price: 1.391,
            city: "Copacabana"
        },
        {
            id: crypto.randomUUID(),
            name: "Lorem ipsum dolor amet consectetur 4",
            location: "Lorem ipsum dolor amet consectetur Rio de Janeiro - RJ",
            price: 1.391,
            city: "Copacabana"
        },
        {
            id: crypto.randomUUID(),
            name: "Lorem ipsum dolor amet consectetur 5",
            location: "Lorem ipsum dolor amet consectetu Rio de Janeiro - RJ",
            price: 1.391,
            city: "Copacabana"
        },
        {
            id: crypto.randomUUID(),
            name: "Lorem ipsum dolor amet consectetur 6",
            location: "Lorem ipsum dolor amet consectetuRio de Janeiro - RJ",
            price: 1.391,
            city: "Copacabana"
        },

        {
            id: crypto.randomUUID(),
            name: "Lorem ipsum dolor amet consectetur 1",
            location: "Lorem ipsum dolor amet consectetur São Paulo - Sp",
            price: 1.391,
            city: "Alphaville"
        },
        {
            id: crypto.randomUUID(),
            name: "Lorem ipsum dolor amet consectetur 2",
            location: "Lorem ipsum dolor amet consectetur Rio de Janeiro - RJ",
            price: 1.391,
            city: "Copacabana"
        },
        {
            id: crypto.randomUUID(),
            name: "Lorem ipsum dolor amet consectetur 3",
            location: "Lorem ipsum dolor amet consectetur Rio de Janeiro - RJ",
            price: 1.391,
            city: "Copacabana"
        },
        {
            id: crypto.randomUUID(),
            name: "Lorem ipsum dolor amet consectetur 4",
            location: "Lorem ipsum dolor amet consectetur Rio de Janeiro - RJ",
            price: 1.391,
            city: "Copacabana"
        },
        {
            id: crypto.randomUUID(),
            name: "Lorem ipsum dolor amet consectetur 5",
            location: "Lorem ipsum dolor amet consectetu Rio de Janeiro - RJ",
            price: 1.391,
            city: "Copacabana"
        },
        {
            id: crypto.randomUUID(),
            name: "Lorem ipsum dolor amet consectetur 6",
            location: "Lorem ipsum dolor amet consectetuRio de Janeiro - RJ",
            price: 1.391,
            city: "Copacabana"
        },

    ];
    

    @Query(() => PaginatedTickets) 
    async tickets(
        @Arg('limit', { defaultValue: 5 }) limit: number,
        @Arg('skip', { defaultValue: 0 }) skip: number
    ): Promise<PaginatedTickets> { 
        const tickets = this.data.slice(skip, skip + limit);
        const totalTickets = this.data.length;
        
        
        return {
            tickets,
            totalTickets
        };
    }
    
    
    @Mutation(() => Ticket)
    async createTicket(
        @Arg('name') name: string
    ): Promise<Ticket> {
        const ticket = { 
            id: crypto.randomUUID(), 
            name, 
            location: 'São Paulo - Sp', 
            price: 1.391,
            city: 'Alphaville'
        };

        this.data.push(ticket);

        return ticket;
    }
}