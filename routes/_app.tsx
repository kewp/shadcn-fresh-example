import { type PageProps } from "$fresh/server.ts";
import { asset } from "$fresh/runtime.ts"
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>shadcn-fresh-example</title>
        <link rel="stylesheet" href="/fonts.css" />
        {/* <link rel="stylesheet" href="/styles.css" /> */}
        {/* <link href={asset("/shadcn.css")} rel="stylesheet" /> */}
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
