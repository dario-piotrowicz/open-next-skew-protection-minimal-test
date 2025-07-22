let deploymentId = undefined;

if (!process.env.VERCEL) {
    const { getDeploymentId } = await import('@opennextjs/cloudflare')
    deploymentId = getDeploymentId();
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    deploymentId,
};

export default nextConfig;

if (!process.env.VERCEL) {
    // added by create cloudflare to enable calling `getCloudflareContext()` in `next dev`
    const { initOpenNextCloudflareForDev } = await import('@opennextjs/cloudflare');
    await initOpenNextCloudflareForDev();
}
