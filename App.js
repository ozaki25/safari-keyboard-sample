import React from 'react';
import { SafeAreaView, WebView } from 'react-native';

function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{
          uri: 'https://ozaki25.github.io/bootstrap_modal_sample/',
        }}
        style={{ flex: 1 }}
        startInLoadingState
        bounces={false}
      />
    </SafeAreaView>
  );
}

export default App;
