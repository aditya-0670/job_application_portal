// This script ensures the build output is properly configured for Netlify
const fs = require('fs');
const path = require('path');

// Ensure the index.html file has the correct base path
const indexPath = path.join(__dirname, 'dist', 'index.html');

if (fs.existsSync(indexPath)) {
  let content = fs.readFileSync(indexPath, 'utf8');
  
  // Update script and link paths to be relative
  content = content
    .replace(/\/src\//g, './')
    .replace(/\/assets\//g, './assets/');
    
  fs.writeFileSync(indexPath, content, 'utf8');
  console.log('✅ Postbuild: Updated index.html for production');
} else {
  console.warn('⚠️  Postbuild: Could not find index.html in dist folder');
}
