import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_471)">
        <Path
          d="M20 39.9999C31.0456 39.9999 39.9999 31.0456 39.9999 20C39.9999 8.95429 31.0456 0 20 0C8.95429 0 0 8.95429 0 20C0 31.0456 8.95429 39.9999 20 39.9999Z"
          fill="#FFDA44"
        />
        <Path
          d="M15.6531 3.47827H8.72852C8.42165 3.68804 8.12133 3.9064 7.82704 4.13241L6.08789 19.9999L7.82704 35.8675C8.12133 36.0936 8.42165 36.3119 8.72852 36.5216H15.6531V3.47827Z"
          fill="#FF9811"
        />
        <Path
          d="M0 19.9999C0 26.4644 3.06782 32.2114 7.82611 35.8675V4.13232C3.06782 7.78843 0 13.5355 0 19.9999V19.9999Z"
          fill="#6DA544"
        />
        <Path
          d="M32.1738 12.1924V12.6928L32.1924 12.6956L32.1738 12.1924Z"
          fill="#FFDA44"
        />
        <Path
          d="M38.4067 25.2174H34.6385L33.0443 26.9565V30.4348H29.566V28.6957H31.3052V25.2174H23.4791V27.3913H21.7399V23.2482C21.2063 22.7706 20.8704 22.0767 20.8704 21.3043V10C20.8704 8.5593 22.0384 7.39133 23.4791 7.39133V23.4783H26.9574L28.1508 22.4837C27.9424 21.9872 27.8269 21.442 27.8269 20.8696V18.261H25.2182V13.0436H30.4356C30.4356 12.1741 31.74 11.3045 31.74 11.3045C31.74 11.3045 33.0443 12.174 33.0443 13.0436V14.348V18.261C34.0118 18.2725 35.5488 18.2474 37.2093 18.261C36.7731 17.4985 36.5225 16.5938 36.5225 15.6524C36.5225 14.1179 37.185 12.7384 38.2396 11.7837C36.7196 8.41531 34.2941 5.54328 31.2732 3.47827H18.2617V36.5218H31.2733C34.9467 34.0108 37.7396 30.3068 39.0946 25.9678L38.4067 25.2174Z"
          fill="#A2001D"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_471">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'SriLanka'

/**
 * Flags by `Deji.Zeal`: Sri Lanka
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const SriLanka = memo(Icon)
