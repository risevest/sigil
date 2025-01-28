import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_1715)">
        <Path
          d="M20 40C31.0457 40 40 31.0457 40 20C40 8.9543 31.0457 0 20 0C8.9543 0 0 8.9543 0 20C0 31.0457 8.9543 40 20 40Z"
          fill={color}
        />
        <Path
          d="M0.688477 25.2174C2.5352 32.0692 7.93027 37.4644 14.7821 39.3111V25.2174H0.688477Z"
          fill={color}
        />
        <Path
          d="M14.7821 0.688965C7.93027 2.53561 2.53512 7.93076 0.688477 14.7826H14.7821V0.688965H14.7821Z"
          fill={color}
        />
        <Path
          d="M39.3114 14.7826C37.4647 7.93076 32.0696 2.53561 25.2178 0.688965V14.7826H39.3114V14.7826Z"
          fill={color}
        />
        <Path
          d="M25.2178 39.3111C32.0696 37.4644 37.4647 32.0693 39.3114 25.2174H25.2178V39.3111Z"
          fill={color}
        />
        <Path
          d="M25.2171 20C25.2171 22.8816 22.8812 25.2174 19.9996 25.2174C17.1182 25.2174 14.7822 22.8816 14.7822 20C14.7822 17.1185 19.9996 14.7826 19.9996 14.7826C19.9996 14.7826 25.2171 17.1185 25.2171 20Z"
          fill={color}
        />
        <Path
          d="M14.7822 20C14.7822 17.1185 17.1182 14.7826 19.9996 14.7826C22.8812 14.7826 25.2171 17.1185 25.2171 20"
          fill={color}
        />
        <Path
          d="M17.0654 17.3914V20.6522C17.0654 22.2731 18.3793 23.587 20.0002 23.587C21.6211 23.587 22.935 22.2731 22.935 20.6522V17.3914H17.0654Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_1715">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'DominicanRepublic'

/**
 * Flags by `Deji.Zeal`: Dominican Republic
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const DominicanRepublic = memo(Icon)
