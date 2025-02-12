import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_779)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill="#F0F0F0"
        />
        <Path
          d="M40.0006 20.0001C40.0006 11.4009 34.573 4.06992 26.957 1.24414V38.7562C34.573 35.9302 40.0006 28.5995 40.0006 20.0001V20.0001Z"
          fill="#D80027"
        />
        <Path
          d="M0 20.0001C0 28.5995 5.4275 35.9302 13.0435 38.7562V1.24414C5.4275 4.06992 0 11.4009 0 20.0001V20.0001Z"
          fill="#D80027"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_779">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Peru'

/**
 * Flags by `Deji.Zeal`: Peru
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Peru = memo(Icon)
