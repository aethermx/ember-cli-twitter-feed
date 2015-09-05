#!/bin/bash

set -e

addonName='ember-cli-twitter-feed'

ember build --environment='production'

cd '../'$addonName'-gh-pages/'

rm -rvf assets

cp -Rv '../'$addonName'/dist/'* .

git add -A .

git commit -m 'update'

git push -u origin gh-pages

exit
