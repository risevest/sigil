import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1097)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill="#F0F0F0"
        />
        <Path
          d="M20 0C31.0456 0 40 8.95437 40 20C40 31.0456 31.0456 40 20 40"
          fill="#D80027"
        />
        <Path
          d="M13.9127 7.8262V5.21753H11.3041V7.8262H8.69531V10.4349H11.3041V13.0436H13.9127V10.4349H16.5214V7.8262H13.9127Z"
          fill="#ACABB1"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1097">
          <Rect width="40" height="40" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Malta'

/**
 * Flags by `Deji.Zeal`: Malta
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Malta = memo(Icon)
