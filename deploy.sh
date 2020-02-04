npm run build &&
git checkout gh-pages &&
mv dist/* ./ &&
rm dist ;
git add . &&
git commit . -m "提交" &&
git push 