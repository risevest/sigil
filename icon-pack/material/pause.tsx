import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 19H10V5H6V19ZM14 5V19H18V5H14Z" />
    </Svg>
  )
}

Icon.displayName = 'Pause'

/**
 * Material Icon: Pause
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:pause Material Icon Docs}
 */
export const Pause = memo(Icon)
