import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 2H10L4.02 8L4 20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H6V8.83L10.83 4H18V20Z" />
      <Path d="M13 15H11V17H13V15Z" />
      <Path d="M13 8H11V13H13V8Z" />
    </Svg>
  )
}

Icon.displayName = 'SimCardAlert'

/**
 * Material Icon: Sim Card Alert
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sim_card_alert Material Icon Docs}
 */
export const SimCardAlert = memo(Icon)
