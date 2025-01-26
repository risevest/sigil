import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3.00012 13.0001C3.00012 17.9707 7.02956 22.0001 12.0001 22.0001C16.9707 22.0001 21.0001 17.9707 21.0001 13.0001C21.0001 8.02956 16.9707 4.00012 12.0001 4.00012C7.02956 4.00012 3.00012 8.02956 3.00012 13.0001ZM5.2826 2.74707L1.74707 6.2826L3.16128 7.69682L6.69682 4.16128L5.2826 2.74707ZM22.2532 6.2826L18.7176 2.74707L17.3034 4.16128L20.839 7.69682L22.2532 6.2826ZM9 11V9H15V11.4142L11.4142 15H15V17H9V14.5858L12.5858 11H9Z" />
    </Svg>
  )
}

Icon.displayName = 'AlarmSnoozeFill'

/**
 * Remix Icon: Alarm Snooze Fill
 * @see {@link https://remixicon.com/icon/alarm-snooze-fill Remix Icon Docs}
 */
export const AlarmSnoozeFill = memo(Icon)