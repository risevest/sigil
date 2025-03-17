import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8 18.5H18V19.5C18 20.6 17.1 21.5 16 21.5H10C8.9 21.5 8 20.6 8 19.5V18.5ZM8 17.5H18V12.5H8V17.5ZM18 2.5V8.5L14.85 7.84C14.84 7.84 14.84 7.85 14.83 7.86C16.38 8.48 17.55 9.84 17.9 11.5H8.1C8.44 9.84 9.62 8.48 11.17 7.86C10.84 7.6 10.57 7.28 10.37 6.91L6 6V5L10.37 4.09C10.87 3.15 11.86 2.5 13 2.5C13.7 2.5 14.34 2.75 14.85 3.16L18 2.5ZM14 5.5C13.97 4.91 13.55 4.5 13 4.5C12.45 4.5 12 4.95 12 5.5C12 6.05 12.45 6.5 13 6.5C13.55 6.5 14 6.05 14 5.5Z" />
    </Svg>
  )
}

Icon.displayName = 'FireExtinguisher'

/**
 * Material Icon: Fire Extinguisher
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:fire_extinguisher Material Icon Docs}
 */
export const FireExtinguisher = memo(Icon)
