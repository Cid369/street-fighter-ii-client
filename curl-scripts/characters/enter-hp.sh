
curl "http://localhost:4741/characters" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"
  --data '{
    "credentials": {
      "hp": "'"${HP}"'"
    }
  }'

echo
