export const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to the Trip Expenses API</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        text-align: center;
        margin: 0;
        padding: 0;
        background-color: #f4f4f9;
        color: #333;
      }
      .container {
        padding: 50px;
      }
      h1 {
        color: #2c3e50;
      }
      p {
        font-size: 1.2em;
      }
      a {
        color: #3498db;
        text-decoration: none;
      }
      a:hover {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <h1>Welcome to the Trip Expenses API!</h1>
      <p>
        Use the <a href="/api/v1/docs">/api/v1/docs</a> endpoint to access the
        API documentation.
      </p>
    </div>
  </body>
</html>`;

export const isProduction = process.env.NODE_ENV === "production";
