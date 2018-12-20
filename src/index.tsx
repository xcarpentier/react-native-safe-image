import React, { Component } from 'react'
import { Image, ImageProps, ImageSourcePropType } from 'react-native'

interface IProps extends ImageProps {
  fallbackImageSource?: ImageSourcePropType
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
