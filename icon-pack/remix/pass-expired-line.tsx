import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 18H21V6H3V18ZM1 5C1 4.44772 1.44772 4 2 4H22C22.5523 4 23 4.44772 23 5V19C23 19.5523 22.5523 20 22 20H2C1.44772 20 1 19.5523 1 19V5ZM9 10C9 9.44772 8.55228 9 8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11C8.55228 11 9 10.5523 9 10ZM11 10C11 11.6569 9.65685 13 8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10ZM8.0018 16C7.03503 16 6.1614 16.3907 5.52693 17.0251L4.11272 15.6109C5.10693 14.6167 6.4833 14 8.0018 14C9.52031 14 10.8967 14.6167 11.8909 15.6109L10.4767 17.0251C9.84221 16.3907 8.96858 16 8.0018 16ZM17.7929 8.79289L16 10.5858L14.2071 8.79289L12.7929 10.2071L14.5858 12L12.7929 13.7929L14.2071 15.2071L16 13.4142L17.7929 15.2071L19.2071 13.7929L17.4142 12L19.2071 10.2071L17.7929 8.79289Z" />
    </Svg>
  )
}

Icon.displayName = 'PassExpiredLine'

/**
 * Remix Icon: Pass Expired Line
 * @see {@link https://remixicon.com/icon/pass-expired-line Remix Icon Docs}
 */
export const PassExpiredLine = memo(Icon)
