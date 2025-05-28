# App Store Preparation Guide

This guide outlines the steps needed to prepare the Shot Tracker app for submission to the Apple App Store and Google Play Store.

## Prerequisites

1. Apple Developer Account ($99/year)
2. Google Play Developer Account ($25 one-time fee)
3. Xcode installed (for iOS)
4. Android Studio installed (for Android)

## Building the App

1. Build the Next.js app for static export:
   \`\`\`bash
   npm run build
   \`\`\`

2. Sync the web code to the native projects:
   \`\`\`bash
   npx cap sync
   \`\`\`

## iOS App Store Preparation

1. Open the iOS project in Xcode:
   \`\`\`bash
   npx cap open ios
   \`\`\`

2. Configure App Settings:
   - Set Bundle Identifier (com.shottracker.app)
   - Set Version and Build numbers
   - Configure Signing & Capabilities with your Apple Developer account

3. Add Required App Store Information:
   - App Privacy Policy URL
   - App Store screenshots (6.5", 5.5", and 12.9" sizes)
   - App Store icon (1024x1024px)
   - App description and keywords

4. Configure App Store Connect:
   - Create a new app in App Store Connect
   - Set up App Store Information
   - Configure In-App Purchases (if applicable)

5. Submit for Review:
   - Archive the app in Xcode
   - Upload to App Store Connect
   - Submit for review

## Google Play Store Preparation

1. Open the Android project in Android Studio:
   \`\`\`bash
   npx cap open android
   \`\`\`

2. Configure App Settings:
   - Update applicationId in build.gradle (com.shottracker.app)
   - Set versionCode and versionName
   - Configure signing with your keystore

3. Add Required Play Store Information:
   - Privacy Policy URL
   - Play Store screenshots (phone, 7" tablet, 10" tablet)
   - Feature graphic (1024x500px)
   - App icon (512x512px)
   - App description and keywords

4. Configure Google Play Console:
   - Create a new app in Google Play Console
   - Set up Store Listing
   - Configure In-App Products (if applicable)

5. Submit for Review:
   - Generate signed APK/Bundle
   - Upload to Google Play Console
   - Submit for review

## App Store Guidelines Compliance

### Apple App Store

1. Ensure proper use of Apple's Human Interface Guidelines
2. Implement proper data handling and privacy practices
3. Include all required privacy labels
4. Test thoroughly on iOS devices

### Google Play Store

1. Follow Material Design guidelines where appropriate
2. Implement proper permissions handling
3. Complete the Data Safety form
4. Test thoroughly on Android devices

## Common Requirements

1. Privacy Policy
2. Terms of Service
3. Support contact information
4. Age rating information
\`\`\`

## 13. Update Package.json with Capacitor Scripts
