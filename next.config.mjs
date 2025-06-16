/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['localhost', 'yourdomain.com', 'cdn.yourimagehost.com'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: "lh3.googleusercontent.com"
        },
        {
            protocol: 'https',
            hostname: "i.ibb.co.com" 
        },
        {
            protocol: 'https',
            hostname: "i.ibb.co"
        },
        { 
            protocol: 'https',
            hostname: "img.freepik.com"
        },
        {
          protocol: "https",
          hostname: "thumbs.dreamstime.com"
        },
        {
          protocol: "https",
          hostname: "avatars.githubusercontent.com"
        }
      ],
    },
  };
  
  export default nextConfig;