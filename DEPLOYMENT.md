<<<<<<< HEAD
   # Deployment Guide - Quick Reference

## Pre-Deployment Checklist

- [x] `.gitignore` configured to exclude data files
- [x] `.env.example` created (if needed, create manually)
- [x] `data/.gitkeep` created to preserve folder structure
- [x] `render.yaml` configured for automated deployment
- [x] `Procfile` created for process management
- [x] `README.md` updated with deployment instructions
- [x] Data persistence verified (ensureDataFiles() runs on startup)

## Quick Deploy Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Add deployment configuration"
git push origin main
```

### 2. Deploy on Render
1. Go to https://dashboard.render.com
2. New → Web Service
3. Connect GitHub repo
4. Use these settings:
   - Build: `npm install`
   - Start: `npm start`
   - Environment: Node

### 3. Set Environment Variables (in Render Dashboard)
- `SESSION_SECRET` - Generate with: `openssl rand -base64 32`
- `ADMIN_USER` - Your admin username
- `ADMIN_PASS` - Your secure password
- `PORT` - Leave empty (Render sets automatically)

### 4. Verify Deployment
- Check that the site loads
- Test admin login
- Submit test form to verify data persistence
- Check admin dashboard shows the test submission

## Data Persistence Notes

✅ **Data files persist automatically** on Render's free tier
- `data/users.json` - JSON database
- `data/users.csv` - CSV export file

✅ **Data directory is created automatically** on first run via `ensureDataFiles()`

✅ **Data is git-ignored** - won't be committed to repository

## Troubleshooting

**Issue**: Data not persisting after deployment
- **Solution**: Verify `data/` folder exists in Render file system
- Check Render logs for any file permission errors

**Issue**: Admin login not working
- **Solution**: Verify environment variables are set correctly in Render dashboard
- Check that `ADMIN_USER` and `ADMIN_PASS` match your login attempt

**Issue**: Port errors
- **Solution**: Never set `PORT` in environment variables - Render sets it automatically
- The code uses `process.env.PORT || 3000` which handles this correctly

## Backup Strategy

1. **Regular Exports**: Use admin dashboard to download CSV regularly
2. **GitHub**: Commit important configuration (but not user data)
3. **Manual Backups**: Download `data/users.json` from Render file system if needed

## Support

- Render Docs: https://render.com/docs
- Render Status: https://status.render.com

=======
   # Deployment Guide - Quick Reference

## Pre-Deployment Checklist

- [x] `.gitignore` configured to exclude data files
- [x] `.env.example` created (if needed, create manually)
- [x] `data/.gitkeep` created to preserve folder structure
- [x] `render.yaml` configured for automated deployment
- [x] `Procfile` created for process management
- [x] `README.md` updated with deployment instructions
- [x] Data persistence verified (ensureDataFiles() runs on startup)

## Quick Deploy Steps

### 1. Push to GitHub
```bash
git add .
git commit -m "Add deployment configuration"
git push origin main
```

### 2. Deploy on Render
1. Go to https://dashboard.render.com
2. New → Web Service
3. Connect GitHub repo
4. Use these settings:
   - Build: `npm install`
   - Start: `npm start`
   - Environment: Node

### 3. Set Environment Variables (in Render Dashboard)
- `SESSION_SECRET` - Generate with: `openssl rand -base64 32`
- `ADMIN_USER` - Your admin username
- `ADMIN_PASS` - Your secure password
- `PORT` - Leave empty (Render sets automatically)

### 4. Verify Deployment
- Check that the site loads
- Test admin login
- Submit test form to verify data persistence
- Check admin dashboard shows the test submission

## Data Persistence Notes

✅ **Data files persist automatically** on Render's free tier
- `data/users.json` - JSON database
- `data/users.csv` - CSV export file

✅ **Data directory is created automatically** on first run via `ensureDataFiles()`

✅ **Data is git-ignored** - won't be committed to repository

## Troubleshooting

**Issue**: Data not persisting after deployment
- **Solution**: Verify `data/` folder exists in Render file system
- Check Render logs for any file permission errors

**Issue**: Admin login not working
- **Solution**: Verify environment variables are set correctly in Render dashboard
- Check that `ADMIN_USER` and `ADMIN_PASS` match your login attempt

**Issue**: Port errors
- **Solution**: Never set `PORT` in environment variables - Render sets it automatically
- The code uses `process.env.PORT || 3000` which handles this correctly

## Backup Strategy

1. **Regular Exports**: Use admin dashboard to download CSV regularly
2. **GitHub**: Commit important configuration (but not user data)
3. **Manual Backups**: Download `data/users.json` from Render file system if needed

## Support

- Render Docs: https://render.com/docs
- Render Status: https://status.render.com

>>>>>>> 0a3a1db6e046d8b0e488c57522dd7cade99a3cb6
