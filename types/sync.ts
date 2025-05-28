import type { Session, Shot, UserProfile } from "./index";

// Sync operation types
export type SyncOperation = "create" | "update" | "delete";

// Sync queue item interface
export interface SyncQueueItem {
  id?: number; // Optional because it's auto-incremented
  operation: SyncOperation;
  store: string;
  recordId: string;
  timestamp: string;
  data?: unknown;
  retryCount?: number;
  error?: string;
  lastAttempt?: string;
}

// Storable versions of our main data types
export interface StorableSession extends Session {
  synced: boolean;
  syncError?: string;
  syncAttempts?: number;
  lastSyncAttempt?: string;
}

export interface StorableShot extends Shot {
  synced: boolean;
  syncError?: string;
  syncAttempts?: number;
  lastSyncAttempt?: string;
}

export interface StorableProfile extends UserProfile {
  synced: boolean;
  syncError?: string;
  syncAttempts?: number;
  lastSyncAttempt?: string;
}

// Sync result interface
export interface SyncResult {
  success: boolean;
  itemsProcessed: number;
  itemsFailed: number;
  errors: Array<{
    id: string;
    store: string;
    error: string;
  }>;
}

// Sync progress interface for tracking sync operations
export interface SyncProgress {
  total: number;
  completed: number;
  failed: number;
  inProgress: boolean;
  lastSync: string | null;
  errors: Array<{
    id: string;
    store: string;
    error: string;
  }>;
}
