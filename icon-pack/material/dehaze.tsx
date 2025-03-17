import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 16V18H22V16H2ZM2 11V13H22V11H2ZM2 6V8H22V6H2Z" />
    </Svg>
  )
}

Icon.displayName = 'Dehaze'

/**
 * Material Icon: Dehaze
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:dehaze Material Icon Docs}
 */
export const Dehaze = memo(Icon)
