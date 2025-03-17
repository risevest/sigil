import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 15C17.95 15 19.76 15.98 20.75 17.5C19.76 19.02 17.95 20 16 20C14.05 20 12.24 19.02 11.25 17.5C12.24 15.98 14.05 15 16 15ZM16 13C12.82 13 10.1 14.87 9 17.5C10.1 20.13 12.82 22 16 22C19.18 22 21.9 20.13 23 17.5C21.9 14.87 19.18 13 16 13ZM16 19C15.17 19 14.5 18.33 14.5 17.5C14.5 16.67 15.17 16 16 16C16.83 16 17.5 16.67 17.5 17.5C17.5 18.33 16.83 19 16 19ZM20.99 12.34C21 12.23 21 12.11 21 12C21 6.48 16.52 2 11 2C5.48 2 1 6.48 1 12C1 17.17 4.93 21.43 9.96 21.95C9.03 21.22 8.24 20.31 7.64 19.27C4.9 18 3 15.22 3 12C3 10.15 3.63 8.45 4.69 7.1L10.35 12.76C10.91 12.36 11.52 12.03 12.17 11.76L6.1 5.69C7.45 4.63 9.15 4 11 4C15.24 4 18.7 7.29 18.98 11.45C19.69 11.67 20.37 11.97 20.99 12.34Z" />
    </Svg>
  )
}

Icon.displayName = 'DisabledVisible'

/**
 * Material Icon: Disabled Visible
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:disabled_visible Material Icon Docs}
 */
export const DisabledVisible = memo(Icon)
