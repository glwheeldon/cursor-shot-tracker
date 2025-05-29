import React, { useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Button, FlatList } from "react-native";
import { OfflineService } from "../../services/offline-service";

export default function FriendsScreen() {
  // TODO: Replace with real state and data fetching
  const [search, setSearch] = React.useState("");
  const [friends, setFriends] = React.useState<any[]>([]);

  // Load friends from offline storage on mount
  useEffect(() => {
    OfflineService.loadFriends().then((data) => {
      setFriends(data || []);
    });
  }, []);

  // Save friends to offline storage whenever they change
  useEffect(() => {
    OfflineService.saveFriends(friends);
  }, [friends]);

  const handleAddFriend = () => {
    // TODO: Implement real friend add logic (API + offline)
    if (search.trim().length > 0) {
      setFriends((prev) => [
        ...prev,
        { id: Date.now().toString(), name: search },
      ]);
      setSearch("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Friends</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search by email or username"
          value={search}
          onChangeText={setSearch}
        />
        <Button title="Add" onPress={handleAddFriend} />
      </View>
      <Text style={styles.subtitle}>Your Friends</Text>
      <FlatList
        data={friends}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.friendItem}>
            <Text>{item.name}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No friends yet.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
    marginRight: 8,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 8,
  },
  friendItem: {
    paddingVertical: 12,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
});
