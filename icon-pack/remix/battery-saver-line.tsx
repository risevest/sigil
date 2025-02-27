import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 2C14.5523 2 15 2.44772 15 3V4H18C18.5523 4 19 4.44772 19 5V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V5C5 4.44772 5.44772 4 6 4H9V3C9 2.44772 9.44772 2 10 2H14ZM13 4H11V6H7V20H17V6H13V4ZM13 9V12H16V14H13V17H11V14H8V12H11V9H13Z" />
    </Svg>
  )
}

Icon.displayName = 'BatterySaverLine'

/**
 * Remix Icon: Battery Saver Line
 * @see {@link https://remixicon.com/icon/battery-saver-line Remix Icon Docs}
 */
export const BatterySaverLine = memo(Icon)
