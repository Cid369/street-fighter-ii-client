#!/bin/bash

curl --include --request POST https://desolate-refuge-14322.herokuapp.com/sign-in \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'
