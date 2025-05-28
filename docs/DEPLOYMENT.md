# Deployment Documentation

This document details the deployment process for the Basketball Shot Tracker application.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Vercel Deployment](#vercel-deployment)
- [Supabase Setup](#supabase-setup)
- [Environment Variables](#environment-variables)
- [Build Process](#build-process)
- [Continuous Integration/Deployment](#continuous-integrationdeployment)
- [Mobile App Deployment](#mobile-app-deployment)
- [Post-Deployment Verification](#post-deployment-verification)
- [Rollback Procedures](#rollback-procedures)

## Overview

The Basketball Shot Tracker application is deployed as a web application on Vercel with a Supabase backend. It can also be packaged as a mobile application using Capacitor.

## Prerequisites

- Node.js 18+ and npm/yarn
- Vercel account
- Supabase account
- (Optional) Apple Developer account for iOS deployment
- (Optional) Google Play Developer account for Android deployment

## Vercel Deployment

### Initial Setup

1. Connect your GitHub repository to Vercel
2. Configure the project settings:
   - Framework preset: Next.js
   - Build command: `next build`
   - Output directory: `.next`
   - Install command: `npm install`

### Deployment Configuration

1. Set up environment variables (see [Environment Variables](#environment-variables))
2. Configure build settings:
   - Node.js version: 18.x
   - Include source maps: Yes (for error tracking)

### Custom Domains

1. Add your custom domain in the Vercel dashboard
2. Configure DNS settings as instructed
3. Enable HTTPS with automatic certificate management

## Supabase Setup

### Database Setup

1. Create a new Supabase project
2. Run the database schema migrations:
   - Execute `schema.sql` to create initial tables
   - Execute additional migration files as needed

### Authentication Setup

1. Configure email authentication
2. Set up password policies
3. Configure email templates for verification and password reset

### Storage Setup

1. Create the necessary storage buckets:
   - `avatars`: For user profile pictures
   - `session-images`: For session-related images

### Row Level Security (RLS)

1. Apply RLS policies from the migration files
2. Verify policy effectiveness with test queries

## Environment Variables

Required environment variables:

- `NEXT_PUBLIC_SUPABASE_URL`: Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`: Supabase anonymous key
- `SUPABASE_SERVICE_ROLE_KEY`: Supabase service role key (server-side only)
- `SUPABASE_JWT_SECRET`: JWT secret for token validation
- `POSTGRES_URL`: PostgreSQL connection URL
- `POSTGRES_PRISMA_URL`: PostgreSQL URL for Prisma
- `POSTGRES_URL_NON_POOLING`: Non-pooling PostgreSQL URL
- `POSTGRES_USER`: PostgreSQL username
- `POSTGRES_PASSWORD`: PostgreSQL password
- `POSTGRES_DATABASE`: PostgreSQL database name
- `POSTGRES_HOST`: PostgreSQL host

## Build Process

The build process includes:

1. Installing dependencies
2. Type checking with TypeScript
3. Linting with ESLint
4. Building the Next.js application
5. Generating PWA assets
6. Creating the service worker

Build command:
\`\`\`bash
npm run build
\`\`\`

## Continuous Integration/Deployment

CI/CD is handled through GitHub Actions and Vercel:

### GitHub Actions Workflow

1. Run tests on pull requests
2. Check code quality and formatting
3. Build preview deployments for pull requests

### Vercel Deployment

1. Automatic deployments on main branch changes
2. Preview deployments for pull requests
3. Production deployments with manual promotion

## Mobile App Deployment

### Capacitor Setup

1. Build the web application
2. Add Capacitor configuration
3. Add native platforms:
   \`\`\`bash
   npx cap add ios
   npx cap add android
   \`\`\`

### iOS Deployment

1. Open the iOS project in Xcode
2. Configure signing certificates
3. Build and archive the application
4. Submit to App Store Connect

### Android Deployment

1. Open the Android project in Android Studio
2. Configure signing keys
3. Build the release APK/AAB
4. Submit to Google Play Console

## Post-Deployment Verification

After deployment, verify:

1. Authentication flows
2. Database connections
3. Storage functionality
4. Offline capabilities
5. PWA installation
6. Mobile app functionality

## Rollback Procedures

If issues are detected:

1. Identify the problematic deployment
2. Revert to the previous successful deployment in Vercel
3. Verify database schema compatibility
4. Communicate the rollback to users if necessary
