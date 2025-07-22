# Minimal reproduction on open-next skew protection not working

## Steps

Run
```
$ npm i
```

Create a `.dev.vars` file with the following content:
```
NEXTJS_ENV=development
CF_WORKERS_SCRIPTS_API_TOKEN=<API Token with Workers Scripts READ permission>
```

In the `wrangler.jsonc` file update the `name` and `account_id` options appropriately, also update with appropriate values `CF_WORKER_NAME`, `CF_PREVIEW_DOMAIN` and `CF_ACCOUNT_ID`.

Run
```
$ npm run deploy
```

Once the deployment is completed navigate with your browser to your worker's
site (the custom domain) and press the `Trigger Server Action` button, notice
how the text above changes (you can press the button as many times as you want).

With the browser still open on the page, increment the `id` variable in `/app/action.js` 
and redeploy your worker (optionally ), once the deployment is completed (without refreshing
your browser) press again the `Trigger Server Action` and see how a server error is triggered.

## It works on Vercel

Note that the above scenario doesn't cause an error on Vercel, there pressing the
`Trigger Server Action` button when a new version is deployed does not trigger any error.
