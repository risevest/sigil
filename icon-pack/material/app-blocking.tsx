import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.5 8C14.29 8 12.5 9.79 12.5 12C12.5 14.21 14.29 16 16.5 16C18.71 16 20.5 14.21 20.5 12C20.5 9.79 18.71 8 16.5 8ZM14 12C14 10.62 15.12 9.5 16.5 9.5C16.92 9.5 17.3 9.61 17.65 9.79L14.29 13.15C14.11 12.8 14 12.42 14 12ZM16.5 14.5C16.08 14.5 15.7 14.39 15.35 14.21L18.71 10.85C18.89 11.2 19 11.58 19 12C19 13.38 17.88 14.5 16.5 14.5Z" />
      <Path d="M15.5 18H5.5V6H15.5V7H17.5V3C17.5 1.9 16.6 1 15.5 1H5.5C4.4 1 3.5 1.9 3.5 3V21C3.5 22.1 4.4 23 5.5 23H15.5C16.6 23 17.5 22.1 17.5 21V17H15.5V18ZM5.5 3H15.5V4H5.5V3ZM15.5 21H5.5V20H15.5V21Z" />
    </Svg>
  )
}

Icon.displayName = 'AppBlocking'

/**
 * Material Icon: App Blocking
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:app_blocking Material Icon Docs}
 */
export const AppBlocking = memo(Icon)
