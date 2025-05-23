import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM4 12C4 10.05 4.7 8.26 5.87 6.87L9 10V11C9 12.1 9.9 13 11 13V18.59C11 18.86 11.11 19.11 11.29 19.3L12 20C7.58 20 4 16.42 4 12ZM13 19.94V18L16.75 12.38C16.91 12.13 17 11.84 17 11.55V10.5C17 9.95 16.55 9.5 16 9.5H14.5L13.1 7.75C12.72 7.28 12.15 7 11.54 7H8V5.07C9.18 4.39 10.54 4 12 4C16.41 4 20 7.59 20 12C20 16.07 16.94 19.44 13 19.94Z" />
    </Svg>
  )
}

Icon.displayName = 'SouthAmerica'

/**
 * Material Icon: South America
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:south_america Material Icon Docs}
 */
export const SouthAmerica = memo(Icon)
