import * as expressive from "https://raw.githubusercontent.com/NMathar/deno-express/master/mod.ts";

console.log(Deno.args);

const port = Number(Deno.args[0]);
const app = new expressive.App();

app.use(expressive.simpleLog());
app.use(expressive.static_("./public"));

app.use(expressive.bodyParser.json());

app.get("/api/user/{user_id}", async (req, res) => {
  await res.json({
    id: req.params.user_id + "3105",
    name: "Marcos",
    phone: "3435343",
  });
});

await app.listen(port);
console.log(`Server on port ${port}`);

//deno run --allow-net --allow-read hola.ts 80
