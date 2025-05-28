# Offline Support Documentation

This document details the offline functionality in the Basketball Shot Tracker application.

## Table of Contents

- [Overview](#overview)
- [IndexedDB Storage](#indexeddb-storage)
- [Service Worker](#service-worker)
- [Offline Authentication](#offline-authentication)
- [Data Synchronization](#data-synchronization)
- [Conflict Resolution](#conflict-resolution)
- [Offline UI Indicators](#offline-ui-indicators)
- [Progressive Web App (PWA)](#progressive-web-app-pwa)
- [Offline Pages](#offline-pages)

## Overview

The application provides comprehensive offline support, allowing users to continue using core features without an internet connection. When connectivity is restored, data is synchronized with the server.

## IndexedDB Storage

The application uses IndexedDB for local data storage:

### Database Structure

- `profiles`: User profile data
- `sessions`: Shooting session data
- `shots`: Shot data for each session
- `sync_queue`: Queue of changes to be synchronized
- `auth_tokens`: Securely stored authentication tokens

### Key Functions

- `enhancedIndexedDB.saveProfile(profile, synced)`: Saves profile data
- `enhancedIndexedDB.getProfile(id)`: Retrieves profile data
- `enhancedIndexedDB.saveSession(session, synced)`: Saves session data
- `enhancedIndexedDB.getSessions(userId)`: Retrieves user sessions
- `enhancedIndexedDB.getSession(id)`: Retrieves specific session
- `enhancedIndexedDB.saveShot(shot, synced)`: Saves shot data
- `enhancedIndexedDB.getShots(userId)`: Retrieves user shots
- `enhancedIndexedDB.getShotsBySession(sessionId)`: Retrieves session shots
- `enhancedIndexedDB.markAsSynced(table, id)`: Marks record as synchronized
- `enhancedIndexedDB.getUnsynced(table)`: Retrieves unsynced records

## Service Worker

The service worker (`sw.js`) provides:

- Offline page caching
- Asset caching
- Network request interception
- Background synchronization

Key features:

- Precaching of critical assets
- Runtime caching strategies
- Offline fallback pages
- Sync event handling

## Offline Authentication

Offline authentication is managed through:

- Secure token storage in IndexedDB
- Token expiration management
- Offline session validation
- Seamless online/offline transitions

The `tokenManager` service provides:

- `updateFromSession(session)`: Updates tokens from session
- `refreshToken()`: Attempts to refresh the token
- `isOfflineAccessValid()`: Checks offline access validity
- `extendOfflineAccess()`: Extends offline access period
- `clearTokens()`: Clears stored tokens

## Data Synchronization

Data synchronization is handled by the `syncService`:

- `syncData()`: Synchronizes all unsynced data
- `syncProfiles()`: Synchronizes profile changes
- `syncSessions()`: Synchronizes session changes
- `syncShots()`: Synchronizes shot changes
- `handleSyncError(error, table, record)`: Handles synchronization errors

Synchronization process:

1. Detect network connectivity
2. Retrieve unsynced records
3. Send records to server
4. Handle success/failure
5. Mark successful records as synced
6. Retry failed records with exponential backoff

## Conflict Resolution

The `conflictResolver` handles data conflicts:

- `resolveProfileConflict(local, remote)`: Resolves profile conflicts
- `resolveSessionConflict(local, remote)`: Resolves session conflicts
- `resolveShotConflict(local, remote)`: Resolves shot conflicts

Conflict resolution strategies:

- Timestamp-based resolution (latest wins)
- Field-specific resolution (merge specific fields)
- User preference resolution (prompt user when necessary)

## Offline UI Indicators

The application provides clear UI indicators for offline status:

- `NetworkStatusIndicator`: Shows online/offline status
- `OfflineBanner`: Banner indicating offline mode
- `OfflineSessionBanner`: Banner for offline sessions
- `SyncStatus`: Shows synchronization status

## Progressive Web App (PWA)

The application is configured as a PWA with:

- Web App Manifest (`manifest.ts`)
- Service Worker registration
- Install prompts
- Offline capabilities
- Home screen installation

## Offline Pages

Dedicated offline pages are provided:

- `/offline.html`: Main offline fallback
- `/offline/dashboard.html`: Offline dashboard
- `/offline/profile.html`: Offline profile
- `/offline/sessions.html`: Offline sessions
- `/offline/stats.html`: Offline statistics

These pages use cached data from IndexedDB to provide functionality without a network connection.
