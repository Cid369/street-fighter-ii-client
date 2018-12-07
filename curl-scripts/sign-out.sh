#!/bin/bash

curl --include --request DELETE https://desolate-refuge-14322.herokuapp.com/sign-out \
  --header "Authorization: Token token=${TOKEN}"
