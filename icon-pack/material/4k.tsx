import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.11 3 19 3ZM19 19H5V5H19V19ZM9.5 15H11V13.51H12V12H11V9H9.5V12H8V9H6.5V13.5H9.5V15ZM18.2 15L16.2 12L18.2 9H16.5L14.5 12L16.5 15H18.2ZM14.5 12V9H13V15H14.5V12Z" />
    </Svg>
  )
}

Icon.displayName = 'Mi4k'

/**
 * Material Icon: 4k
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:4k Material Icon Docs}
 */
export const Mi4k = memo(Icon)
