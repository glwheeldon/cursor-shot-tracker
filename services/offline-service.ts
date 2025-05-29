import AsyncStorage from '@react-native-async-storage/async-storage';

export class OfflineService {
  // Generic save to storage
  static async saveItem<T>(key: string, value: T): Promise<void> {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }

  // Generic load from storage
  static async loadItem<T>(key: string): Promise<T | null> {
    const value = await AsyncStorage.getItem(key);
    return value ? (JSON.parse(value) as T) : null;
  }

  // Remove an item
  static async removeItem(key: string): Promise<void> {
    await AsyncStorage.removeItem(key);
  }

  // Save sessions to storage
  static async saveSessions(sessions: any[]): Promise<void> {
    await this.saveItem('sessions', sessions);
  }

  // Load sessions from storage
  static async loadSessions(): Promise<any[] | null> {
    return this.loadItem<any[]>('sessions');
  }

  // Save friends to storage
  static async saveFriends(friends: any[]): Promise<void> {
    await this.saveItem('friends', friends);
  }

  // Load friends from storage
  static async loadFriends(): Promise<any[] | null> {
    return this.loadItem<any[]>('friends');
  }

  // Add more domain-specific methods as needed
}
