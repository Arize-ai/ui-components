#!/bin/sh

for i in $(find src -type f -name "*.tsx");
  do sh -c "./node_modules/.bin/flowgen $i -o ${i%.*.*}.js.flow";
done;