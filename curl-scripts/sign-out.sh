

# curl "http://localhost:4741/sign-out" \
curl "http://localhost:7165/sign-out" \
  --include \
  --request DELETE \
  --header "Authorization: Token token=${TOKEN}" \

echo
