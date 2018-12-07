
curl "http://localhost:4741/sign-up" \
# curl "http://localhost:7165/sign-up" \
# curl "https://desolate-refuge-14322.herokuapp.com/sign-up"

  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password_confirmation": "'"${PASSWORD}"'"

    }
  }'

echo
