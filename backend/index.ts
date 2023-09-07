import path from 'path';
import { buildSchema } from 'type-graphql';
import { ApolloServer } from 'apollo-server';
import "reflect-metadata"; 
import { TicketResolver } from './src/resolvers/TicketResolver';
import { BuyResolver } from './src/resolvers/BuyResolver';



async function main() {
    const schema = await buildSchema({
        resolvers: [
            TicketResolver,
            BuyResolver
        ],
        emitSchemaFile: path.resolve(__dirname, 'schema.gql'),
    });

    const server = new ApolloServer({
        schema, 
    });

    const { url } = await server.listen();
    console.log(`Apollo Server running on ${url}`);
}

main();
