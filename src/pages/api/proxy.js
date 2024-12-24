export default async function handler(req, res) {
  const { method } = req;

  if (method === 'POST') {
    const googleAppsScriptURL = "https://script.google.com/macros/s/AKfycbwUMI3oHmzVVHXf4LnaHdiviwCSrF0XQNgTMuchiqRwFvxQBdEORoGxewAnapi0CXARXQ/exec";

    try {
      console.log("Payload sent to Google Apps Script:", req.body);

      const response = await fetch(googleAppsScriptURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      });

      const data = await response.json();
      console.log("Response from Google Apps Script:", data);

      res.status(response.status).json(data);
    } catch (error) {
      console.error("Error in proxy route:", error);
      res.status(500).json({ error: "Failed to submit data" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}
