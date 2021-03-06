import React, { Component } from 'react'
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const DemoAreaWrapper = styled('div')(props => ({
  gridArea: '2 / 2 / 3 / 3',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '200px',
  color: '#' + props.color,
  fontSize: props.fontSize + 'px',
  lineHeight: props.fontSize + 'px',
  fontWeight: props.isBold && '600',
  textShadow: props.isShadow && '0 2px 1px rgba(0,0,0,0.4)',
  '@media screen and (max-width: 1200px)': {
    gridArea: '2 / 2 / 3 / 3',
    textAlign: 'center'
  }
}))


const TextWrapper = styled('div')({
  maxWidth: '500px'
})


/*----------------------------------------------------------
   Demo Area
----------------------------------------------------------*/

export default class DemoArea extends Component {
  static propTypes = {
    children: PropTypes.node,
    color: PropTypes.string,
    fontSize: PropTypes.string,
    isBold: PropTypes.bool,
    isShadow: PropTypes.bool,
  }
  render() {
    let { children, ...rest } = this.props;
    return (
      <DemoAreaWrapper  {...rest}>
        <TextWrapper>The quick brown fox jumps over the lazy dog</TextWrapper>
      </DemoAreaWrapper>);
  }
}

