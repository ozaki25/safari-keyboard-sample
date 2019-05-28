import React from 'react';
import { KeyboardAvoidingView, SafeAreaView, WebView } from 'react-native';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <WebView
          source={{ uri: 'http://localhost:5000' }}
          style={{ flex: 1 }}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default App;
