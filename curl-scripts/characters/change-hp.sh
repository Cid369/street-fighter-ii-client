
curl "http://localhost:4741/change-hp" \
# curl "http://localhost:7165/change-hp" \
# curl "https://desolate-refuge-14322.herokuapp.com/change-hp"
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"
  --data '{
    "passwords": {
      "update": "'"${UPDATE}"'",
    }
  }'

echo
