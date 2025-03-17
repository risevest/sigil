import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M21 3H3C1.9 3 1 3.9 1 5V17C1 18.1 1.9 19 3 19H8V21H16V19H21C22.1 19 23 18.1 23 17V5C23 3.9 22.1 3 21 3ZM21 17H3V5H21V17ZM19 8H8V10H19V8ZM19 12H8V14H19V12ZM7 8H5V10H7V8ZM7 12H5V14H7V12Z" />
    </Svg>
  )
}

Icon.displayName = 'Dvr'

/**
 * Material Icon: Dvr
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:dvr Material Icon Docs}
 */
export const Dvr = memo(Icon)
