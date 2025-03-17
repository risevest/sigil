import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.75 9.86V14.14L15.72 12L18.75 9.86ZM9.75 9.86V14.14L6.72 12L9.75 9.86ZM20.75 6L12.25 12L20.75 18V6ZM11.75 6L3.25 12L11.75 18V6Z" />
    </Svg>
  )
}

Icon.displayName = 'FastRewind'

/**
 * Material Icon: Fast Rewind
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:fast_rewind Material Icon Docs}
 */
export const FastRewind = memo(Icon)
