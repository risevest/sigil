import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.01 11H4V13H16.01V16L20 12L16.01 8V11Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowRightAlt'

/**
 * Material Icon: Arrow Right Alt
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:arrow_right_alt Material Icon Docs}
 */
export const ArrowRightAlt = memo(Icon)
