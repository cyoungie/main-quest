#!/bin/bash
# Add this to your ~/.zshrc for a permanent fix
# Run: source setup-ulimit.sh

echo "Adding ulimit fix to ~/.zshrc..."
if ! grep -q "ulimit -n 4096" ~/.zshrc; then
    echo "" >> ~/.zshrc
    echo "# Fix for EMFILE error in React Native/Expo projects" >> ~/.zshrc
    echo "ulimit -n 4096" >> ~/.zshrc
    echo "✅ Added ulimit fix to ~/.zshrc"
    echo "Run: source ~/.zshrc"
else
    echo "✅ ulimit fix already exists in ~/.zshrc"
fi

