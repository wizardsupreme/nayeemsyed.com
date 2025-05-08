# nayeemsyed.com

Personal website for Nayeem Syed, showcasing expertise in fullstack development, architecture, and CTO as a service.

## Features

- Responsive design for all devices
- Light/dark mode toggle
- Sections for expertise, experience, skills, and contact
- CV download functionality
- Contact form

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Vite

## Development

### Prerequisites

- Node.js (v18+)
- pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/nayeemsyed.com.git
cd nayeemsyed.com

# Install dependencies
pnpm install
```

### Running Locally

```bash
# Start development server
pnpm run dev
```

The site will be available at http://localhost:3002 (or another port if 3002 is in use).

### Building for Production

```bash
# Build the site
pnpm run build
```

The built files will be in the `dist` directory.

## Deployment to Cloudflare Pages

### Method 1: Using Cloudflare Dashboard

1. Log in to your Cloudflare account
2. Go to Pages > Create a project
3. Connect your GitHub repository
4. Configure the build settings:
   - Build command: `pnpm run build`
   - Build output directory: `dist`
   - Node.js version: 20
5. Deploy

### Method 2: Using Wrangler CLI

1. Install Wrangler CLI:
   ```bash
   pnpm add -g wrangler
   ```

2. Authenticate with Cloudflare:
   ```bash
   wrangler login
   ```

3. Update the `wrangler.toml` file with your Cloudflare Zone ID

4. Deploy:
   ```bash
   wrangler pages publish dist
   ```

## Custom Domain Setup

1. In Cloudflare Pages, go to your project
2. Navigate to Custom domains
3. Add your domain (e.g., nayeemsyed.com)
4. Follow the instructions to set up DNS records

## Contact

For any inquiries, please reach out via the contact form on the website or email at contact@nayeemsyed.com.
