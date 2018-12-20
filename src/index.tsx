import React, { Component } from 'react'
import { Image } from 'react-native'

interface Props {
  uri: string
  fallbackImage?: string
}

interface State {
  renderImageFail: boolean
}

export class SafeImage extends Component<Props, State> {
  state = {
    renderImageFail: false
  }
  render() {
    const { fallbackImage, uri, ...imageProps } = this.props
    const { renderImageFail } = this.state
    if (renderImageFail) {
      if (fallbackImage) {
        return <Image source={{ uri: fallbackImage }} {...imageProps} />
      }
      return null
    }

    return (
      <Image
        source={{ uri }}
        {...imageProps}
        onError={() => this.setState({ renderImageFail: true })}
      />
    )
  }
}
