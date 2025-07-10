# GoDaddy Shared Hosting Deployment Guide

This guide provides step-by-step instructions for deploying West Wind Marine Electronics website on GoDaddy shared hosting using only the built dist folder.

## Prerequisites

- GoDaddy shared hosting account with cPanel access
- Domain name configured
- Email accounts created in cPanel
- FTP/File Manager access

## Step 1: Build the Project Locally

### Build the Application
```bash
# Install dependencies
npm install

# Build the project
npm run build
```

This creates a `dist` folder containing:
- `dist/public/` - Static website files
- `dist/index.js` - Server application (Node.js)

## Step 2: Configure Environment Variables

### Create .env file in project root
```env
# Email Configuration for GoDaddy
EMAIL_USER=contact@westwindmarineelectronics.com
EMAIL_PASS=your-email-password
EMAIL_TO=info@westwindmarineelectronics.com
SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=587

# Application Settings
NODE_ENV=production
PORT=3000
```

**Note**: GoDaddy uses `smtpout.secureserver.net` as the SMTP server.

## Step 3: Upload Files to GoDaddy

### Option A: Using cPanel File Manager

1. Login to your GoDaddy cPanel
2. Open File Manager
3. Navigate to `public_html` folder
4. Upload the contents of `dist/public/` folder to `public_html`
5. Upload `dist/index.js` to `public_html`
6. Upload `.env` file to `public_html`
7. Upload `package.json` to `public_html`

### Option B: Using FTP
```bash
# Connect to your GoDaddy FTP server
ftp your-domain.com

# Navigate to public_html
cd public_html

# Upload dist/public/* files
put dist/public/*

# Upload server files
put dist/index.js
put .env
put package.json
```

## Step 4: Configure Node.js Application

### Enable Node.js in cPanel
1. Login to cPanel
2. Find "Software" section
3. Click "Setup Node.js App"
4. Create new application:
   - **Node.js Version**: 18.x or latest
   - **Application Mode**: Production
   - **Application Root**: public_html
   - **Application URL**: your-domain.com
   - **Application Startup File**: index.js

### Install Dependencies
```bash
# In cPanel Node.js App terminal
npm install express nodemailer dotenv
```

## Step 5: Update .htaccess for Shared Hosting

### Create .htaccess in public_html
```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Node.js application handling
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} ^/api/
RewriteRule ^(.*)$ /index.js [L,QSA]

RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} ^/contact$
RewriteRule ^(.*)$ /index.js [L,QSA]

# Serve static files
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteCond %{REQUEST_URI} !^/api/
RewriteCond %{REQUEST_URI} !^/contact$
RewriteRule . /index.html [L]

# Security headers
<IfModule mod_headers.c>
    Header always set X-Content-Type-Options nosniff
    Header always set X-Frame-Options SAMEORIGIN
    Header always set X-XSS-Protection "1; mode=block"
</IfModule>

# Protect sensitive files
<Files ".env">
    Order allow,deny
    Deny from all
</Files>

# Enable compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Browser caching
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/gif "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType image/x-icon "access plus 1 year"
    ExpiresDefault "access plus 7 days"
</IfModule>
```

## Step 6: Configure Email Settings

### Create Email Accounts in cPanel
1. Login to cPanel
2. Go to "Email" section
3. Click "Email Accounts"
4. Create these accounts:
   - `contact@westwindmarineelectronics.com`
   - `info@westwindmarineelectronics.com`

### SMTP Configuration
- **SMTP Server**: `smtpout.secureserver.net`
- **Port**: 587 (TLS) or 465 (SSL)
- **Authentication**: Yes
- **Username**: Full email address
- **Password**: Email account password

## Step 7: Test the Deployment

### Test Website
1. Visit your domain: `https://westwindmarineelectronics.com`
2. Check all pages load correctly
3. Test responsive design
4. Verify video playback

### Test Contact Form
1. Fill out the contact form
2. Submit the form
3. Check email delivery
4. Verify form validation

## Step 8: SSL Certificate Setup

### Enable SSL in cPanel
1. Login to cPanel
2. Go to "Security" section
3. Click "SSL/TLS"
4. Enable "Force HTTPS Redirect"
5. Install SSL certificate (Let's Encrypt is usually free)

## Troubleshooting Common Issues

### Node.js Application Not Starting
- Check Node.js version compatibility
- Verify all dependencies are installed
- Check application logs in cPanel

### Email Not Sending
- Verify SMTP credentials
- Check email account exists
- Test SMTP connection manually

### Static Files Not Loading
- Check file permissions (755 for folders, 644 for files)
- Verify .htaccess configuration
- Check file paths in index.html

### 404 Errors on Page Refresh
- Ensure .htaccess rewrites are working
- Check React Router configuration
- Verify server routing

## File Structure on GoDaddy

```
public_html/
├── index.html              # React app entry point
├── index.js               # Node.js server
├── .env                   # Environment variables
├── .htaccess             # Apache configuration
├── package.json          # Dependencies
├── assets/               # Static assets
├── css/                  # Stylesheets
├── js/                   # JavaScript bundles
└── favicon.ico           # Website icon
```

## Performance Optimization

### Enable Compression
- Gzip compression via .htaccess
- Minified CSS and JS files
- Optimized images

### Browser Caching
- Set appropriate cache headers
- Cache static assets for 1 month
- Cache HTML for 7 days

### Image Optimization
- Compress images before upload
- Use appropriate formats (WebP, AVIF)
- Serve responsive images

## Security Considerations

### File Protection
- Protect .env file access
- Hide sensitive files
- Set proper file permissions

### HTTPS Enforcement
- Force HTTPS redirect
- HSTS headers
- Secure cookie settings

### Input Validation
- Sanitize form inputs
- Rate limiting for contact form
- CSRF protection

## Maintenance

### Regular Updates
- Keep Node.js updated
- Update dependencies
- Monitor security patches

### Backup Strategy
- Regular file backups
- Database backups (if applicable)
- Email backup

### Monitoring
- Check website availability
- Monitor email delivery
- Review access logs

## Support Resources

### GoDaddy Support
- Phone: 1-480-505-8877
- Chat: Available in cPanel
- Help Center: help.godaddy.com

### Technical Documentation
- Node.js: nodejs.org/docs
- Express: expressjs.com
- Nodemailer: nodemailer.com

This deployment method is optimized for GoDaddy shared hosting and doesn't require PM2 or complex server management.