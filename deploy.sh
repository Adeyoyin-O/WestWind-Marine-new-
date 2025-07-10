#!/bin/bash

# West Wind Marine Electronics - Production Deployment Script
# This script automates the deployment process for Apache webserver

echo "🚀 Starting deployment process for West Wind Marine Electronics..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if running as root
if [[ $EUID -eq 0 ]]; then
   print_error "This script should not be run as root. Please run as a regular user with sudo privileges."
   exit 1
fi

# Check if required tools are installed
check_dependencies() {
    print_status "Checking dependencies..."
    
    # Check Node.js
    if ! command -v node &> /dev/null; then
        print_error "Node.js is not installed. Please install Node.js 18+ first."
        exit 1
    fi
    
    # Check npm
    if ! command -v npm &> /dev/null; then
        print_error "npm is not installed. Please install npm first."
        exit 1
    fi
    
    # Check Apache
    if ! command -v apache2 &> /dev/null && ! command -v httpd &> /dev/null; then
        print_error "Apache is not installed. Please install Apache first."
        exit 1
    fi
    
    print_status "Dependencies check passed ✓"
}

# Install project dependencies
install_dependencies() {
    print_status "Installing project dependencies..."
    
    if npm install; then
        print_status "Dependencies installed successfully ✓"
    else
        print_error "Failed to install dependencies"
        exit 1
    fi
}

# Build the project
build_project() {
    print_status "Building the project..."
    
    # Type check first
    if npm run check; then
        print_status "Type checking passed ✓"
    else
        print_error "Type checking failed"
        exit 1
    fi
    
    # Build the project
    if npm run build; then
        print_status "Build completed successfully ✓"
    else
        print_error "Build failed"
        exit 1
    fi
}

# Create logs directory
create_logs_directory() {
    print_status "Creating logs directory..."
    
    if [ ! -d "logs" ]; then
        mkdir logs
        print_status "Logs directory created ✓"
    else
        print_status "Logs directory already exists ✓"
    fi
}

# Set up environment file
setup_environment() {
    print_status "Setting up environment configuration..."
    
    if [ ! -f ".env" ]; then
        if [ -f ".env.example" ]; then
            cp .env.example .env
            print_warning "Created .env file from .env.example"
            print_warning "Please edit .env file with your actual configuration before starting the application"
        else
            print_error ".env.example file not found"
            exit 1
        fi
    else
        print_status "Environment file already exists ✓"
    fi
}

# Set file permissions
set_permissions() {
    print_status "Setting file permissions..."
    
    # Set ownership to www-data if running on server
    if id "www-data" &>/dev/null; then
        sudo chown -R www-data:www-data .
        print_status "Ownership set to www-data ✓"
    fi
    
    # Set appropriate permissions
    chmod -R 755 .
    chmod 600 .env 2>/dev/null || true
    
    print_status "File permissions set ✓"
}

# Install PM2 globally if not installed
install_pm2() {
    print_status "Checking PM2 installation..."
    
    if ! command -v pm2 &> /dev/null; then
        print_status "Installing PM2 globally..."
        if sudo npm install -g pm2; then
            print_status "PM2 installed successfully ✓"
        else
            print_error "Failed to install PM2"
            exit 1
        fi
    else
        print_status "PM2 already installed ✓"
    fi
}

# Start the application with PM2
start_application() {
    print_status "Starting application with PM2..."
    
    # Stop existing application if running
    pm2 stop westwind-marine 2>/dev/null || true
    pm2 delete westwind-marine 2>/dev/null || true
    
    # Start the application
    if pm2 start ecosystem.config.js --env production; then
        print_status "Application started successfully ✓"
        
        # Save PM2 configuration
        pm2 save
        print_status "PM2 configuration saved ✓"
        
        # Set up PM2 startup
        pm2 startup
        print_status "PM2 startup configured ✓"
    else
        print_error "Failed to start application"
        exit 1
    fi
}

# Test email configuration
test_email_config() {
    print_status "Testing email configuration..."
    
    # Check if all required environment variables are set
    if [ -f ".env" ]; then
        source .env
        if [ -n "$EMAIL_USER" ] && [ -n "$EMAIL_PASS" ] && [ -n "$SMTP_HOST" ] && [ -n "$SMTP_PORT" ]; then
            print_status "Email configuration variables are set ✓"
        else
            print_warning "Some email configuration variables are missing"
            print_warning "Please ensure EMAIL_USER, EMAIL_PASS, SMTP_HOST, and SMTP_PORT are set in .env"
        fi
    else
        print_warning "No .env file found"
    fi
}

# Display deployment summary
display_summary() {
    print_status "Deployment Summary:"
    echo "===================="
    echo "📁 Project Location: $(pwd)"
    echo "🌐 Application URL: https://$(hostname -f)"
    echo "📧 Contact Form: Configured"
    echo "🔧 Process Manager: PM2"
    echo "📊 Monitoring: pm2 monit"
    echo "📋 Logs: pm2 logs westwind-marine"
    echo ""
    print_status "Next Steps:"
    echo "1. Configure your Apache virtual host using apache-config.conf"
    echo "2. Set up SSL certificate"
    echo "3. Update DNS records"
    echo "4. Test the contact form"
    echo "5. Monitor application logs"
    echo ""
    print_status "Useful Commands:"
    echo "- View logs: pm2 logs westwind-marine"
    echo "- Restart app: pm2 restart westwind-marine"
    echo "- Stop app: pm2 stop westwind-marine"
    echo "- Monitor: pm2 monit"
    echo ""
}

# Main deployment process
main() {
    print_status "Starting West Wind Marine Electronics deployment..."
    
    check_dependencies
    install_dependencies
    build_project
    create_logs_directory
    setup_environment
    set_permissions
    install_pm2
    start_application
    test_email_config
    display_summary
    
    print_status "Deployment completed successfully! 🎉"
    print_status "Your West Wind Marine Electronics website is now running."
}

# Run main function
main "$@"