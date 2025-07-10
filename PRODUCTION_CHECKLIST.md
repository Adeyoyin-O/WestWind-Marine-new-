# Production Deployment Checklist

## Pre-Deployment Requirements

### Server Requirements
- [ ] Apache 2.4+ webserver installed and configured
- [ ] Node.js 18+ installed on server
- [ ] PM2 process manager installed (`npm install -g pm2`)
- [ ] SSL certificate obtained (Let's Encrypt recommended)
- [ ] Domain name configured and pointing to server

### Email Configuration
- [ ] Create email accounts:
  - [ ] `contact@westwindmarineelectronics.com` (sender)
  - [ ] `info@westwindmarineelectronics.com` (recipient)
- [ ] Obtain SMTP credentials from hosting provider
- [ ] Test email sending from server

### File Preparation
- [ ] Upload all project files to server
- [ ] Copy `.env.example` to `.env`
- [ ] Configure `.env` with production values
- [ ] Set proper file permissions

## Deployment Steps

### 1. Initial Setup
```bash
# Run the automated deployment script
./deploy.sh
```

### 2. Apache Configuration
```bash
# Copy virtual host configuration
sudo cp apache-config.conf /etc/apache2/sites-available/westwindmarineelectronics.com.conf

# Enable the site
sudo a2ensite westwindmarineelectronics.com.conf

# Enable required modules
sudo a2enmod rewrite ssl headers proxy proxy_http

# Test configuration
sudo apache2ctl configtest

# Reload Apache
sudo systemctl reload apache2
```

### 3. SSL Certificate Setup
```bash
# Using Let's Encrypt (recommended)
sudo apt install certbot python3-certbot-apache
sudo certbot --apache -d westwindmarineelectronics.com -d www.westwindmarineelectronics.com

# Or upload custom SSL certificate files to:
# /etc/ssl/certs/westwindmarineelectronics.com.crt
# /etc/ssl/private/westwindmarineelectronics.com.key
```

### 4. Application Management
```bash
# Start application
pm2 start ecosystem.config.js --env production

# Save PM2 configuration
pm2 save

# Set up PM2 startup
pm2 startup

# Monitor application
pm2 monit
```

## Post-Deployment Testing

### Website Testing
- [ ] Visit https://westwindmarineelectronics.com
- [ ] Check all pages load correctly
- [ ] Test responsive design on mobile devices
- [ ] Verify all navigation links work
- [ ] Test video playback on homepage

### Contact Form Testing
- [ ] Fill out and submit contact form
- [ ] Check email delivery to recipient
- [ ] Verify email formatting (HTML and plain text)
- [ ] Test form validation (empty fields, invalid email)
- [ ] Check success/error messages display correctly

### Performance Testing
- [ ] Test page load speeds
- [ ] Check compression is working (gzip/deflate)
- [ ] Verify caching headers are set
- [ ] Test SSL certificate validity
- [ ] Check security headers

## Monitoring and Maintenance

### Log Monitoring
```bash
# Application logs
pm2 logs westwind-marine

# Apache logs
sudo tail -f /var/log/apache2/error.log
sudo tail -f /var/log/apache2/access.log
```

### Health Checks
- [ ] Set up uptime monitoring
- [ ] Configure email alerts for downtime
- [ ] Monitor server resources (CPU, memory, disk)
- [ ] Check SSL certificate expiration

### Regular Maintenance
- [ ] Update system packages monthly
- [ ] Update Node.js dependencies
- [ ] Review and rotate logs
- [ ] Backup website files and database
- [ ] Monitor security updates

## Troubleshooting Common Issues

### 502 Bad Gateway
- Check if Node.js application is running: `pm2 status`
- Verify proxy configuration in Apache
- Check application logs: `pm2 logs westwind-marine`

### Email Not Sending
- Verify SMTP credentials in `.env`
- Check firewall settings (port 587/465)
- Review email server logs
- Test SMTP connection manually

### SSL Certificate Issues
- Check certificate expiration: `openssl x509 -in /etc/ssl/certs/westwindmarineelectronics.com.crt -text -noout`
- Verify certificate chain
- Check file permissions: `ls -la /etc/ssl/certs/`

### Static Files Not Loading
- Check Apache document root configuration
- Verify file permissions: `ls -la /var/www/westwindmarineelectronics.com/`
- Check .htaccess file configuration

## Security Checklist

### File Security
- [ ] Protect sensitive files (.env, .htaccess)
- [ ] Set correct file permissions (755 for directories, 644 for files)
- [ ] Remove development files from production

### Apache Security
- [ ] Hide server version information
- [ ] Set security headers
- [ ] Disable directory browsing
- [ ] Configure fail2ban for brute force protection

### Application Security
- [ ] Validate all form inputs
- [ ] Sanitize email content
- [ ] Use HTTPS everywhere
- [ ] Implement rate limiting for contact form

## Performance Optimization

### Apache Configuration
- [ ] Enable gzip compression
- [ ] Configure browser caching
- [ ] Optimize image delivery
- [ ] Set up CDN if needed

### Application Optimization
- [ ] Optimize video file sizes
- [ ] Minify CSS and JavaScript
- [ ] Use appropriate image formats
- [ ] Enable database query optimization

## Backup Strategy

### Files to Backup
- [ ] Website files: `/var/www/westwindmarineelectronics.com/`
- [ ] Environment configuration: `.env`
- [ ] Apache configuration: `/etc/apache2/sites-available/`
- [ ] SSL certificates: `/etc/ssl/`

### Backup Schedule
- [ ] Daily: Application files and configuration
- [ ] Weekly: Full server backup
- [ ] Monthly: Archive old backups

## Support Contacts

### Technical Support
- Hosting Provider: [Your hosting provider support]
- Domain Registrar: [Your domain registrar support]
- SSL Certificate: [Your SSL provider support]

### Emergency Contacts
- System Administrator: [Your admin contact]
- Development Team: [Your development team contact]
- Business Owner: [West Wind Marine Electronics contact]

---

**Note**: This checklist should be customized based on your specific hosting environment and requirements. Always test thoroughly in a staging environment before deploying to production.