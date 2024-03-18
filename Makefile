gen-api-docs:
	npx @redocly/cli build-docs car-api.yaml --output=index.html

lint-api:
	npx @redocly/openapi-cli lint car-api.yaml