npm run build &&
git branch gh-pages &&
rm -rf *.html *.js *.css *.png src *.json &&
mv dist/* ./ &&
rm -rf dist;
git add . &&
git commit -m 'update' &&
git push&&
git checkout -