import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.5 2C16.7467 2 21 6.25329 21 11.5C21 13.0291 20.6387 14.4739 19.9969 15.7536L22.4602 18.2175C22.8507 18.608 22.8507 19.2412 22.4602 19.6317L19.6317 22.4602C19.2412 22.8507 18.608 22.8507 18.2175 22.4602L15.7536 19.9969C14.4739 20.6387 13.0291 21 11.5 21C6.25329 21 2 16.7467 2 11.5C2 6.25329 6.25329 2 11.5 2ZM16.8033 15.3877L15.3891 16.8019L18.9246 20.3375L20.3388 18.9233L16.8033 15.3877ZM18.6669 9.28305L9.28305 18.6669C9.98371 18.8834 10.7282 19 11.5 19C12.4671 19 13.3914 18.817 14.2403 18.4836L13.2678 17.5104C12.8772 17.1199 12.8772 16.4867 13.2678 16.0962L16.0962 13.2678C16.4867 12.8772 17.1199 12.8772 17.5104 13.2678L18.4836 14.2403C18.817 13.3914 19 12.4671 19 11.5C19 10.7282 18.8834 9.98371 18.6669 9.28305ZM11.5 4C7.35786 4 4 7.35786 4 11.5C4 14.1135 5.3368 16.4148 7.36394 17.7574L17.7574 7.36394C16.4148 5.3368 14.1135 4 11.5 4Z" />
    </Svg>
  )
}

Icon.displayName = 'PingPongLine'

/**
 * Remix Icon: Ping Pong Line
 * @see {@link https://remixicon.com/icon/ping-pong-line Remix Icon Docs}
 */
export const PingPongLine = memo(Icon)