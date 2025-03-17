import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 6.5H9V4.5H7V6.5H6L2 10.5V19.5H22V10.5L18 6.5ZM4 12.5H14V17.5H4V12.5ZM20 17.5H16V11.33L18 9.33L20 11.33V17.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Gite'

/**
 * Material Icon: Gite
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:gite Material Icon Docs}
 */
export const Gite = memo(Icon)
