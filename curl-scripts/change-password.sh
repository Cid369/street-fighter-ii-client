#!/bin/bash

curl --include --request PATCH https://desolate-refuge-14322.herokuapp.com/change-password \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "passwords": {
      "old": "'"${OLD}"'",
      "new": "'"${NEW}"'"
    }
  }'
