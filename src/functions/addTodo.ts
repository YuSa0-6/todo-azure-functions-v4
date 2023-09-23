// Todosテーブルに情報をPOSTする
import { HttpRequest, HttpResponseInit, InvocationContext, app, output } from '@azure/functions';
const sqlOutput = output.sql({
    commandText: 'dbo.Todos',
    connectionStringSetting: 'SqlConnectionString',
});

export async function addTodo(request: HttpRequest, context: InvocationContext): Promise<HttpResponseInit> {
    context.log('😭:HTTP trigger and SQL output binding function processed a request.');

    const body = await request.json();
    context.extraOutputs.set(sqlOutput, body);
    return { status: 201 };
}

app.http('addTodo', {
    methods: ['POST'],
    authLevel: 'anonymous',
    extraOutputs: [sqlOutput],
    handler: addTodo,
});