
curl "http://localhost:4741/characters" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"
  --data '{
    "passwords": {
      "oldHp": "'"${OLDHP}"'",
      "newHp": "'"${NEWHP}"'"
    }
  }'

echo
