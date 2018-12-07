#!/bin/bash

curl --include --request GET https://desolate-refuge-14322.herokuapp.com/users \
  --header "Authorization: Token token=$TOKEN"
