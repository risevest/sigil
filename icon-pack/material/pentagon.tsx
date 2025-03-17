import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.63 10.28L16.56 19.5H7.44L4.37 10.28L12 4.94L19.63 10.28ZM2 9.5L6 21.5H18L22 9.5L12 2.5L2 9.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Pentagon'

/**
 * Material Icon: Pentagon
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:pentagon Material Icon Docs}
 */
export const Pentagon = memo(Icon)
