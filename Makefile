.PHONY: publish-core
publish-core:
	cd packages/core && npm publish --access public

.PHONY: publish-core
publish-tailwind:
	cd packages/tailwind && npm publish --access public
