import React, { Component } from 'react'
import { Image, ImageProps, ImageSourcePropType } from 'react-native'

export interface SafeImageProps extends ImageProps {
  fallbackImageSource?: ImageSourcePropType
}

interface State {
  renderImageFail: boolean
}

export class SafeImage extends Component<SafeImageProps, State> {
  state = { renderImageFail: false }
  handleOnError = () => this.setState({ renderImageFail: true })
  render() {
    const { fallbackImageSource, ...imageProps } = this.props
    const { renderImageFail } = this.state
    if (renderImageFail) {
      if (fallbackImageSource) {
        return <Image {...imageProps} source={fallbackImageSource} />
      }
      return null
    }
    return <Image {...imageProps} onError={this.handleOnError} />
  }
}
