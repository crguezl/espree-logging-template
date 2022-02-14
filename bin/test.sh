#!/usr/bin/env bash

bin/logging.js $1 -o $2 > /dev/null
if diff -b -E $2 $3 > /dev/null; then
    echo "$1  was successful"
else
    echo "$1 wasn't succesful"
fi
rm $2