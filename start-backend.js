#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');// so hows going bro

console.log('🚀 Starting BYD Qibray Backend Server...');

// Start the server
const server = spawn('node', ['server/index.js'], {
  cwd: __dirname,
  stdio: 'inherit'
});

server.on('error', (err) => {
  console.error('❌ Failed to start server:', err);
  process.exit(1);
});

server.on('close', (code) => {
  console.log(`🔄 Server process exited with code ${code}`);
  if (code !== 0) {
    console.log('🔄 Restarting server in 3 seconds...');
    setTimeout(() => {
      // Restart the server
      const newServer = spawn('node', ['server/index.js'], {
        cwd: __dirname,
        stdio: 'inherit'
      });
    }, 3000);
  }
});

// Handle process termination
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down server...');
  server.kill('SIGINT');
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down server...');
  server.kill('SIGTERM');
  process.exit(0);
});
