import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 20.3345V18.135C17.6993 17.2367 19.012 15.7047 19.6233 13.8537C19.0927 13.9504 18.5498 14 18 14C13.0294 14 9 9.97059 9 5.00003C9 4.95443 9.00034 4.90887 9.00102 4.86337C7.04146 5.89875 5.60285 7.77581 5.15045 10H3.11775C3.79375 5.73826 7.30375 2.42006 11.6562 2.03699C11.2352 2.93681 11 3.94095 11 5.00003C11 8.86602 14.134 12 18 12C19.475 12 20.8435 11.5438 21.972 10.7648C21.9905 11.0074 22 11.2526 22 11.5C22 15.5107 19.5146 18.9409 16 20.3345ZM7 20H14V22H7V20ZM4 12H10V14H4V12ZM2 16H12V18H2V16Z" />
    </Svg>
  )
}

Icon.displayName = 'MoonFoggyLine'

/**
 * Remix Icon: Moon Foggy Line
 * @see {@link https://remixicon.com/icon/moon-foggy-line Remix Icon Docs}
 */
export const MoonFoggyLine = memo(Icon)
