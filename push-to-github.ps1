# PowerShell script to push to GitHub
Set-Location $PSScriptRoot

# Initialize git if not already initialized
if (-not (Test-Path .git)) {
    Write-Host "Initializing git repository..."
    git init
}

# Add remote if it doesn't exist
$remoteExists = git remote | Select-String -Pattern "origin"
if (-not $remoteExists) {
    Write-Host "Adding remote origin..."
    git remote add origin https://github.com/HarrisWarner04/GuruParampara.git
} else {
    Write-Host "Updating remote origin..."
    git remote set-url origin https://github.com/HarrisWarner04/GuruParampara.git
}

# Add all files
Write-Host "Adding all files..."
git add .

# Commit changes
Write-Host "Committing changes..."
git commit -m "Update package.json with node-fetch dependency"

# Push to main branch
Write-Host "Pushing to GitHub..."
git branch -M main
git push -u origin main

Write-Host "Done! Code pushed to GitHub."

