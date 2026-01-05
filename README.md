# VZ Cloud Dashboard

A responsive cloud storage dashboard for displaying storage statistics, recent backups, and storage management.

## Features
- 📊 Real-time storage statistics
- 📷 Media and document tracking
- 🔄 Backup status monitoring
- 📱 Mobile-responsive design

## Deployment on Render.com

### Quick Deploy (Automatic)
1. Push this repository to GitHub
2. Go to [Render Dashboard](https://dashboard.render.com/)
3. Click "New +" and select "Static Site"
4. Connect your GitHub repository
5. Render will automatically detect the configuration from `render.yaml`
6. Click "Create Static Site"

### Manual Configuration (if using UI)
- **Type**: Static Site
- **Build Command**: Leave empty or `echo "Static site"`
- **Publish Directory**: `.` (current directory)

### Local Development
Simply open `vz-cloud-dashboard.html` in your browser, or use any local server:
```bash
# Python
python -m http.server 8000

# PHP
php -S localhost:8000

# Node.js (if you have it)
npx serve
```

## API Integration
The dashboard supports loading data via URL parameters:
- `?apiUrl=YOUR_API_ENDPOINT` - Fetch data from external API
- `?data=BASE64_ENCODED_JSON` - Load data directly from URL

## Files Structure
- `vz-cloud-dashboard.html` - Main dashboard interface
- `styles.css` - Styling and responsive design
- `sample-data.json` - Sample data for testing
- `server.js` - Express server for production
- `render.yaml` - Render.com configuration
