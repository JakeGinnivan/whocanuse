import React from 'react'
import styled from '@emotion/styled'
import { SmallText } from './typography'
import { theme } from './theme'
import { TwitterShareButton } from 'react-twitter-embed'
import { linkPath } from '../helpers/link'
import CarbonAds from './carbonad'

import Tippy from '@tippy.js/react'

/*----------------------------------------------------------
   Styles
----------------------------------------------------------*/

const ActionsWrapper = styled('div')(props => ({
  gridArea: '5 / 1 / 6 / 4',
  display: 'flex',
  alignItems: 'center',
  input: {
    borderRadius: '3px',
    fontSize: '14px',
    color: theme.color.grey,
    fontFamily: theme.fontFamily,
    border: `1px solid ${theme.color.lightgrey}`,
    width: '100%',
    padding: '8px 4px',
    marginRight: '10px',
    transition: 'all 0.2s ease',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#f9f9f9',
      transition: 'all 0.2s ease',
    },
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  iframe: {
    marginLeft: '10px',
  },
  div: {
    display: 'flex',
    alignItems: 'center',
  },
}))

const SharingWrapper = styled('div')({
  display: 'flex',
  width: '50%',
})

const AdsWrapper = styled('div')({
  display: 'flex',
  width: '50%',
})

/*----------------------------------------------------------
   Actions and Sharing Bar
----------------------------------------------------------*/

export const Actions = ({
  children,
  foreground,
  background,
  fontSize,
  bold,
  shadow,
  ...rest
}) => {
  const copyRef = React.useRef()

  return (
    <ActionsWrapper {...rest}>
      <SharingWrapper>
        <form>
          <SmallText style={{ marginRight: '10px' }}>Permalink</SmallText>
          <Tippy
            content="Click to copy"
            placement="bottom"
            animation="shift-away"
            arrow="true"
          >
            <input
              type="text"
              id="permalink"
              name="permalink"
              value={`http://whocanuse.com/${linkPath(
                background,
                foreground,
                fontSize,
                bold,
                shadow,
              )}`}
              readOnly="readonly"
              ref={copyRef}
              onClick={() => {
                copyRef.current.select()
                document.execCommand('copy')
              }}
            />
          </Tippy>
        </form>
        <TwitterShareButton
          url={'https://whocanuse.com'}
          options={{
            text: `An easy-to-use tool that delivers a breakdown of which vision types can see your color combination`,
            via: 'CoreyGinnivan',
          }}
        />
        <iframe
          title="Github Star"
          src="https://ghbtns.com/github-btn.html?user=coreyginnivan&repo=whocanuse&type=star&count=true"
          frameBorder="0"
          scrolling="0"
          width="60"
          height="20px"
        />
      </SharingWrapper>
      <AdsWrapper>
        <CarbonAds carbonUrl="//cdn.carbonads.com/carbon.js?serve=CE7DE2QU&placement=whocanusecom" />
      </AdsWrapper>
    </ActionsWrapper>
  )
}
