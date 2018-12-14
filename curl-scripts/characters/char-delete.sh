

curl "http://localhost:4741/characters" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \

echo
