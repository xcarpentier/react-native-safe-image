import React, { Component } from 'react'
import { Image, ImageProps } from 'react-native'

interface IProps extends ImageProps {
  fallbackImage?: string
}

interface IState {
  renderImageFail: boolean
}

export class SafeImage extends Component<IProps, IState> {
  state = { renderImageFail: false }
  handleOnError = () => this.setState({ renderImageFail: true })
  componentDidUpdate() {
    this.setState({ renderImageFail: false })
  }
  render() {
    const { fallbackImage, ...imageProps } = this.props
    const { renderImageFail } = this.state
    if (renderImageFail) {
      if (fallbackImage) {
        return <Image {...imageProps} source={{ uri: fallbackImage }} />
      }
      return null
    }
    return <Image {...imageProps} onError={this.handleOnError} />
  }
}
