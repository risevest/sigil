import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path, Rect, Defs, ClipPath } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 40 40" fill="none" height={size} width={size} {...otherProps}>
      <G clipPath="url(#clip0_65_2485)">
        <Rect width="40" height="40" rx="20" fill="#D72727" />
        <Rect x="-7" y="13" width="54.2" height="14.2" fill="#0E55BD" />
        <Rect x="-7" y="27.2002" width="54.2" height="14.2" fill="#FF1512" />
        <Rect x="-7" y="-1.2002" width="54.2" height="14.2" fill="#F1F1F1" />
        <Path
          d="M8.40002 7.8001V7.8001C11.9566 7.00974 15.6434 7.00974 19.2 7.8001V7.8001V9.37514C19.2 13.9707 17.2348 18.347 13.8 21.4001V21.4001V21.4001C10.3652 18.347 8.40002 13.9707 8.40002 9.37514V7.8001Z"
          fill="#0E55BD"
        />
        <Path
          d="M11.65 14.5756L9.80005 17.4998L10.7834 18.0876L11.65 19.5998L12.85 20.603L13.8 21.1998L14.15 20.603L15.55 19.4095L17 18.0876L17.6 17.4998L15.95 14.5756L15.2 15.4708L13.8 13.7998L12.4 15.4708L11.65 14.5756Z"
          fill="#F1F1F1"
        />
        <Path
          d="M8.8 7.7998V11.5703C8.8 14.6552 10.1192 17.5928 12.4249 19.6423L13.8 20.8646L15.1751 19.6423C17.4808 17.5928 18.8 14.6552 18.8 11.5703V7.7998H19.6V11.5703C19.6 14.8837 18.1831 18.0389 15.7066 20.2402L13.8 21.935L11.8934 20.2402C9.41692 18.0389 8 14.8837 8 11.5703V7.7998H8.8Z"
          fill="#FF1512"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <Path
          d="M13.8 7.7998L14.2965 9.53974L16.0516 9.0998L14.7931 10.3998L16.0516 11.6998L14.2965 11.2599L13.8 12.9998L13.3034 11.2599L11.5483 11.6998L12.8068 10.3998L11.5483 9.0998L13.3034 9.53974L13.8 7.7998Z"
          fill="#F7D200"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_65_2485">
          <Rect width="40" height="40" rx="20" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

Icon.displayName = 'Slovenia'

/**
 * Flags by `Deji.Zeal`: Slovenia
 * @see {@link https://www.figma.com/community/file/1088904439772569873/alphabetical-country-flags Alphabetical Country Flags}
 */
export const Slovenia = memo(Icon)
