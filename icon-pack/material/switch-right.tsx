import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M15.5 15.38V8.62L18.88 12L15.5 15.38ZM14 19L21 12L14 5V19ZM10 19V5L3 12L10 19Z" />
    </Svg>
  )
}

Icon.displayName = 'SwitchRight'

/**
 * Material Icon: Switch Right
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:switch_right Material Icon Docs}
 */
export const SwitchRight = memo(Icon)
