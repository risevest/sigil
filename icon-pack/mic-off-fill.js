import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.4249 17.839C15.3929 18.4228 14.2341 18.8087 13.0002 18.9451V23H11.0002V18.9451C6.82854 18.4839 3.51623 15.1716 3.05509 11H5.07105C5.55627 14.3923 8.47368 17 12.0002 17C13.0503 17 14.0464 16.7688 14.9404 16.3544L13.3902 14.8042C12.9489 14.9317 12.4825 15 12.0002 15C9.23873 15 7.00016 12.7614 7.00016 10V8.41421L1.39355 2.80761L2.80777 1.3934L22.6068 21.1924L21.1925 22.6066L16.4249 17.839ZM19.3747 15.1604L17.9323 13.7179C18.4407 12.9084 18.788 11.9874 18.9293 11H20.9452C20.7754 12.5366 20.2187 13.9565 19.3747 15.1604ZM16.4658 12.2514L7.68575 3.47139C8.55427 1.99268 10.1613 1 12.0002 1C14.7616 1 17.0002 3.23858 17.0002 6V10C17.0002 10.8099 16.8076 11.5748 16.4658 12.2514Z" />
    </Svg>
  )
}

Icon.displayName = 'MicOffFill'

/**
 * Remix Icon: Mic Off Fill
 * @see {@link https://remixicon.com/icon/mic-off-fill Remix Icon Docs}
 */
export const MicOffFill = memo(Icon)
