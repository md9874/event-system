import { proxy } from "appConfig";

import { ApiRequestInterface } from "types";

export interface ExampleApiRequestInterface extends ApiRequestInterface {
    id: number;
}

export interface ExampleApiResponseInterface {
    username: string;
    content: string;
    id: number
}

async function checkEmail(props: ExampleApiRequestInterface): Promise<Response> {
    let serverResponse = await fetch(`${proxy}/exampleApi`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${props.bearerToken}`,
        },
        body: JSON.stringify({
            id: props.id
        }),
    });
    console.log("Response", serverResponse);

    const exampleResponse: ExampleApiResponseInterface = {
        username: "username", content: "Hello, World!!!", id: props.id
    };

    serverResponse = new Response(JSON.stringify(exampleResponse));

    return serverResponse;

}

export default checkEmail;
