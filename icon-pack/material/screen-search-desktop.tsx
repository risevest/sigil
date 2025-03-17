import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 18H20C21.1 18 21.99 17.1 21.99 16L22 5C22 3.9 21.1 3 20 3H4C2.9 3 2 3.9 2 5V16C2 17.1 2.9 18 4 18ZM4 5H20V16H4V5Z" />
      <Path d="M23 19H1V21H23V19Z" />
      <Path d="M13.97 7.53C12.6 6.16 10.39 6.16 9.02 7.53C7.65 8.9 7.65 11.11 9.02 12.48C10.2 13.66 12.02 13.82 13.38 12.95L15.47 15.04L16.53 13.98L14.44 11.89C15.31 10.53 15.16 8.71 13.97 7.53ZM12.91 11.41C12.13 12.19 10.86 12.19 10.08 11.41C9.3 10.63 9.3 9.36 10.08 8.58C10.86 7.8 12.13 7.8 12.91 8.58C13.69 9.37 13.69 10.63 12.91 11.41Z" />
    </Svg>
  )
}

Icon.displayName = 'ScreenSearchDesktop'

/**
 * Material Icon: Screen Search Desktop
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:screen_search_desktop Material Icon Docs}
 */
export const ScreenSearchDesktop = memo(Icon)
