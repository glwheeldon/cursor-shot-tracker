# Authentication Documentation

This document details the authentication system used in the Basketball Shot Tracker application.

## Table of Contents
- [Overview](#overview)
- [User Registration](#user-registration)
- [Login Flow](#login-flow)
- [Role-Based Access](#role-based-access)
- [Authentication Context](#authentication-context)
- [Offline Authentication](#offline-authentication)
- [Token Management](#token-management)
- [Password Recovery](#password-recovery)

## Overview

The application uses Supabase Authentication with custom enhancements for offline support and role-based access control. Authentication state is managed through React Context and persisted in local storage for offline access.

## User Registration

Registration is handled through a consolidated form that collects:
- Email and password
- Personal information (name, display name, date of birth, country)
- Role selection (Player or Coach)
- Sport preference (for Players)

The registration process:
1. Validates all input fields
2. Creates a user in Supabase Auth
3. Automatically creates a profile record in the database
4. Sets up role-specific permissions
5. Redirects to the appropriate dashboard based on role

## Login Flow

The login process:
1. Authenticates credentials with Supabase
2. Verifies the user has a complete profile
3. Extends offline access tokens
4. Redirects to role-specific dashboard

## Role-Based Access

The application supports multiple user roles:
- **Player**: Regular users who track their shooting sessions
- **Coach**: Users who can view and analyze player statistics
- **Admin**: System administrators with full access

Each role has specific permissions and UI views:
- Players see their own dashboard, sessions, and stats
- Coaches see player lists, aggregated stats, and activity feeds
- Admins have additional system management capabilities

## Authentication Context

Authentication state is managed through the `AuthContext` which provides:

\`\`\`typescript
type AuthContextType = {
  user: User | null;
  profile: Profile | null;
  session: Session | null;
  isLoading: boolean;
  isInitialized: boolean;
  isOfflineMode: boolean;
  isOfflineSession: boolean;
  authMode: "online" | "offline" | "none";
  signUp: (email: string, password: string, userData: SignupUserData) => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (profile: Partial<Profile>) => Promise<void>;
  refreshSession: () => Promise<boolean>;
  authError: Error | null;
}
\`\`\`

## Offline Authentication

The application supports offline authentication through:
1. Caching user data in localStorage
2. Storing authentication tokens securely
3. Validating offline access when online connectivity is lost
4. Syncing changes when connectivity is restored

## Token Management

Token management is handled by the `tokenManager` service which:
- Securely stores authentication tokens
- Refreshes tokens when needed
- Validates token expiration
- Manages offline access tokens

## Password Recovery

Password recovery flow:
1. User requests password reset via email
2. User receives email with reset link
3. User sets new password
4. System validates and updates credentials
