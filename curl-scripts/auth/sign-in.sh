
curl "http://localhost:4741/sign-in" \
# curl "http://localhost:7165/sign-in" \
# curl "https://desolate-refuge-14322.herokuapp.com/sign-in"

  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'"
    }
  }'

echo
