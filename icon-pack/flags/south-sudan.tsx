import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_491)">
        <Path
          d="M20 40.0002C31.0457 40.0002 40 31.0459 40 20.0002C40 8.95455 31.0457 0.000244141 20 0.000244141C8.95431 0.000244141 0 8.95455 0 20.0002C0 31.0459 8.95431 40.0002 20 40.0002Z"
          fill={color}
        />
        <Path
          d="M38.4406 12.2463C35.4118 5.05172 28.2968 0 20.0009 0C14.4779 0 9.47844 2.23898 5.85938 5.85851L10.868 12.2463H38.4406Z"
          fill={color}
        />
        <Path
          d="M10.9248 27.6812L5.85938 34.1414C9.47844 37.7609 14.4779 39.9999 20.0009 39.9999C28.3248 39.9999 35.4601 34.9144 38.4715 27.6812H10.9248Z"
          fill={color}
        />
        <Path
          d="M4.34766 14.7102V25.2174H39.3109C39.7595 23.554 39.9998 21.8053 39.9998 20C39.9998 18.1686 39.7531 16.3952 39.2919 14.7102H4.34766Z"
          fill={color}
        />
        <Path
          d="M5.85785 5.85791C-1.95262 13.6684 -1.95262 26.3317 5.85785 34.1423C9.08543 30.9147 12.1896 27.8106 20 20.0001L5.85785 5.85791Z"
          fill={color}
        />
        <Path
          d="M6.51547 15.0276L8.95648 18.4339L12.9509 17.1648L10.4656 20.5392L12.9066 23.9457L8.92945 22.6249L6.44414 25.9992L6.47148 21.8084L2.49414 20.4874L6.4882 19.2183L6.51547 15.0276Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_491">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'SouthSudan'

/**
 * Flags by `Deji.Zeal`: South Sudan
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const SouthSudan = memo(Icon)
