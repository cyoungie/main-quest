# Main Quest 🎮

A Gen Z social app for college students that gamifies campus life with quests, bingo challenges, and digital collectibles.

## Features

- **Quest Board**: Discover and join campus adventures with RPG-style quest cards
- **Campus Bingo**: Complete monthly challenges to level up and unlock achievements
- **Player Profile**: Showcase your badges, stats, and progress as you explore campus life

## Design

- Dark mode interface with neon purple and electric blue accents
- Glassmorphism effects and smooth gradients
- Modern, playful Gen Z aesthetic
- Gamified UI elements (badges, levels, progress bars)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the web development server (recommended):
```bash
npm run dev
```

This will open the app in your browser as a mobile-optimized web app.

3. Alternative: Start Expo dev server:
```bash
npm start
```

4. Run on iOS (if file watcher issues are resolved):
```bash
npm run ios
```

Or scan the QR code with the Expo Go app on your iPhone.

## Troubleshooting

### EMFILE: too many open files error

If you encounter the "EMFILE: too many open files" error on macOS, try:

1. **Temporary fix** (for current session):
```bash
ulimit -n 4096
```

2. **Permanent fix** - Add to your `~/.zshrc` or `~/.bash_profile`:
```bash
echo "ulimit -n 4096" >> ~/.zshrc
source ~/.zshrc
```

3. **Alternative**: Install Watchman (recommended for React Native development):
```bash
brew install watchman
```

## Project Structure

```
mainquest/
├── App.js                 # Main app entry with navigation
├── theme.js              # Shared colors, gradients, and typography
├── screens/
│   ├── QuestBoardScreen.js    # Main discovery feed
│   ├── CampusBingoScreen.js   # Gamification bingo grid
│   └── PlayerProfileScreen.js # Profile with badges
└── package.json
```

## Tech Stack

- React Native
- Expo
- React Navigation
- Expo Linear Gradient
- Expo Blur

## Screens

### Quest Board
The main discovery feed showing available quests with:
- Spot availability indicators
- Legendary quest badges
- RPG-style card design

### Campus Bingo
A 4x4 grid of monthly challenges with:
- Progress tracking
- Level up system
- Completion stamps

### Player Profile
Your character sheet featuring:
- Level and XP display
- Trophy case with collectible badges
- Achievement statistics

