# amplify-waku-server-test

This repo is a test for deploying server apps leveraging AWS Amplify deployment specifications, focusing on Waku. Waku is the minimal React framework that incorporates advanced server-side rendering features, using Hono server framework it can be deployed on AWS Amplify, deno, workers, and more.

### Other

- [amplify-express-server-test](https://github.com/tseijp/amplify-express-server-test)
- [amplify-hono-server-test](https://github.com/tseijp/amplify-hono-server-test)
- amplify-waku-server-test
- ~~[amplify-next-server-test](https://github.com/tseijp/amplify-next-server-test)~~ @TODO
- ~~[amplify-astro-server-test](https://github.com/tseijp/amplify-astro-server-test)~~ @TODO
- ~~[amplify-remix-server-test](https://github.com/tseijp/amplify-remix-server-test)~~ @TODO

### Getting started

```ruby
npm create waku@latest
cd amplify-waku-server-test
```

### Update main file

```ruby
curl -O https://raw.githubusercontent.com/tseijp/amplify-waku-server-test/refs/heads/main/startServer.mjs
curl -O https://raw.githubusercontent.com/tseijp/amplify-waku-server-test/refs/heads/main/deploy-manifest.json
curl -O https://raw.githubusercontent.com/tseijp/amplify-waku-server-test/refs/heads/main/amplify.yml
```

### Push to Github and deploy

```ruby
echo ".amplify-hosting" >> .gitignore
git add .
git commit -m ":tada: init commit"
git branch -M main
git remote add origin https://github.com/tseijp/amplify-waku-server-test.git
git push -u origin main
```
