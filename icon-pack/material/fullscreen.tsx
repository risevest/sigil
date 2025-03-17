import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7 14H5V19H10V17H7V14ZM5 10H7V7H10V5H5V10ZM17 17H14V19H19V14H17V17ZM14 5V7H17V10H19V5H14Z" />
    </Svg>
  )
}

Icon.displayName = 'Fullscreen'

/**
 * Material Icon: Fullscreen
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:fullscreen Material Icon Docs}
 */
export const Fullscreen = memo(Icon)
