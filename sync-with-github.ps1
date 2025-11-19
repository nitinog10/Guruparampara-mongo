# PowerShell script to sync with GitHub
Set-Location $PSScriptRoot

Write-Host "Pulling remote changes..."
git pull origin main --allow-unrelated-histories

Write-Host "Adding local changes..."
git add .

Write-Host "Committing changes..."
git commit -m "Update package.json with node-fetch dependency and add .gitignore"

Write-Host "Pushing to GitHub..."
git push -u origin main

Write-Host "Done! Code synced with GitHub."

