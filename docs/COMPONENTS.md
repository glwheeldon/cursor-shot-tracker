# Components Documentation

This document provides details about the reusable components in the Basketball Shot Tracker application.

## Table of Contents

- [UI Components](#ui-components)
- [Layout Components](#layout-components)
- [Authentication Components](#authentication-components)
- [Session Components](#session-components)
- [Stats Components](#stats-components)
- [Utility Components](#utility-components)
- [Coach-Specific Components](#coach-specific-components)

## UI Components

### Button

Enhanced button component with multiple variants:

- Default
- Outline
- Ghost
- Link
- Destructive

### Card

Card container with subcomponents:

- CardHeader
- CardTitle
- CardDescription
- CardContent
- CardFooter

### Input

Enhanced input field with validation support.

### Select

Dropdown select component with search capability.

### Avatar

User avatar component with fallback support.

### Badge

Status badge with multiple variants.

### Toast

Notification toast system with:

- Success
- Error
- Warning
- Info variants

### Progress

Progress bar component for visualizing completion.

### Tabs

Tabbed interface component.

## Layout Components

### Header

Application header with navigation and user menu.

### PageContainer

Standard page container with consistent padding and max-width.

### BottomNav

Mobile-friendly bottom navigation bar.

### CoachBottomNav

Coach-specific bottom navigation with different navigation items.

### EmptyState

Component for displaying empty state messages with optional actions.

## Authentication Components

### LoginForm

Login form with email/password fields and validation.

### SignupForm

Consolidated signup form with role selection and all required fields.

### ProtectedRoute

Route wrapper that redirects unauthenticated users.

### CoachProtectedRoute

Route wrapper specifically for coach-only routes.

## Session Components

### SessionCard

Card displaying session summary information.

### SessionDatePicker

Date picker optimized for selecting session dates.

### NewSessionButton

Button with form for creating new sessions.

## Stats Components

### StatsCard

Card displaying shooting statistics.

### ProgressChart

Chart for visualizing progress over time.

### AccuracyDisplay

Component for displaying shooting accuracy with visual indicators.

## Utility Components

### LoadingSpinner

Animated loading spinner.

### ErrorBoundary

React error boundary for graceful error handling.

### SuspenseWrapper

Wrapper for React Suspense with fallback UI.

### NetworkStatusIndicator

Indicator showing online/offline status.

### OfflineBanner

Banner displayed when app is in offline mode.

### PWAInstallPrompt

Prompt for installing the PWA version.

### ServiceWorkerUpdatePrompt

Prompt for updating the service worker.

## Coach-Specific Components

### PlayerList

List of players with filtering and sorting.

### PlayerCard

Card displaying player information and stats.

### ActivityFeed

Feed of player activities.

### PerformanceStats

Detailed performance statistics display.
