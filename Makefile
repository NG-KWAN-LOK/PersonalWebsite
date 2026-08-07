PROJECT := personal-website-360719
SERVICE := personal-website
REGION  := us-west1
IMAGE   := $(REGION)-docker.pkg.dev/$(PROJECT)/cloud-run-source-deploy/$(SERVICE)

# One-time setup: gcloud auth configure-docker $(REGION)-docker.pkg.dev
#
# WARNING: these flags must match the deploy flags in .github/workflows/ci.yaml exactly,
#          otherwise manual and CI deploys will overwrite each other's configuration.
.PHONY: deploy
deploy:
	pnpm build
	docker build --platform=linux/amd64 --tag $(IMAGE):latest .
	docker push $(IMAGE):latest
	gcloud run deploy $(SERVICE) --image=$(IMAGE):latest \
		--region=$(REGION) --project=$(PROJECT) \
		--allow-unauthenticated \
		--cpu=1 --memory=128Mi \
		--min-instances=0 --max-instances=1 --concurrency=80
