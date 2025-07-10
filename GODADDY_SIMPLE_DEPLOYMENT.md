# GoDaddy Shared Hosting - Simple Deployment

## Quick Deployment Steps

### 1. Build Locally
```bash
npm install
npm run build
```

### 2. Files to Upload to GoDaddy public_html

After building, upload these files from your `dist` folder:

**From `dist/public/` folder:**
- `index.html` (main React app)
- All CSS files
- All JS files  
- All asset files (images, videos, etc.)
- `favicon.ico`

**From `dist/` folder:**
- `index.js` (Node.js server)

**From project root:**
- `.env` file (with your GoDaddy email settings)
- `.htaccess` file (Apache configuration)

### 3. Create .env file for GoDaddy

Create `.env` file with these settings:

```env
EMAIL_USER=contact@westwindmarineelectronics.com
EMAIL_PASS=your-email-password
EMAIL_TO=info@westwindmarineelectronics.com
SMTP_HOST=smtpout.secureserver.net
SMTP_PORT=587
NODE_ENV=production
```

### 4. Create package.json for GoDaddy

Create `package.json` in public_html:

```json
{
  "name": "westwind-marine",
  "version": "1.0.0",
  "type": "module",
  "main": "index.js",
  "dependencies": {
    "express": "^4.21.2",
    "nodemailer": "^7.0.5",
    "dotenv": "^17.0.1"
  }
}
```

### 5. Setup Node.js in cPanel

1. Login to GoDaddy cPanel
2. Find "Software" section 
3. Click "Setup Node.js App"
4. Create new application:
   - **Application Root**: `public_html`
   - **Application URL**: `your-domain.com`
   - **Application Startup File**: `index.js`
   - **Node.js Version**: 18.x or latest

5. In the Node.js app terminal, run:
```bash
npm install
```

6. Start the application

### 6. Test

1. Visit your domain
2. Test all pages
3. Test contact form
4. Check email delivery

## Email Configuration for GoDaddy

### SMTP Settings
- **Server**: `smtpout.secureserver.net`
- **Port**: 587 (TLS)
- **Username**: Full email address
- **Password**: Email account password

### Create Email Accounts
In cPanel:
1. Go to Email → Email Accounts
2. Create: `contact@westwindmarineelectronics.com`
3. Create: `info@westwindmarineelectronics.com`

## File Structure on GoDaddy

```
public_html/
├── index.html          # React app
├── index.js           # Node.js server
├── package.json       # Dependencies
├── .env              # Email config
├── .htaccess         # Apache config
├── assets/           # Images, videos
├── *.css            # Stylesheets
├── *.js             # JavaScript
└── favicon.ico      # Icon
```

## Common Issues

### Email Not Working
- Check SMTP credentials
- Verify email accounts exist
- Test with different email provider

### 404 Errors
- Check .htaccess is uploaded
- Verify Node.js app is running
- Check file permissions

### Node.js App Won't Start
- Check package.json syntax
- Verify dependencies installed
- Check startup file path

## Quick Checklist

- [ ] Build project locally
- [ ] Upload all dist files to public_html
- [ ] Create .env with GoDaddy email settings
- [ ] Create package.json
- [ ] Upload .htaccess
- [ ] Setup Node.js app in cPanel
- [ ] Install dependencies
- [ ] Start application
- [ ] Test website and contact form

This simplified approach focuses on the essential files needed for GoDaddy shared hosting deployment.