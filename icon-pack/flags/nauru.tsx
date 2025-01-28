import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_950)">
        <Path
          d="M20 39.9999C31.0457 39.9999 40 31.0456 40 19.9999C40 8.95418 31.0457 -0.00012207 20 -0.00012207C8.95431 -0.00012207 0 8.95418 0 19.9999C0 31.0456 8.95431 39.9999 20 39.9999Z"
          fill="#0052B4"
        />
        <Path
          d="M20 39.9999C31.0457 39.9999 40 31.0456 40 19.9999C40 8.95418 31.0457 -0.00012207 20 -0.00012207C8.95431 -0.00012207 0 8.95418 0 19.9999C0 31.0456 8.95431 39.9999 20 39.9999Z"
          fill="#FFDA44"
        />
        <Path
          d="M20 0C9.54031 0 0.957656 8.02977 0.0761719 18.2609H39.9239C39.0423 8.02977 30.4597 0 20 0V0Z"
          fill="#0052B4"
        />
        <Path
          d="M20 40C30.4597 40 39.0423 31.9702 39.9239 21.7391H0.0761719C0.957656 31.9702 9.54031 40 20 40Z"
          fill="#0052B4"
        />
        <Path
          d="M16.522 26.9565L14.2809 28.0107L15.4743 30.1811L13.0408 29.7155L12.7324 32.1739L11.0373 30.3659L9.34234 32.1739L9.03398 29.7155L6.60039 30.181L7.79383 28.0106L5.55273 26.9565L7.79391 25.9023L6.60039 23.732L9.0339 24.1975L9.34242 21.7391L11.0373 23.5472L12.7325 21.7391L13.0408 24.1975L15.4744 23.732L14.281 25.9024L16.522 26.9565Z"
          fill="#F0F0F0"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_950">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Nauru'

/**
 * Flags by `Deji.Zeal`: Nauru
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Nauru = memo(Icon)
