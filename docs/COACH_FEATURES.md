# Coach Features Documentation

This document details the coach-specific features in the Basketball Shot Tracker application.

## Table of Contents
- [Overview](#overview)
- [Coach Dashboard](#coach-dashboard)
- [Player Management](#player-management)
- [Performance Analytics](#performance-analytics)
- [Activity Feed](#activity-feed)
- [Coach-Specific Components](#coach-specific-components)
- [Coach-Specific Routes](#coach-specific-routes)
- [Coach Permissions](#coach-permissions)

## Overview

Coaches have a specialized interface and feature set focused on monitoring and analyzing player performance. The coach role provides access to player data, aggregated statistics, and activity feeds.

## Coach Dashboard

The coach dashboard (`/coach/dashboard`) provides:
- Overview of all followed players
- Recent player activity
- Aggregated statistics
- Quick access to player profiles

Key components:
- Player count card
- Session count card
- Average accuracy card
- Recent activity list
- Player grid with performance metrics

## Player Management

Coaches can manage players through:
- Following players via shooter ID or search
- Viewing player profiles and statistics
- Tracking player progress over time
- Organizing players by performance metrics

The player management interface (`/coach/players`) provides:
- Player search functionality
- Player cards with key metrics
- Sorting and filtering options
- Quick access to detailed player stats

## Performance Analytics

Coaches can analyze player performance through:
- Aggregated statistics by player
- Shooting percentage trends
- Session frequency analysis
- Sport-specific breakdowns

The performance analytics interface (`/coach/stats`) provides:
- Overall statistics view
- Player-specific statistics
- Sport breakdown charts
- Top performers list

## Activity Feed

Coaches can monitor player activity through:
- Real-time activity feed
- Session completion notifications
- Performance milestone alerts
- Player progress updates

The activity feed interface (`/coach/feed`) provides:
- All player activities tab
- Following-specific activities tab
- Activity cards with session details
- Reaction functionality

## Coach-Specific Components

### CoachBottomNav
Mobile navigation tailored for coach interface:
- Dashboard
- Players
- Stats
- Feed
- Profile

### PlayerCard
Card displaying player information with:
- Profile picture and name
- Recent activity timestamp
- Sport preference
- Key performance metrics
- Action buttons

### StatsOverview
Component displaying aggregated statistics:
- Total shots across all players
- Average accuracy
- Session count
- Player count

### ActivityFeed
Feed component showing player activities:
- Session completions
- Performance milestones
- Sortable by date or player

## Coach-Specific Routes

- `/coach/dashboard`: Main coach dashboard
- `/coach/players`: Player management interface
- `/coach/stats`: Performance analytics interface
- `/coach/feed`: Activity feed interface
- `/coach/activity`: Detailed activity log

## Coach Permissions

Coaches have the following permissions:
- Read access to profiles of followed players
- Read access to sessions of followed players
- Read access to shots of followed players
- Cannot create sessions (coach-specific restriction)
- Cannot record shots (coach-specific restriction)
- Can follow/unfollow players
- Can view aggregated statistics
