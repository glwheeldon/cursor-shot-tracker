# Database Documentation

This document details the database schema and operations for the Basketball Shot Tracker application.

## Table of Contents

- [Overview](#overview)
- [Schema](#schema)
  - [Users & Profiles](#users--profiles)
  - [Sessions](#sessions)
  - [Shots](#shots)
  - [Friends & Connections](#friends--connections)
  - [Feed & Subscriptions](#feed--subscriptions)
  - [Notifications](#notifications)
- [Indexes](#indexes)
- [Row Level Security (RLS)](#row-level-security-rls)
- [Database Functions](#database-functions)
- [Triggers](#triggers)
- [Migrations](#migrations)

## Overview

The application uses Supabase PostgreSQL database with Row Level Security (RLS) policies to enforce access control. The schema is designed to support both online and offline operations with synchronization capabilities.

## Schema

### Users & Profiles

#### `auth.users` (Managed by Supabase Auth)

- `id`: UUID (Primary Key)
- `email`: String
- `encrypted_password`: String
- `email_confirmed_at`: Timestamp
- `last_sign_in_at`: Timestamp
- `raw_app_meta_data`: JSON
- `raw_user_meta_data`: JSON
- `created_at`: Timestamp
- `updated_at`: Timestamp

#### `profiles`

- `id`: UUID (Primary Key, Foreign Key to auth.users.id)
- `username`: String
- `full_name`: String
- `display_name`: String
- `avatar_url`: String
- `country`: String
- `date_of_birth`: Date
- `preferred_sport`: Enum ('basketball', 'netball', etc.)
- `role`: Enum ('user', 'coach', 'admin')
- `shooter_id`: String (Unique identifier for sharing)
- `feed_privacy`: Enum ('public', 'private')
- `created_at`: Timestamp
- `updated_at`: Timestamp

### Sessions

#### `sessions`

- `id`: UUID (Primary Key)
- `user_id`: UUID (Foreign Key to profiles.id)
- `sport`: Enum ('basketball', 'netball', etc.)
- `title`: String
- `location`: String
- `notes`: Text
- `status`: Enum ('active', 'completed', 'cancelled')
- `start_time`: Timestamp
- `end_time`: Timestamp
- `created_at`: Timestamp
- `updated_at`: Timestamp
- `shooter_id`: String (Foreign Key to profiles.shooter_id)

### Shots

#### `shots`

- `id`: UUID (Primary Key)
- `session_id`: UUID (Foreign Key to sessions.id)
- `user_id`: UUID (Foreign Key to profiles.id)
- `is_made`: Boolean
- `shot_type`: String
- `distance`: Numeric
- `position_x`: Numeric
- `position_y`: Numeric
- `created_at`: Timestamp
- `shooter_id`: String (Foreign Key to profiles.shooter_id)

### Friends & Connections

#### `friends`

- `id`: UUID (Primary Key)
- `user_id`: UUID (Foreign Key to profiles.id)
- `friend_id`: UUID (Foreign Key to profiles.id)
- `status`: Enum ('pending', 'accepted', 'rejected', 'blocked')
- `created_at`: Timestamp
- `updated_at`: Timestamp

### Feed & Subscriptions

#### `feed_subscriptions`

- `id`: UUID (Primary Key)
- `subscriber_id`: UUID (Foreign Key to profiles.id)
- `publisher_id`: UUID (Foreign Key to profiles.id)
- `status`: Enum ('pending', 'active', 'rejected')
- `created_at`: Timestamp
- `updated_at`: Timestamp

### Notifications

#### `notifications`

- `id`: UUID (Primary Key)
- `user_id`: UUID (Foreign Key to profiles.id)
- `title`: String
- `message`: Text
- `type`: String
- `read`: Boolean
- `data`: JSON
- `created_at`: Timestamp

## Indexes

- `profiles_shooter_id_idx`: Index on profiles.shooter_id
- `sessions_user_id_idx`: Index on sessions.user_id
- `sessions_shooter_id_idx`: Index on sessions.shooter_id
- `shots_session_id_idx`: Index on shots.session_id
- `shots_user_id_idx`: Index on shots.user_id
- `friends_user_id_idx`: Index on friends.user_id
- `friends_friend_id_idx`: Index on friends.friend_id
- `feed_subscriptions_subscriber_id_idx`: Index on feed_subscriptions.subscriber_id
- `feed_subscriptions_publisher_id_idx`: Index on feed_subscriptions.publisher_id
- `notifications_user_id_idx`: Index on notifications.user_id

## Row Level Security (RLS)

### Profiles RLS

- Users can read their own profile
- Users can update their own profile
- Coaches can read profiles of players they follow
- Admins can read and update all profiles

### Sessions RLS

- Users can read, create, update, and delete their own sessions
- Coaches can read sessions of players they follow
- Admins can read all sessions

### Shots RLS

- Users can read, create, update, and delete their own shots
- Coaches can read shots of players they follow
- Admins can read all shots

### Friends RLS

- Users can read, create, update, and delete their own friend connections
- Admins can read all friend connections

### Feed Subscriptions RLS

- Users can read, create, update, and delete their own subscriptions
- Users can read subscriptions where they are the publisher
- Admins can read all subscriptions

### Notifications RLS

- Users can read and update their own notifications
- Admins can read all notifications

## Database Functions

### `get_user_stats(user_id UUID)`

Returns aggregated statistics for a user:

- Total shots
- Made shots
- Shooting percentage
- Total sessions

### `get_session_stats(session_id UUID)`

Returns statistics for a specific session:

- Total shots
- Made shots
- Shooting percentage

### `get_user_sessions(user_id UUID, limit_count INTEGER)`

Returns the most recent sessions for a user.

### `get_user_shots(user_id UUID, limit_count INTEGER)`

Returns the most recent shots for a user.

### `upsert_session(session_data JSON)`

Inserts or updates a session record.

### `upsert_shot(shot_data JSON)`

Inserts or updates a shot record.

## Triggers

### `create_profile_after_signup`

Creates a profile record when a new user signs up.

### `update_profile_updated_at`

Updates the `updated_at` timestamp when a profile is modified.

### `update_session_updated_at`

Updates the `updated_at` timestamp when a session is modified.

## Migrations

Database migrations are managed through SQL files in the `supabase` directory:

- `schema.sql`: Initial schema
- `schema-update.sql`: Schema updates
- `schema-update-shooter-id.sql`: Added shooter_id field
- `schema-update-alphanumeric.sql`: Modified shooter_id constraints
- `fix-foreign-key-issue.sql`: Fixed foreign key constraints
- `fix-user-creation-trigger.sql`: Fixed user creation trigger
- `fix-user-trigger.sql`: Additional trigger fixes
- `fix-shooter-id.sql`: Fixed shooter_id generation
- `fix-profile-permissions.sql`: Updated profile permissions
- `fix-missing-friend-profile.sql`: Fixed missing friend profiles
- `fix-profile-auth-mismatches.sql`: Fixed profile/auth mismatches
