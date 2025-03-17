import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10 16H14C14.55 16 15 15.55 15 15V12C15 11.45 14.55 11 14 11V10C14 8.89 13.1 8 12 8C10.89 8 10 8.9 10 10V11C9.45 11 9 11.45 9 12V15C9 15.55 9.45 16 10 16ZM10.8 10C10.8 9.34 11.34 8.8 12 8.8C12.66 8.8 13.2 9.34 13.2 10V11H10.8V10ZM17 1H7C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1 17 1ZM17 19H7V5H17V19Z" />
    </Svg>
  )
}

Icon.displayName = 'ScreenLockPortrait'

/**
 * Material Icon: Screen Lock Portrait
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:screen_lock_portrait Material Icon Docs}
 */
export const ScreenLockPortrait = memo(Icon)
