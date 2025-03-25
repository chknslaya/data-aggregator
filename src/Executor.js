import {
orkesConductorClient,
WorkflowExecutor
} from "@io-orkes/conductor-javascript";

const config = {
    serverUrl: "https://example-apps.orkesconductor.io/api",
    keyId: "dd9d06f1-08d4-11f0-9ce8-9ec1155b5359",
    keySecret: "Uxqb3abrnaz7Cl4tSz9GxtHoME9ZVAJid2SGatr5Wkv0D2rF",
};

const client = await orkesConductorClient(config);
// A WorkflowExecutor instance is used to register and execute workflows.
const executor = new WorkflowExecutor(client);

function startWorkflow (){
    // Start the workflow.
    const id = executor.startWorkflow({
        name: "GetCustomerNames",
        version: 1,
        input: { name: "JavaScript" },
    }).then(data => {return data;});
        
    console.log(`Started workflow: ${id}`);
}


export default startWorkflow