//Todosテーブルから情報をGETする
import { app, HttpRequest, HttpResponseInit, InvocationContext, input } from "@azure/functions";

const sqlInput = input.sql({
    commandText: 'select [Id], [title], [description], [status] from Todos',
    commandType: 'Text',
    connectionStringSetting: 'SqlConnectionString',
})
export async function getTodo(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    const toDoItems = context.extraInputs.get(sqlInput);
    context.log('😇HTTP trigger adn SQL input binding function processed a request',{toDoItems});
    return{
        jsonBody: toDoItems,
    }
};

app.http('getTodo', {
    methods: ['GET'],
    authLevel: 'anonymous',
    extraInputs:[sqlInput],
    handler: getTodo
});
