
curl "http://localhost:4741/change-password" \
# curl "http://localhost:7165/change-password" \
# curl "https://desolate-refuge-14322.herokuapp.com/change-password"
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"
  --data '{
    "passwords": {
      "old": "'"${OLD}"'",
      "new": "'"${NEW}"'"
    }
  }'

echo
