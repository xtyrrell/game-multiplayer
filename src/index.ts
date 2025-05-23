export default {
  async fetch(request, env) {
    // Handle POST / - insert a new feed row
    if (request.method === "POST") {
      let payload: { name?: string };
      try {
        payload = await request.json();
      } catch (err) {
        return new Response("Invalid JSON", { status: 400 });
      }

      const name = payload?.name;
      if (typeof name !== "string" || !name.trim()) {
        return new Response("Missing `name` in request body", { status: 400 });
      }

      const date = Math.floor(Date.now() / 1000); // Unix timestamp (seconds)
      await env.DB.prepare("INSERT INTO feeds (name, date) VALUES (?1, ?2)")
        .bind(name, date)
        .run();

      return new Response(null, { status: 201 });
    }

    // Handle GET / - list all feeds
    if (request.method === "GET") {
      // TODO: Only get feeds from the last few minutes OR just get the last 5 feeds
      const { results } = await env.DB.prepare("SELECT * FROM feeds").all();
      return new Response(JSON.stringify(results), {
        headers: {
          "content-type": "application/json",
        },
      });
    }

    return new Response("Method Not Allowed", { status: 405 });
  },
} satisfies ExportedHandler<Env>;
