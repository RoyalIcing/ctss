.PHONY:
install:
	cd packages/core && npm ci
	cd packages/tailwind && npm ci

.PHONY: publish-core
publish-core:
	cd packages/core && npm publish --access public

.PHONY: publish-core
publish-tailwind:
	cd packages/tailwind && npm publish --access public

.PHONY: test
test:
	cd packages/core && npm t
	cd packages/tailwind && npm t

.PHONY: build-core
build-core:
	cd packages/core && npm run build

.PHONY: build-tailwind
build-tailwind:
	cd packages/tailwind && npm run build

.PHONY: build
build: build-core build-tailwind

.PHONY: ci
ci:
	make install
	make test
