import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M23.4132 8.7918L18.0211 13.7783L16.6058 12.363L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L11.2169 6.97405L9.70961 5.46678L12.0006 0.5L15.3862 7.84006L23.4132 8.7918ZM8.45885 9.87258L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968L16.2473 18.3451L16.0777 17.4914L8.45885 9.87258ZM18.6224 20.0361L19.054 22.2082L12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L6.65832 8.07205L1.39397 2.80769L2.80818 1.39348L22.6072 21.1925L21.193 22.6067L18.6224 20.0361Z" />
    </Svg>
  )
}

Icon.displayName = 'StarOffLine'

/**
 * Remix Icon: Star Off Line
 * @see {@link https://remixicon.com/icon/star-off-line Remix Icon Docs}
 */
export const StarOffLine = memo(Icon)
