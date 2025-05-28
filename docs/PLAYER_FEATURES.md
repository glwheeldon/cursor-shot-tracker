# Player Features Documentation

This document details the player-specific features in the Basketball Shot Tracker application.

## Table of Contents
- [Overview](#overview)
- [Player Dashboard](#player-dashboard)
- [Session Management](#session-management)
- [Shot Tracking](#shot-tracking)
- [Statistics and Analysis](#statistics-and-analysis)
- [Player Profile](#player-profile)
- [Friend Connections](#friend-connections)
- [Activity Feed](#activity-feed)
- [Player-Specific Components](#player-specific-components)
- [Player-Specific Routes](#player-specific-routes)

## Overview

Players are the primary users of the application, with features focused on tracking shooting sessions, recording shots, analyzing performance, and sharing progress with coaches and friends.

## Player Dashboard

The player dashboard (`/dashboard`) provides:
- Overview of recent sessions
- Quick statistics summary
- Performance trends
- Quick access to create new sessions

Key components:
- Stats summary cards
- Recent sessions list
- Performance charts
- New session button

## Session Management

Players can manage shooting sessions through:
- Creating new sessions
- Recording shots during active sessions
- Viewing session history
- Analyzing session performance

The session management interfaces include:
- `/sessions`: Session history list
- `/sessions/[id]`: Individual session details
- `/sessions/[id]/active`: Active session interface for recording shots

## Shot Tracking

Players can track shots with:
- Made/missed recording
- Shot position tracking (optional)
- Shot type categorization (optional)
- Real-time statistics updates

The shot tracking interface (`/sessions/[id]/active`) provides:
- Large made/missed buttons
- Running statistics display
- Session timer
- End session button

## Statistics and Analysis

Players can analyze their performance through:
- Overall shooting statistics
- Session-by-session breakdown
- Performance trends over time
- Sport-specific analytics

The statistics interfaces include:
- `/stats`: Overall statistics dashboard
- `/dashboard/stats`: Dashboard statistics summary
- `/dashboard/shot-analysis`: Detailed shot analysis

## Player Profile

Players can manage their profile through:
- Personal information updates
- Avatar customization
- Sport preference settings
- Shooter ID management

The profile interface (`/profile`) provides:
- Profile information editing
- Avatar upload
- Shooter ID display and sharing
- Account settings

## Friend Connections

Players can connect with friends through:
- Shooter ID sharing
- Friend requests
- Friend activity viewing
- Performance comparisons

The friend management interfaces include:
- `/connect`: Friend connection interface
- `/connect/[id]`: Connect with specific shooter ID
- `/friends`: Friend list and management

## Activity Feed

Players can view activity through:
- Personal activity history
- Friend activity feed
- Coach interactions
- Performance milestones

The activity feed interface (`/feed`) provides:
- Personal activity tab
- Friend activity tab
- Activity cards with session details
- Reaction functionality

## Player-Specific Components

### BottomNav
Mobile navigation tailored for player interface:
- Dashboard
- Sessions
- Stats
- Feed
- Profile

### SessionCard
Card displaying session information with:
- Date and time
- Sport type
- Location
- Performance summary
- Action buttons

### StatsCard
Card displaying performance statistics:
- Total shots
- Made shots
- Shooting percentage
- Session count

### NewSessionButton
Button with form for creating new sessions:
- Sport selection
- Location input
- Notes input
- Start session action

## Player-Specific Routes

- `/dashboard`: Main player dashboard
- `/sessions`: Session history
- `/sessions/[id]`: Session details
- `/sessions/[id]/active`: Active session interface
- `/stats`: Statistics dashboard
- `/profile`: Profile management
- `/connect`: Friend connections
- `/feed`: Activity feed
