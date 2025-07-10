#!/bin/bash

# Build script for GoDaddy shared hosting deployment
# This script creates a deployment-ready package

echo "🚀 Building West Wind Marine Electronics for GoDaddy deployment..."

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    print_error "package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
print_status "Installing dependencies..."
if ! npm install; then
    print_error "Failed to install dependencies"
    exit 1
fi

# Type check
print_status "Running type check..."
if ! npm run check; then
    print_error "Type check failed"
    exit 1
fi

# Build the project
print_status "Building the project..."
if ! npm run build; then
    print_error "Build failed"
    exit 1
fi

# Create deployment directory
print_status "Creating deployment package..."
DEPLOY_DIR="godaddy-deployment"
rm -rf "$DEPLOY_DIR"
mkdir -p "$DEPLOY_DIR"

# Copy dist/public contents to deployment root
print_status "Copying static files..."
cp -r dist/public/* "$DEPLOY_DIR/"

# Copy server file
print_status "Copying server file..."
cp dist/index.js "$DEPLOY_DIR/"

# Copy configuration files
print_status "Copying configuration files..."
cp .env.example "$DEPLOY_DIR/.env"
cp .htaccess "$DEPLOY_DIR/"

# Create a minimal package.json for production
print_status "Creating production package.json..."
cat > "$DEPLOY_DIR/package.json" << EOF
{
  "name": "westwind-marine-production",
  "version": "1.0.0",
  "type": "module",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "dependencies": {
    "express": "^4.21.2",
    "nodemailer": "^7.0.5",
    "dotenv": "^17.0.1"
  }
}
EOF

# Create deployment instructions
print_status "Creating deployment instructions..."
cat > "$DEPLOY_DIR/DEPLOYMENT_INSTRUCTIONS.txt" << EOF
GoDaddy Shared Hosting Deployment Instructions
==============================================

1. Upload all files in this folder to your GoDaddy public_html directory
2. Edit the .env file with your actual email credentials:
   - EMAIL_USER=contact@westwindmarineelectronics.com
   - EMAIL_PASS=your-email-password
   - EMAIL_TO=info@westwindmarineelectronics.com
   - SMTP_HOST=smtpout.secureserver.net
   - SMTP_PORT=587

3. In cPanel, go to "Setup Node.js App" and create a new application:
   - Application Root: public_html
   - Application URL: your-domain.com
   - Application Startup File: index.js
   - Node.js Version: 18.x or latest

4. Install dependencies in the Node.js app terminal:
   npm install

5. Start the application in cPanel Node.js interface

6. Test your website and contact form

Files included:
- index.html (React app)
- index.js (Node.js server)
- .env (environment variables - EDIT THIS)
- .htaccess (Apache configuration)
- package.json (dependencies)
- assets/ (static files)
- CSS and JS bundles

For detailed instructions, see GODADDY_DEPLOYMENT.md
EOF

# Create a zip file for easy upload
print_status "Creating zip file..."
cd "$DEPLOY_DIR"
zip -r "../westwind-marine-godaddy.zip" .
cd ..

# Show final message
print_status "✅ Deployment package created successfully!"
echo ""
echo "📁 Deployment files: $DEPLOY_DIR/"
echo "📦 Zip file: westwind-marine-godaddy.zip"
echo ""
print_status "Next steps:"
echo "1. Edit $DEPLOY_DIR/.env with your actual email credentials"
echo "2. Upload the contents of $DEPLOY_DIR/ to your GoDaddy public_html directory"
echo "3. Or upload and extract westwind-marine-godaddy.zip in cPanel File Manager"
echo "4. Set up Node.js app in cPanel (see DEPLOYMENT_INSTRUCTIONS.txt)"
echo "5. Test your website and contact form"
echo ""
print_status "For detailed instructions, see GODADDY_DEPLOYMENT.md"