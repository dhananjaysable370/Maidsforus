/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.graphassets.com',
                port: '', // Optional: leave empty if not using a specific port
                pathname: '/**', // Allow all paths under this domain
            },
            {
                protocol: 'https',
                hostname: 'example.com',
                port: '', // Optional: leave empty if not using a specific port
                pathname: '/**', // Optional: specify the path or use /** for all paths
            },
        ],
    },
};

export default nextConfig;
