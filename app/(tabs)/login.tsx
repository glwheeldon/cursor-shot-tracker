import { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useAuth } from '../../contexts/auth-context';
import { TextInput, Button, Card, Text, HelperText } from 'react-native-paper';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { signIn, authError } = useAuth();

  const handleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      await signIn(email, password);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Login failed';
      setError(errorMessage);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/shot-tracker-main-logo.png')} style={styles.logo} resizeMode="contain" />
      <Text style={styles.heading}>Shot Tracker</Text>
      <Card style={styles.card} elevation={2}>
        <Card.Content>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
              style={styles.input}
              mode="outlined"
              outlineColor="#D1D5DB"
              activeOutlineColor="#0FB8A9"
              placeholder="name@example.com"
              placeholderTextColor="#9CA3AF"
              theme={{ roundness: 8, colors: { text: '#111827', placeholder: '#9CA3AF', background: '#fff', primary: '#0FB8A9' } }}
            />
          </View>
          <View style={styles.inputGroup}>
            <View style={styles.labelRow}>
              <Text style={styles.label}>Password</Text>
              <TouchableOpacity style={styles.forgotBtn}>
                <Text style={styles.forgotText}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              style={styles.input}
              mode="outlined"
              outlineColor="#D1D5DB"
              activeOutlineColor="#0FB8A9"
              placeholder="••••••••"
              placeholderTextColor="#9CA3AF"
              theme={{ roundness: 8, colors: { text: '#111827', placeholder: '#9CA3AF', background: '#fff', primary: '#0FB8A9' } }}
              right={<TextInput.Icon icon={showPassword ? 'eye-off-outline' : 'eye-outline'} color="#0FB8A9" onPress={() => setShowPassword(!showPassword)} />}
            />
          </View>
          <HelperText type="error" visible={!!error || !!authError} style={styles.errorText}>
            {String(error || authError || '')}
          </HelperText>
          <Button
            mode="contained"
            onPress={handleLogin}
            loading={loading}
            disabled={loading}
            style={styles.button}
            contentStyle={styles.buttonContent}
            labelStyle={styles.buttonLabel}
            buttonColor="#0FB8A9"
          >
            Sign in
          </Button>
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>Don't have an account?</Text>
            <Link href="/signup" asChild>
              <TouchableOpacity>
                <Text style={styles.signupLink}>Sign up</Text>
              </TouchableOpacity>
            </Link>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 24,
    marginTop: 32,
  },
  heading: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: '#111827',
    textAlign: 'center',
    marginBottom: 24,
  },
  card: {
    width: '100%',
    maxWidth: 400,
    borderRadius: 12,
    backgroundColor: '#fff',
    paddingVertical: 24,
    paddingHorizontal: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#111827',
    marginBottom: 4,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  forgotBtn: {
    padding: 0,
  },
  forgotText: {
    color: '#6B7280',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
  input: {
    height: 48,
    borderRadius: 8,
    backgroundColor: '#fff',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#111827',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    paddingHorizontal: 12,
  },
  errorText: {
    color: '#EF4444',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    marginBottom: 8,
    textAlign: 'center',
  },
  button: {
    borderRadius: 8,
    marginTop: 8,
    marginBottom: 16,
  },
  buttonContent: {
    height: 48,
  },
  buttonLabel: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: '#fff',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  signupText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#6B7280',
  },
  signupLink: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: '#0FB8A9',
    marginLeft: 4,
  },
});
