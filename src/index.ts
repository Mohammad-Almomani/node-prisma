import express from "express";
import userRoutes from "./users/routes/userRoutes";
import postRoutes from "./posts/routes/postRoutes";
import commentRoutes from "./comments/routes/commentRoutes";
// import { PrismaClient } from '@prisma/client';

const app = express();
const port = 3000;
// const prisma = new PrismaClient();

app.use(express.json());

app.use("/users", userRoutes);
app.use("/posts", postRoutes);
app.use("/comments", commentRoutes);

// app.get('/users', async (req, res) => {
//   const users = await prisma.users.findMany();
//   res.json(users);
// });
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
