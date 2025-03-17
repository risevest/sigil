import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.43004 3.57992H13.43V5.57992H9.83004L11.83 7.57992H19.43V15.1799L21.43 17.1799V7.57992C21.43 6.46992 20.54 5.57992 19.43 5.57992H15.43V3.57992C15.43 2.46992 14.54 1.57992 13.43 1.57992H9.43004C8.44004 1.57992 7.63004 2.27992 7.47004 3.21992L9.43004 5.17992V3.57992ZM2.83004 1.41992L1.42004 2.82992L4.17004 5.57992H3.43004C2.32004 5.57992 1.44004 6.46992 1.44004 7.57992L1.43004 18.5799C1.43004 19.6899 2.32004 20.5799 3.43004 20.5799H19.17L21.17 22.5799L22.58 21.1699L2.83004 1.41992ZM3.43004 18.5799V7.57992H6.17004L17.17 18.5799H3.43004Z" />
    </Svg>
  )
}

Icon.displayName = 'WorkOff'

/**
 * Material Icon: Work Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:work_off Material Icon Docs}
 */
export const WorkOff = memo(Icon)
