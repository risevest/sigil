import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.85802 19.71L12 16H5.07026C6.10692 17.7921 7.8188 19.1447 9.85802 19.71ZM4.25204 14H8.5359L5.07103 7.99867C4.38987 9.17566 4 10.5423 4 12C4 12.6906 4.08751 13.3608 4.25204 14ZM6.39496 6.29179L8.5359 10L12 4C9.8171 4 7.8384 4.87429 6.39496 6.29179ZM14.142 4.28998L12 8H18.9297C17.8931 6.20791 16.1812 4.85529 14.142 4.28998ZM19.748 10H15.4641L18.929 16.0013C19.6101 14.8243 20 13.4577 20 12C20 11.3094 19.9125 10.6392 19.748 10ZM17.605 17.7082L15.4641 14L12 20C14.1829 20 16.1616 19.1257 17.605 17.7082ZM12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM13.1547 10H10.8453L9.6906 12L10.8453 14H13.1547L14.3094 12L13.1547 10Z" />
    </Svg>
  )
}

Icon.displayName = 'CameraLensLine'

/**
 * Remix Icon: Camera Lens Line
 * @see {@link https://remixicon.com/icon/camera-lens-line Remix Icon Docs}
 */
export const CameraLensLine = memo(Icon)