import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.7134 8.12811L19.4668 8.69379C19.2864 9.10792 18.7136 9.10792 18.5331 8.69379L18.2866 8.12811C17.8471 7.11947 17.0555 6.31641 16.0677 5.87708L15.308 5.53922C14.8973 5.35653 14.8973 4.75881 15.308 4.57612L16.0252 4.25714C17.0384 3.80651 17.8442 2.97373 18.2761 1.93083L18.5293 1.31953C18.7058 0.893489 19.2942 0.893489 19.4706 1.31953L19.7238 1.93083C20.1558 2.97373 20.9616 3.80651 21.9748 4.25714L22.6919 4.57612C23.1027 4.75881 23.1027 5.35653 22.6919 5.53922L21.9323 5.87708C20.9445 6.31641 20.1529 7.11947 19.7134 8.12811ZM3.9934 3H13V5H5V19H19V11H21V20.0066C21 20.5552 20.5551 21 20.0066 21H3.9934C3.44476 21 3 20.5551 3 20.0066V3.9934C3 3.44476 3.44495 3 3.9934 3ZM10.6219 8.41459L15.5008 11.6672C15.6846 11.7897 15.7343 12.0381 15.6117 12.2219C15.5824 12.2658 15.5447 12.3035 15.5008 12.3328L10.6219 15.5854C10.4381 15.708 10.1897 15.6583 10.0672 15.4745C10.0234 15.4088 10 15.3316 10 15.2526V8.74741C10 8.52649 10.1791 8.34741 10.4 8.34741C10.479 8.34741 10.5562 8.37078 10.6219 8.41459Z" />
    </Svg>
  )
}

Icon.displayName = 'VideoAiLine'

/**
 * Remix Icon: Video Ai Line
 * @see {@link https://remixicon.com/icon/video-ai-line Remix Icon Docs}
 */
export const VideoAiLine = memo(Icon)
