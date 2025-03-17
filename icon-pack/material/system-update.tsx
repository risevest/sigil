import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 1.01L7 1C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1.01 17 1.01ZM17 19H7V5H17V19ZM16 13H13V8H11V13H8L12 17L16 13Z" />
    </Svg>
  )
}

Icon.displayName = 'SystemUpdate'

/**
 * Material Icon: System Update
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:system_update Material Icon Docs}
 */
export const SystemUpdate = memo(Icon)
