import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill={color} height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_51_113)">
        <Path
          d="M19.9993 0C31.0449 0 39.9993 8.95437 39.9993 20C39.9993 31.0456 31.0449 40 19.9993 40C19.9993 39.1305 17.3906 20 17.3906 20L19.9993 0Z"
          fill={color}
        />
        <Path
          d="M20 40C8.95437 40 0 31.0456 0 20C0 8.95437 8.95437 0 20 0"
          fill={color}
        />
        <Path
          d="M27.659 17.4033L31.4177 22.3757C30.8255 23.2724 30.8286 24.4805 31.5135 25.3865C32.3823 26.5358 34.0183 26.7633 35.1677 25.8945C36.317 25.0258 36.5445 23.3897 35.6755 22.2404C34.9908 21.3344 33.8292 21.0019 32.805 21.3271L26.9471 13.5776L25.5598 14.6264L23.4785 16.1994L25.576 18.974L27.659 17.4033ZM33.0702 23.1197C33.4533 22.8301 33.9987 22.906 34.2883 23.289C34.5778 23.6721 34.5021 24.2175 34.119 24.5072C33.7359 24.7966 33.1905 24.721 32.901 24.3378C32.6113 23.9547 32.6871 23.4093 33.0702 23.1197V23.1197Z"
          fill={color}
        />
        <Path
          d="M34.1058 18.9741L36.2033 16.1995L34.1222 14.6264L32.7348 13.5776L26.8769 21.3271C25.8529 21.0019 24.6912 21.3345 24.0064 22.2404C23.1375 23.3898 23.365 25.0258 24.5143 25.8945C25.6637 26.7633 27.2996 26.5358 28.1683 25.3865C28.8532 24.4805 28.8563 23.2724 28.2642 22.3757L32.0229 17.4033L34.1058 18.9741ZM26.781 24.3379C26.4915 24.7212 25.9462 24.7969 25.563 24.5073C25.1799 24.2176 25.1041 23.6722 25.3937 23.2891C25.6833 22.9062 26.2287 22.8302 26.6119 23.1199C26.9949 23.4095 27.0706 23.9549 26.781 24.3379V24.3379Z"
          fill={color}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_51_113">
          <Rect width="40" height="40" fill={color} />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'VaticanCity'

/**
 * Flags by `Deji.Zeal`: Vatican City
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const VaticanCity = memo(Icon)
