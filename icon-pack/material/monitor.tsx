import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 3H4C2.9 3 2 3.9 2 5V16C2 17.1 2.9 18 4 18H7L6 19V21H18V19L17 18H20C21.1 18 22 17.1 22 16V5C22 3.9 21.1 3 20 3ZM20 16H4V5H20V16Z" />
    </Svg>
  )
}

Icon.displayName = 'Monitor'

/**
 * Material Icon: Monitor
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:monitor Material Icon Docs}
 */
export const Monitor = memo(Icon)
