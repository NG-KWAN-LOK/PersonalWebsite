PROJECT := personal-website-360719
SERVICE := personal-website
REGION  := asia-east1

# WARNING: these flags must match the deploy flags in .github/workflows/ci.yaml exactly,
#          otherwise manual and CI deploys will overwrite each other's configuration.
.PHONY: deploy
deploy:
	gcloud run deploy $(SERVICE) --source . \
		--region=$(REGION) --project=$(PROJECT) \
		--allow-unauthenticated \
		--cpu=1 --memory=128Mi \
		--min-instances=0 --max-instances=1 --concurrency=80
