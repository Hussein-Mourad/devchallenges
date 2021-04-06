rm -rf ~/staging/*
cp -r * ~/staging/
cd ~/staging/
rm -rf node_modules/ client/ .env Deploy.sh
git init
heroku git:remote -a $1
git add .
git commit -am "First commit"
git push heroku master
heroku open