import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9 18H21V16H9V18ZM3 6V8H21V6H3ZM9 13H21V11H9V13Z" />
    </Svg>
  )
}

Icon.displayName = 'Segment'

/**
 * Material Icon: Segment
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:segment Material Icon Docs}
 */
export const Segment = memo(Icon)
