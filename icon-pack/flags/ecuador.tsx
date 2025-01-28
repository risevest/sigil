import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1703)">
        <Path
          d="M0 19.9999C0 8.95425 8.95437 -0.00012207 20 -0.00012207C31.0456 -0.00012207 40 8.95425 40 19.9999L20 21.739L0 19.9999Z"
          fill={color}
        />
        <Path
          d="M2.67578 29.9999C6.13398 35.9777 12.5968 39.9999 19.9995 39.9999C27.4023 39.9999 33.8651 35.9777 37.3233 29.9999L19.9995 28.6955L2.67578 29.9999Z"
          fill={color}
        />
        <Path
          d="M37.3237 30C39.0255 27.0583 40 23.643 40 20H0C0 23.643 0.974531 27.0583 2.67625 30H37.3237Z"
          fill={color}
        />
        <Path
          d="M20.0004 26.9564C23.8424 26.9564 26.9569 23.8419 26.9569 19.9999C26.9569 16.158 23.8424 13.0434 20.0004 13.0434C16.1585 13.0434 13.0439 16.158 13.0439 19.9999C13.0439 23.8419 16.1585 26.9564 20.0004 26.9564Z"
          fill={color}
        />
        <Path
          d="M20.0002 24.3477C17.6027 24.3477 15.6523 22.3973 15.6523 19.9999V17.3912C15.6523 14.9938 17.6028 13.0434 20.0002 13.0434C22.3975 13.0434 24.348 14.9939 24.348 17.3912V19.9999C24.348 22.3973 22.3976 24.3477 20.0002 24.3477Z"
          fill={color}
        />
        <Path
          d="M26.9561 9.56513H21.7387C21.7387 8.60466 20.96 7.82599 19.9995 7.82599C19.0391 7.82599 18.2604 8.60466 18.2604 9.56513H13.043C13.043 10.5257 13.8796 11.3043 14.84 11.3043H14.7821C14.7821 12.2648 15.5607 13.0434 16.5212 13.0434C16.5212 14.004 17.2998 14.7825 18.2604 14.7825H21.7387C22.6992 14.7825 23.4778 14.004 23.4778 13.0434C24.4384 13.0434 25.217 12.2648 25.217 11.3043H25.1591C26.1195 11.3043 26.9561 10.5256 26.9561 9.56513V9.56513Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1703">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Ecuador'

/**
 * Flags by Deji.Zeal: Ecuador
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Ecuador = memo(Icon)
