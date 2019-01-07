[![NPM version](https://badge.fury.io/js/react-native-safe-image.svg)](http://badge.fury.io/js/react-native-safe-image)

# react-native-safe-image

Really light React-Native package to handle fallback when image is on error

## How to use it ?

```ts
import { SafeImage } from 'react-native-safe-image'

// ...
render() {
  return (
    <SafeImage
      source={{ uri: 'http://Normal-Image-Maybe-OnError.jpg' }}
      fallbackImageSource={require('./Path-To/FallbackImage.jpg')}
      style={{ width: 30, height: 30 }}
      resizeMode="contain"
    />
  )
}
// ... or ...
render() {
  return (
    <SafeImage
      source={{ uri: 'http://Normal-Image-Maybe-OnError.jpg' }}
      fallbackComponent={<View><Text>No Img</Text></View>}
      style={{ width: 30, height: 30 }}
      resizeMode="contain"
    />
  )
}

```

## Todos

- [x] add `fallbackComponent` prop
