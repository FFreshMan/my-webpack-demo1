npm run build &&
git branch -D gh-pages&&
git branch gh-pages &&
git checkout gh-pages&&
rm -rf src *.html *.js *.css *.png  *.json &&
mv dist/* ./ &&
rm -rf dist;
git add . &&
git commit -m 'update' &&
git push --set-upstream origin gh-pages&&
git checkout -