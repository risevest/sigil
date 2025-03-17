import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.5 17L14.5 12L9.5 7V17Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowRight'

/**
 * Material Icon: Arrow Right
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:arrow_right Material Icon Docs}
 */
export const ArrowRight = memo(Icon)
