import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.4668 8.69379L20.7134 8.12811C21.1529 7.11947 21.9445 6.31641 22.9323 5.87708L23.6919 5.53922C24.1027 5.35653 24.1027 4.75881 23.6919 4.57612L22.9748 4.25714C21.9616 3.80651 21.1558 2.97373 20.7238 1.93083L20.4706 1.31953C20.2942 0.89349 19.7058 0.89349 19.5293 1.31953L19.2761 1.93083C18.8442 2.97373 18.0384 3.80651 17.0252 4.25714L16.308 4.57612C15.8973 4.75881 15.8973 5.35653 16.308 5.53922L17.0677 5.87708C18.0555 6.31641 18.8471 7.11947 19.2866 8.12811L19.5331 8.69379C19.7136 9.10792 20.2864 9.10792 20.4668 8.69379ZM12 22C17.5228 22 22 17.5228 22 12C22 11.5972 21.9762 11.2 21.9299 10.8097L19.9437 11.0454C19.9809 11.3584 20 11.677 20 12C20 13.4577 19.6101 14.8243 18.929 16.0013L15.4641 10H17.9295L16.7755 8H12.0003L15.1686 2.51246C14.1729 2.1801 13.1074 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM12.0003 4L8.53606 10.0003L6.39495 6.29181C7.83839 4.87429 9.81744 4 12.0003 4ZM9.69076 12.0003L10.8456 10H13.1547L14.3095 12.0001L13.1548 14H10.8453L9.69076 12.0003ZM12.0001 16L9.85814 19.7101C7.81886 19.1448 6.10694 17.7921 5.07026 16H12.0001ZM12.0001 20L15.4642 14.0001L17.605 17.7082C16.1616 19.1257 14.183 20 12.0001 20ZM5.07102 7.99869L8.53588 14H4.25204C4.08751 13.3608 4 12.6906 4 12C4 10.5423 4.38987 9.17568 5.07102 7.99869Z" />
    </Svg>
  )
}

Icon.displayName = 'CameraLensAiLine'

/**
 * Remix Icon: Camera Lens Ai Line
 * @see {@link https://remixicon.com/icon/camera-lens-ai-line Remix Icon Docs}
 */
export const CameraLensAiLine = memo(Icon)
