import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 5H3C1.9 5 1 5.9 1 7V17C1 18.1 1.9 19 3 19H21C22.1 19 23 18.1 23 17V7C23 5.9 22.1 5 21 5ZM19 17H5V7H19V17ZM10 16H14C14.55 16 15 15.55 15 15V12C15 11.45 14.55 11 14 11V10C14 8.89 13.1 8 12 8C10.89 8 10 8.9 10 10V11C9.45 11 9 11.45 9 12V15C9 15.55 9.45 16 10 16ZM10.8 10C10.8 9.34 11.34 8.8 12 8.8C12.66 8.8 13.2 9.34 13.2 10V11H10.8V10Z" />
    </Svg>
  )
}

Icon.displayName = 'ScreenLockLandscape'

/**
 * Material Icon: Screen Lock Landscape
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:screen_lock_landscape Material Icon Docs}
 */
export const ScreenLockLandscape = memo(Icon)
