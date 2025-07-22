import { defineCloudflareConfig, OpenNextConfig } from "@opennextjs/cloudflare";

const cloudflareConfig = defineCloudflareConfig();

const openNextConfig: OpenNextConfig = {
  ...cloudflareConfig,
  buildCommand: 'pnpm build:default',
  cloudflare: {
    skewProtection: {
      enabled: true,
    },
  },
};

export default openNextConfig;
