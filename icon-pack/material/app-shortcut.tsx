import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15 18H5V6H15V7H17V3C17 1.9 16.1 1 15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H15C16.1 23 17 22.1 17 21V17H15V18ZM5 3H15V4H5V3ZM15 21H5V20H15V21Z" />
      <Path d="M18.38 9.62L19 11L19.62 9.62L21 9L19.62 8.38L19 7L18.38 8.38L17 9L18.38 9.62Z" />
      <Path d="M14 8L12.75 10.75L10 12L12.75 13.25L14 16L15.25 13.25L18 12L15.25 10.75L14 8Z" />
      <Path d="M19 13L18.38 14.38L17 15L18.38 15.62L19 17L19.62 15.62L21 15L19.62 14.38L19 13Z" />
    </Svg>
  )
}

Icon.displayName = 'AppShortcut'

/**
 * Material Icon: App Shortcut
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:app_shortcut Material Icon Docs}
 */
export const AppShortcut = memo(Icon)
