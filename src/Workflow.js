const startWorkflow = async (workflowName, inputParams = {}) => {
    const ORKES_CONDUCTOR_API = "https://example-apps.orkesconductor.io/api"; // Update with your actual API URL
    const API_KEY = "Uxqb3abrnaz7Cl4tSz9GxtHoME9ZVAJid2SGatr5Wkv0D2rF"; // API key passed as an argument
  
  
    const url = `${ORKES_CONDUCTOR_API}/workflow/${workflowName}`;
    const requestBody = {
      name: workflowName,
      version: 1,
      input: inputParams
    };
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Authorization": `Bearer ${API_KEY}` // API Key in Authorization header
        },
        body: JSON.stringify(requestBody)
      });
  
      if (!response.ok) {
        throw new Error(`Failed to start workflow: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data.workflowId; // Returns workflow ID if successful
    } catch (error) {
      console.error("Error starting workflow:", error);
      return null;
    }
  };

  export default startWorkflow;