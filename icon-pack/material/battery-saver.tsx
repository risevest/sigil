import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 4H14V2H10V4H8C7.45 4 7 4.45 7 5V21C7 21.55 7.45 22 8 22H16C16.55 22 17 21.55 17 21V5C17 4.45 16.55 4 16 4ZM15 14H13V16H11V14H9V12H11V10H13V12H15V14Z" />
    </Svg>
  )
}

Icon.displayName = 'BatterySaver'

/**
 * Material Icon: Battery Saver
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:battery_saver Material Icon Docs}
 */
export const BatterySaver = memo(Icon)
