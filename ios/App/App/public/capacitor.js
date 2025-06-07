window.Capacitor = {
  isNativePlatform: () => true,
  getPlatform: () => 'ios',
  Plugins: {}
};

if (window.webkit && window.webkit.messageHandlers) {
  console.log('Capacitor iOS bridge ready');
} else {
  console.log('Capacitor running in browser mode');
}