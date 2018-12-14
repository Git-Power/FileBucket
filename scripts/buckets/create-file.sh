#!/bin/bash

API="http://localhost:4741"
URL_PATH="/buckets"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Authorization: Bearer ${TOKEN}" \
  --form image="${IMAGE_PATH}" \
  --form tags="${TAGS}" \
  --form url="${URL}" \

echo
