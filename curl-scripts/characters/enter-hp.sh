
curl "http://localhost:4741/enter-hp" \
# curl "http://localhost:7165/enter-hp" \
# curl "https://desolate-refuge-14322.herokuapp.com/enter-hp"

  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"
  --data '{
    "credentials": {
      "enter": "'"${ENTER}"'"
    }
  }'

echo
