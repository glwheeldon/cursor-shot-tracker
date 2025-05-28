# API Routes Documentation

This document provides details about all API routes in the Basketball Shot Tracker application.

## Table of Contents

- [Authentication](#authentication)
- [Sessions](#sessions)
- [Shots](#shots)
- [User Profiles](#user-profiles)
- [Friends & Connections](#friends--connections)
- [Debug & Diagnostics](#debug--diagnostics)
- [Storage](#storage)

## Authentication

Authentication is handled through Supabase Auth, with custom API endpoints for specific functionality.

### `/api/auth/register`

- **Method**: POST
- **Description**: Registers a new user with role-based setup
- **Request Body**:
  \`\`\`json
  {
  "email": "user@example.com",
  "password": "password123",
  "fullName": "John Doe",
  "displayName": "JohnD",
  "country": "US",
  "dob": "01/01/1990",
  "sport": "basketball",
  "role": "user"
  }
  \`\`\`
- **Response**: User data with profile information

## Sessions

### `/api/sessions`

- **Method**: GET
- **Description**: Retrieves all sessions for the authenticated user
- **Authentication**: Required
- **Response**: Array of session objects

### `/api/sessions/[id]`

- **Method**: GET
- **Description**: Retrieves a specific session by ID
- **Authentication**: Required
- **Response**: Session object with related shots

## Shots

Shots are tracked within sessions and don't have dedicated API endpoints. They are accessed through session endpoints or directly via Supabase client.

## User Profiles

### `/api/search-users`

- **Method**: GET
- **Description**: Searches for users by name or shooter ID
- **Query Parameters**: `query` - Search term
- **Authentication**: Required
- **Response**: Array of matching user profiles

## Friends & Connections

### `/api/friends/connect`

- **Method**: POST
- **Description**: Creates a connection request between users
- **Request Body**:
  \`\`\`json
  {
  "targetId": "user-id-to-connect-with"
  }
  \`\`\`
- **Authentication**: Required
- **Response**: Connection status

## Debug & Diagnostics

Multiple debug endpoints are available for troubleshooting:

### `/api/debug/auto-diagnostics`

- **Method**: GET
- **Description**: Runs automated diagnostics on the application
- **Authentication**: Required
- **Response**: Diagnostic results

### `/api/debug/check-id`

- **Method**: GET
- **Description**: Validates user IDs
- **Query Parameters**: `id` - User ID to check
- **Authentication**: Required
- **Response**: Validation results

### `/api/debug/env-check`

- **Method**: GET
- **Description**: Checks environment variables
- **Authentication**: Required
- **Response**: Environment status

### `/api/debug/fix-environment`

- **Method**: POST
- **Description**: Attempts to fix environment issues
- **Authentication**: Required
- **Response**: Fix results

### `/api/debug/fix-missing-profile`

- **Method**: POST
- **Description**: Creates missing profiles for users
- **Authentication**: Required
- **Response**: Fix results

### `/api/debug/foreign-keys`

- **Method**: GET
- **Description**: Checks foreign key constraints
- **Authentication**: Required
- **Response**: Constraint status

### `/api/debug/friend-connections`

- **Method**: GET
- **Description**: Checks friend connection status
- **Authentication**: Required
- **Response**: Connection status

### `/api/debug/friend-profiles`

- **Method**: GET
- **Description**: Retrieves friend profiles
- **Authentication**: Required
- **Response**: Friend profiles

### `/api/debug/profile-check`

- **Method**: GET
- **Description**: Checks user profile status
- **Authentication**: Required
- **Response**: Profile status

### `/api/debug/profile-info`

- **Method**: GET
- **Description**: Retrieves detailed profile information
- **Authentication**: Required
- **Response**: Profile details

### `/api/debug/profiles`

- **Method**: GET
- **Description**: Lists all profiles
- **Authentication**: Required
- **Response**: All profiles

### `/api/debug/record-exists`

- **Method**: GET
- **Description**: Checks if a record exists
- **Query Parameters**: `table`, `id`
- **Authentication**: Required
- **Response**: Record existence status

### `/api/debug/shooter-id`

- **Method**: GET
- **Description**: Checks shooter ID status
- **Authentication**: Required
- **Response**: Shooter ID status

### `/api/debug/table-exists`

- **Method**: GET
- **Description**: Checks if a table exists
- **Query Parameters**: `table`
- **Authentication**: Required
- **Response**: Table existence status

### `/api/debug/valid-foreign-key`

- **Method**: GET
- **Description**: Validates foreign key relationships
- **Query Parameters**: `table`, `column`, `value`
- **Authentication**: Required
- **Response**: Validation results

## Storage

### `/api/create-storage-bucket`

- **Method**: GET
- **Description**: Creates or verifies storage bucket existence
- **Authentication**: Required
- **Response**: Bucket status

### `/api/proxy-image`

- **Method**: GET
- **Description**: Proxies image requests to avoid CORS issues
- **Query Parameters**: `url` - Image URL to proxy
- **Response**: Image data

### `/api/setup-env`

- **Method**: POST
- **Description**: Sets up environment variables
- **Authentication**: Required
- **Response**: Setup status
