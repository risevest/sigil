import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.51 3.08L3.08 19.51C3.17 19.85 3.35 20.16 3.59 20.41C3.84 20.65 4.15 20.83 4.49 20.92L20.93 4.49C20.74 3.8 20.2 3.26 19.51 3.08ZM11.88 3L3 11.88V14.71L14.71 3H11.88ZM5 3C3.9 3 3 3.9 3 5V7L7 3H5ZM19 21C19.55 21 20.05 20.78 20.41 20.41C20.78 20.05 21 19.55 21 19V17L17 21H19ZM9.29 21H12.12L21 12.12V9.29L9.29 21Z" />
    </Svg>
  )
}

Icon.displayName = 'Texture'

/**
 * Material Icon: Texture
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:texture Material Icon Docs}
 */
export const Texture = memo(Icon)
