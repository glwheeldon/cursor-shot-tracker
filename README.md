# Basketball Shot Tracker App

A comprehensive application for tracking basketball and netball shooting sessions, analyzing performance, and connecting with friends.

## Application Overview

The Basketball Shot Tracker App is a progressive web application (PWA) designed to help players track their shooting performance, analyze their progress over time, and connect with friends to share their stats. The app works both online and offline, with seamless data synchronization when connectivity is restored.

### Key Features

- **Session Tracking**: Create and manage shooting sessions for basketball or netball
- **Shot Analysis**: Track makes and misses with detailed analytics and visualization
- **Performance Stats**: View comprehensive statistics about your shooting performance over time
- **Friend Connections**: Connect with friends to share stats and progress
- **Activity Feed**: View your friends' recent sessions and shooting activities
- **Profile Management**: Customize your profile with avatar and preferences
- **Progressive Web App**: Install on your device for offline access
- **Multi-sport Support**: Track sessions for both basketball and netball
- **Offline Mode**: Full functionality even without internet connection
- **Cross-platform**: Works on web, iOS, and Android through Capacitor
- **Advanced Analytics**: More detailed shooting performance analysis with ML insights
- **Shooting Challenges**: Compete with friends on specific shooting challenges
- **Team Management**: Create and manage teams for group tracking
- **Enhanced Offline Support**: Improved conflict resolution and sync strategies
- **Shooting Heatmaps**: Visual representation of shooting locations and percentages
- **Video Analysis**: Upload and analyze shooting form videos
- **Social Features**: Enhanced sharing and community features
- **Gamification**: Achievements, badges, and progression systems

## Application Architecture

### Tech Stack

- **Frontend**: Next.js 14+ with App Router
- **UI Components**: Custom components with Tailwind CSS and shadcn/ui
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage for avatars and assets
- **State Management**: React Context API and custom hooks
- **Offline Support**: IndexedDB with custom sync service
- **Native Features**: Capacitor for camera, storage, and notifications
- **Deployment**: Vercel

### Directory Structure

\`\`\`
├── app/ # Next.js App Router pages and layouts
│ ├── api/ # API routes
│ ├── auth/ # Authentication pages
│ ├── dashboard/ # Dashboard and analysis pages
│ ├── sessions/ # Session management pages
│ ├── profile/ # User profile pages
│ ├── friends/ # Friend connection pages
│ ├── feed/ # Activity feed pages
│ ├── stats/ # Statistics and analysis pages
│ ├── settings/ # User settings pages
│ ├── connect/ # QR code connection pages
│ └── debug/ # Debugging and diagnostic tools
├── components/ # Reusable UI components
│ ├── ui/ # Base UI components
│ ├── auth/ # Authentication components
│ ├── layout/ # Layout components
│ └── sessions/ # Session-related components
├── contexts/ # React context providers
│ └── auth-context.tsx # Authentication context
├── hooks/ # Custom React hooks
│ ├── use-form.ts # Form handling hooks
│ ├── use-indexed-db.ts # IndexedDB hooks
│ └── use-safe-async.ts # Safe async operation hooks
├── lib/ # Utility functions and shared code
│ ├── icons.ts # Centralized icon system
│ ├── supabase.ts # Supabase client configuration
│ ├── indexed-db.ts # IndexedDB configuration
│ ├── sync-service.ts # Data synchronization service
│ ├── error-handler.ts # Error handling utilities
│ └── utils.ts # General utility functions
├── public/ # Static assets
├── scripts/ # Utility scripts
│ ├── icon-audit.ts # Script to audit icon usage
│ ├── generate-icons.ts # Script to generate app icons
│ └── app-store-assets.ts # Script to generate app store assets
├── services/ # Service layer
│ └── auth-service.ts # Authentication service
├── supabase/ # Supabase schema and migrations
│ └── schema.sql # Database schema
├── types/ # TypeScript type definitions
│ ├── index.ts # Common types
│ ├── supabase.ts # Supabase database types
│ └── sync.ts # Synchronization types
└── capacitor.config.ts # Capacitor configuration
\`\`\`

## Key Systems

### Authentication System

The app uses Supabase Authentication with:

- Email/password authentication
- Protected routes using middleware
- Auth context provider for accessing user data throughout the app
- Session persistence and refresh token handling
- Profile creation and management

### Offline Support & Synchronization

The app provides full offline functionality with:

- **IndexedDB Storage**: Local storage of sessions, shots, and user data
- **Sync Service**: Background synchronization when connectivity is restored
- **Conflict Resolution**: Smart merging of local and remote changes
- **Optimistic UI**: Immediate UI updates with background syncing
- **Network Status Detection**: Automatic mode switching based on connectivity

### Session Tracking System

The core functionality for tracking shooting sessions includes:

- **Session Creation**: Start new sessions with customizable parameters
- **Shot Recording**: Track makes and misses with location data
- **Real-time Stats**: View statistics as you shoot
- **Session History**: Review past sessions with detailed analytics
- **Export Options**: Share or export session data

### Friend Connection System

The application implements a bidirectional friend connection system:

- **Friend Requests**: Send and receive friend requests
- **Friend Management**: View, add, and remove friends
- **Activity Feed**: See friends' recent sessions and achievements
- **Privacy Controls**: Friend connections determine data visibility

## Database Schema

The application uses Supabase (PostgreSQL) with the following main tables:

- **profiles**: User profiles with preferences and settings

  - Contains user information like display name, avatar URL, preferred sport
  - Linked to auth.users via the id column

- **sessions**: Shooting sessions with metadata

  - Tracks start/end times, location, sport type, and status
  - Linked to user profiles via user_id

- **shots**: Individual shots within a session

  - Records distance, make/miss status, and timestamp
  - Linked to sessions via session_id and to users via user_id

- **friend_connections**: Connections between users
  - Manages friend relationships with status (pending, accepted)
  - Bidirectional connections with user_id and friend_id

## Security

### Row-Level Security (RLS) Policies

The application implements the following RLS policies to ensure data security:

- **User Profiles**:

  - Users can view any profile (needed for friend search)
  - Users can only update their own profile

- **Sessions**:

  - Users can view, create, update, and delete their own sessions
  - Users can view their friends' sessions (for the activity feed)

- **Shots**:

  - Users can view, create, update, and delete their own shots
  - Users can view their friends' shots (for the activity feed)

- **Friend Connections**:
  - Users can view, create, and update their own friend connections
  - Friend status changes require appropriate permissions

### Data Encryption

- Sensitive data is encrypted at rest in Supabase
- Authentication tokens are securely stored
- Local data in IndexedDB follows best practices for client-side storage

## Performance Optimizations

The application includes several performance optimizations:

- **Memoization**: Using React.memo and useMemo to prevent unnecessary re-renders
- **Code Splitting**: Lazy loading components and routes for faster initial load
- **Database Indexes**: Optimized database queries with appropriate indexes
- **Safe Async Operations**: Custom hooks for handling async operations safely
- **Optimistic Updates**: UI updates before server confirmation for better UX
- **Asset Caching**: PWA caching strategies for assets and API responses
- **Efficient Data Synchronization**: Batched and throttled sync operations

## Native Features (via Capacitor)

The app uses Capacitor to provide native functionality on iOS and Android:

- **Camera Access**: For profile pictures and sharing
- **Local Notifications**: Session reminders and friend updates
- **Secure Storage**: Enhanced security for auth tokens
- **Haptic Feedback**: Tactile feedback for shot recording
- **App Store Deployment**: Tools for generating required assets

## Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow the centralized icon system for all icons
- Use optional chaining for potentially null values
- Implement proper error handling for all async operations
- Use the PageContainer component for consistent layouts

### Error Handling

The application implements a comprehensive error handling strategy:

- **Centralized Error Handler**: Common error handling logic
- **Error Boundaries**: Prevent UI crashes from component errors
- **Fallback UI**: Graceful degradation when errors occur
- **Error Logging**: Capture and report errors for debugging
- **User-friendly Messages**: Clear communication of errors to users

### Adding Features

When adding new features:

1. Create components in the components directory
2. Add pages in the appropriate app directory
3. Update the centralized icon system if new icons are needed
4. Add appropriate database migrations in the supabase directory
5. Implement proper error handling and loading states
6. Ensure offline functionality works correctly
7. Add tests for critical functionality

### Testing

- Implement unit tests for utility functions
- Add integration tests for critical user flows
- Test RLS policies to ensure data security
- Verify responsive design across different device sizes
- Test offline functionality and synchronization

## Deployment

### Web Deployment (Vercel)

The application is deployed on Vercel with:

- Automatic deployments from the main branch
- Environment variables for Supabase configuration
- PWA configuration for installable web app
- Analytics for monitoring user engagement

### Mobile Deployment (App Stores)

For iOS and Android deployment:

1. Build the app using Capacitor
2. Generate required assets using the app-store-assets script
3. Follow the guidelines in APP_STORE_PREPARATION.md
4. Submit to respective app stores

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and ensure code quality
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
