import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 9.5H1V20.5C1 21.61 1.89 22.5 3 22.5H20V20.5H3V9.5Z" />
      <Path d="M18 5.5V3.5C18 2.4 17.1 1.5 16 1.5H12C10.9 1.5 10 2.4 10 3.5V5.5H5V16.5C5 17.6 5.9 18.5 7 18.5H21C22.1 18.5 23 17.6 23 16.5V5.5H18ZM12 3.5H16V5.5H12V3.5ZM21 16.5H7V7.5H21V16.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Cases'

/**
 * Material Icon: Cases
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:cases Material Icon Docs}
 */
export const Cases = memo(Icon)
