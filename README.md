# Static Cache Issue Reproduction

Static pages are built twice during build time and on demand.

## Steps to reproduce

Run `pnpm build` and you will see duplicate console outputs for the static pages.

Run `pnpm start` and visit a page after 30 second revalidation period has expired and you will see duplicate console outputs for the static pages.
