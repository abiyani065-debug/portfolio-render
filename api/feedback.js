import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;

let clientPromise;

if (!clientPromise) {
  const client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }
  try {
    const { name, email, message } = req.body;
    const client = await clientPromise;
    const db = client.db("portfolio");
    await db.collection("feedbacks").insertOne({
      name,
      email,
      message,
      date: new Date()
    });
    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Database error" });
  }
}
