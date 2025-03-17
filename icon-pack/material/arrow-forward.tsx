import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowForward'

/**
 * Material Icon: Arrow Forward
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:arrow_forward Material Icon Docs}
 */
export const ArrowForward = memo(Icon)
