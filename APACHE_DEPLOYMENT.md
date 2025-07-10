# Apache Webserver Deployment Guide

This guide provides comprehensive instructions for deploying the West Wind Marine Electronics website on an Apache webserver with contact form functionality.

## Prerequisites

- Apache 2.4+ webserver
- Node.js 18+ installed on server
- SSL certificate for HTTPS
- Email account with SMTP access
- Domain name pointed to your server

## Deployment Steps

### 1. Server Preparation

#### Install Required Software
```bash
# Ubuntu/Debian
sudo apt update
sudo apt install apache2 nodejs npm
sudo a2enmod rewrite ssl headers proxy proxy_http

# CentOS/RHEL
sudo yum install httpd nodejs npm
sudo systemctl enable httpd
```

#### Install PM2 for Node.js Process Management
```bash
sudo npm install -g pm2
```

### 2. Project Setup

#### Upload Project Files
```bash
# Create project directory
sudo mkdir -p /var/www/westwindmarineelectronics.com
sudo chown -R www-data:www-data /var/www/westwindmarineelectronics.com

# Upload your project files to this directory
# You can use scp, rsync, or git clone
```

#### Install Dependencies and Build
```bash
cd /var/www/westwindmarineelectronics.com
npm install
npm run build
```

### 3. Environment Configuration

#### Create Production Environment File
```bash
# Create .env file
sudo nano /var/www/westwindmarineelectronics.com/.env
```

#### Add Configuration (replace with your actual values)
```env
# Email Configuration
EMAIL_USER=contact@westwindmarineelectronics.com
EMAIL_PASS=your-email-password
EMAIL_TO=info@westwindmarineelectronics.com
SMTP_HOST=mail.westwindmarineelectronics.com
SMTP_PORT=587

# Application Settings
NODE_ENV=production
PORT=5000
```

### 4. Apache Configuration

#### Create Virtual Host Configuration
```bash
sudo nano /etc/apache2/sites-available/westwindmarineelectronics.com.conf
```

Copy the configuration from `apache-config.conf` file in the project root.

#### Enable the Site
```bash
sudo a2ensite westwindmarineelectronics.com.conf
sudo systemctl reload apache2
```

#### For Shared Hosting (cPanel)
If using shared hosting, copy the `.htaccess` file to your website's root directory.

### 5. SSL Certificate Setup

#### Using Let's Encrypt (Free SSL)
```bash
sudo apt install certbot python3-certbot-apache
sudo certbot --apache -d westwindmarineelectronics.com -d www.westwindmarineelectronics.com
```

#### Using Custom SSL Certificate
- Upload your SSL certificate files to `/etc/ssl/certs/`
- Upload your private key to `/etc/ssl/private/`
- Update the Apache configuration with correct file paths

### 6. Start Node.js Application

#### Using PM2 (Recommended)
```bash
cd /var/www/westwindmarineelectronics.com
pm2 start npm --name "westwind-marine" -- start
pm2 startup
pm2 save
```

#### Alternative: Using systemd
Create a systemd service file:
```bash
sudo nano /etc/systemd/system/westwind-marine.service
```

```ini
[Unit]
Description=West Wind Marine Electronics Website
After=network.target

[Service]
Type=simple
User=www-data
WorkingDirectory=/var/www/westwindmarineelectronics.com
ExecStart=/usr/bin/node dist/index.js
Restart=always
RestartSec=10
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target
```

Enable and start the service:
```bash
sudo systemctl enable westwind-marine
sudo systemctl start westwind-marine
```

### 7. Email Configuration

#### Domain-based Email Setup
1. Create email accounts in your hosting control panel:
   - `contact@westwindmarineelectronics.com` (sender)
   - `info@westwindmarineelectronics.com` (recipient)

2. Configure SMTP settings in your `.env` file

#### Common SMTP Settings by Provider

**cPanel/Shared Hosting:**
```env
SMTP_HOST=mail.yourdomain.com
SMTP_PORT=587
```

**Google Workspace:**
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
```

**Office 365:**
```env
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
```

### 8. Testing

#### Test Contact Form
1. Visit your website
2. Fill out the contact form
3. Check server logs for any errors
4. Verify email delivery

#### Monitor Logs
```bash
# Apache logs
sudo tail -f /var/log/apache2/error.log
sudo tail -f /var/log/apache2/access.log

# Application logs (if using PM2)
pm2 logs westwind-marine

# Application logs (if using systemd)
sudo journalctl -u westwind-marine -f
```

### 9. Security Considerations

#### File Permissions
```bash
sudo chown -R www-data:www-data /var/www/westwindmarineelectronics.com
sudo chmod -R 755 /var/www/westwindmarineelectronics.com
sudo chmod 600 /var/www/westwindmarineelectronics.com/.env
```

#### Firewall Configuration
```bash
# Ubuntu/Debian
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw enable

# CentOS/RHEL
sudo firewall-cmd --permanent --add-service=http
sudo firewall-cmd --permanent --add-service=https
sudo firewall-cmd --reload
```

### 10. Maintenance

#### Regular Updates
```bash
# Update system packages
sudo apt update && sudo apt upgrade

# Update Node.js dependencies
cd /var/www/westwindmarineelectronics.com
npm audit fix
npm update
```

#### Backup Strategy
1. Regular database backups (if using database)
2. File system backups
3. Environment configuration backups
4. SSL certificate backups

#### Monitor Application
```bash
# Check PM2 status
pm2 status

# Check Apache status
sudo systemctl status apache2

# Check application logs
pm2 logs westwind-marine
```

## Troubleshooting

### Common Issues

1. **502 Bad Gateway Error**
   - Check if Node.js application is running
   - Verify proxy configuration in Apache
   - Check firewall settings

2. **Email Not Sending**
   - Verify SMTP credentials
   - Check email server configuration
   - Review application logs

3. **SSL Certificate Issues**
   - Verify certificate files exist
   - Check certificate expiration
   - Ensure proper file permissions

4. **Static Files Not Loading**
   - Check Apache document root
   - Verify file permissions
   - Check .htaccess configuration

### Support

For additional support, check:
- Apache error logs
- Application logs
- Email server logs
- DNS configuration

## Performance Optimization

### Enable Caching
- Configure Apache mod_expires
- Set up proper cache headers
- Enable gzip compression

### Database Optimization
- If using PostgreSQL, optimize queries
- Set up connection pooling
- Configure database indexes

### CDN Setup
- Consider using a CDN for static assets
- Configure proper cache headers
- Optimize image sizes

This completes the Apache webserver deployment guide for West Wind Marine Electronics website with full contact form functionality.