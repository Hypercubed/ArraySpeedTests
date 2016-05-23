node_modules/.bin/browserify ./scripts/browser-run-one.js | node_modules/.bin/testling -x open | tee ./results/chrome.md

node_modules/.bin/browserify ./scripts/browser-run-one.js | node_modules/.bin/testling -x "open -a /Applications/Firefox.app" | tee ./results/firefox.md

node_modules/.bin/browserify ./scripts/browser-run-one.js | node_modules/.bin/testling -x "open -a Safari" | tee ./results/safari.md
