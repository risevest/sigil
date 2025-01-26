import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 22L7.29117 20.8242C8.6944 21.5746 10.2975 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.7025 2.42544 15.3056 3.17581 16.7088L2 22ZM8.23428 19.0605L7.58075 18.711L4.63416 19.3658L5.28896 16.4192L4.93949 15.7657C4.32549 14.6175 4 13.3345 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 16.4183 16.4183 20 12 20C10.6655 20 9.38248 19.6745 8.23428 19.0605ZM15.4487 7H13.4411L13.2661 9.00024H11.2584L11.4334 7H9.42577L9.25077 9.00024H7V11.0002H9.0758L8.90082 13.0002H7V15.0002H8.72584L8.55089 17H10.5585L10.7335 15.0002H12.7411L12.5662 17H14.5738L14.7488 15.0002H17V13.0002H14.9237L15.0987 11.0002H17V9.00024H15.2737L15.4487 7ZM11.0834 11.0002H13.0911L12.9161 13.0002H10.9085L11.0834 11.0002Z" />
    </Svg>
  )
}

Icon.displayName = 'ChatThreadLine'

/**
 * Remix Icon: Chat Thread Line
 * @see {@link https://remixicon.com/icon/chat-thread-line Remix Icon Docs}
 */
export const ChatThreadLine = memo(Icon)