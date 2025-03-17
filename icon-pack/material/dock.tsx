import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8 23H16V21H8V23ZM16 1.01L8 1C6.9 1 6 1.9 6 3V17C6 18.1 6.9 19 8 19H16C17.1 19 18 18.1 18 17V3C18 1.9 17.1 1.01 16 1.01ZM16 15H8V5H16V15Z" />
    </Svg>
  )
}

Icon.displayName = 'Dock'

/**
 * Material Icon: Dock
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:dock Material Icon Docs}
 */
export const Dock = memo(Icon)
