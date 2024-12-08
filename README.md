# amplify-waku-server-test

### Getting started

```
npm create waku@latest
cd amplify-waku-server-test
``

### Update main file

curl -O https://raw.githubusercontent.com/tseijp/amplify-waku-server-test/refs/heads/main/startServer.mjs
curl -O https://raw.githubusercontent.com/tseijp/amplify-waku-server-test/refs/heads/main/deploy-manifest.json
curl -O https://raw.githubusercontent.com/tseijp/amplify-waku-server-test/refs/heads/main/amplify.yml

### Push to Github and deploy

```
echo ".amplify-hosting" >> .gitignore
git add .
git commit -m ":tada: init commit"
git branch -M main
git remote add origin https://github.com/tseijp/amplify-waku-server-test.git
git push -u origin main
```