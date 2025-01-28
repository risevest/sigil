import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 22L7.29117 20.8242C8.6944 21.5746 10.2975 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.7025 2.42544 15.3056 3.17581 16.7088L2 22ZM15.4487 7L15.2737 9.00024H17V11.0002H15.0987L14.9237 13.0002H17V15.0002H14.7488L14.5738 17H12.5662L12.7411 15.0002H10.7335L10.5585 17H8.55089L8.72584 15.0002H7V13.0002H8.90082L9.0758 11.0002H7V9.00024H9.25077L9.42577 7H11.4334L11.2584 9.00024H13.2661L13.4411 7H15.4487ZM11.0834 11.0002L10.9085 13.0002H12.9161L13.0911 11.0002H11.0834Z" />
    </Svg>
  )
}

Icon.displayName = 'ChatThreadFill'

/**
 * Remix Icon: Chat Thread Fill
 * @see {@link https://remixicon.com/icon/chat-thread-fill Remix Icon Docs}
 */
export const ChatThreadFill = memo(Icon)
