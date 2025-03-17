import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.59 8.29492L12 12.8749L7.41 8.29492L6 9.70492L12 15.7049L18 9.70492L16.59 8.29492Z" />
    </Svg>
  )
}

Icon.displayName = 'ExpandMore'

/**
 * Material Icon: Expand More
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:expand_more Material Icon Docs}
 */
export const ExpandMore = memo(Icon)
