import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8.5 8.62V15.38L5.12 12L8.5 8.62ZM10 5L3 12L10 19V5ZM14 5V19L21 12L14 5Z" />
    </Svg>
  )
}

Icon.displayName = 'SwitchLeft'

/**
 * Material Icon: Switch Left
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:switch_left Material Icon Docs}
 */
export const SwitchLeft = memo(Icon)
