/** @type {import('next').NextConfig} */
const nextConfig = {
    deploymentId: process.env.VERCEL ? undefined : getDeploymentId(),
};

export default nextConfig;

// added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
import { getDeploymentId, initOpenNextCloudflareForDev } from '@opennextjs/cloudflare';
initOpenNextCloudflareForDev();
