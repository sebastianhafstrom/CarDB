gen-api-docs:
	npx @redocly/cli build-docs carsearch/src/main/resources/api/api.yaml --output=index.html

lint-api:
	npx @redocly/openapi-cli lint carsearch/src/main/resources/api/api.yaml