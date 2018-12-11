
curl "http://localhost:4741/change-hp" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"
  --data '{
    "credentials": {
      "hp": "'"${HP}"'",
    }
  }'

echo
