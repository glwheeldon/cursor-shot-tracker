import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';

export class DSErrorBoundary extends React.Component<{
  children: React.ReactNode;
}, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, info: any) {
    // You can log error here
  }

  handleReload = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <Text style={styles.title}>Something went wrong.</Text>
          <Text style={styles.desc}>An unexpected error occurred. Please try again.</Text>
          <Button mode="contained" onPress={this.handleReload} style={styles.button} labelStyle={styles.buttonLabel} buttonColor="#0FB8A9">
            Reload
          </Button>
        </View>
      );
    }
    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: '#EF4444',
    marginBottom: 8,
  },
  desc: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 24,
    textAlign: 'center',
  },
  button: {
    borderRadius: 8,
  },
  buttonLabel: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#fff',
  },
});

export default DSErrorBoundary; 