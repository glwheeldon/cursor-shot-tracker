import { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useAuth } from '../../contexts/auth-context';

export default function SignupScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { signUp, authError } = useAuth();

  const handleSignup = async () => {
    setError('');
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    setLoading(true);
    try {
      await signUp(email, password, {
        fullName: '',
        displayName: '',
        country: '',
        dob: '',
        sport: '',
        role: 'user',
      });
      // AuthGate will handle redirect
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Sign up failed';
      setError(errorMessage);
    }
    setLoading(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', paddingHorizontal: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 24 }}>Sign Up</Text>
      <TextInput
        style={{ width: '100%', borderWidth: 1, borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 16, backgroundColor: '#1a1a1a' }}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#888"
      />
      <TextInput
        style={{ width: '100%', borderWidth: 1, borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 16, backgroundColor: '#1a1a1a' }}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
        placeholderTextColor="#888"
      />
      <TextInput
        style={{ width: '100%', borderWidth: 1, borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 24, backgroundColor: '#1a1a1a' }}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        placeholderTextColor="#888"
      />
      {(error || authError) ? <Text style={{ color: 'red', marginBottom: 12 }}>{error || authError?.message}</Text> : null}
      <TouchableOpacity style={{ backgroundColor: '#2563eb', borderRadius: 8, paddingHorizontal: 16, paddingVertical: 10, width: '100%', marginBottom: 16, opacity: loading ? 0.7 : 1 }} onPress={handleSignup} disabled={loading}>
        {loading ? <ActivityIndicator color="#fff" /> : <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>Sign Up</Text>}
      </TouchableOpacity>
      <Text style={{ textAlign: 'center' }}>Already have an account? <Link href="/login" style={{ color: '#2563eb' }}>Login</Link></Text>
    </View>
  );
}
