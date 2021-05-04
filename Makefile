PROJECT := nextjs-tutorial-312706
GCLOUD := gcloud --project $(PROJECT)

.PHONY: build
build:
	yarn build

.PHONY: clean
clean:
	rm -rf .next/

.PHONY: deploy
deploy: clean build
	$(GCLOUD) app deploy