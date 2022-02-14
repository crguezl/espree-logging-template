#!/usr/bin/env bash
for i in test/test*.js 
do
  #echo "Working $i filename ..."
  OUTPUT="${i/test\/test/test/output}"
  CORRECT="${OUTPUT/output/correct_output}"
  # echo "output at $OUTPUT comparing with ${CORRECT}"
  bin/test.sh $i "$OUTPUT" "$CORRECT"
done