#!/bin/bash
# Increase file limit to prevent EMFILE errors
ulimit -n 4096
# Start Expo
npm start

