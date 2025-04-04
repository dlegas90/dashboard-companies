/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns :[
            {
                protocol: "https",
                hostname: "utfs.io",
                pathname: "**",
            }
        ],
        // Agregado para aceptar imágenes SVG
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; img-src * data: blob:"
    }
};

export default nextConfig;
