import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.1889 13.2642L12.5715 21.106L4.00024 21.1067C3.44795 21.1067 3.00024 20.659 3.00024 20.1067L2.99951 14.709L11.1889 13.2642ZM20.0002 3.10668C20.5525 3.10668 21.0002 3.5544 21.0002 4.10668V20.1067C21.0002 20.659 20.5525 21.1067 20.0002 21.1067L14.6025 21.106L11.4285 3.10596L20.0002 3.10668ZM9.39751 3.10596L10.8416 11.2945L2.99951 12.678L3.00024 4.10668C3.00024 3.5544 3.44795 3.10668 4.00024 3.10668L9.39751 3.10596Z" />
    </Svg>
  )
}

Icon.displayName = 'CollageFill'

/**
 * Remix Icon: Collage Fill
 * @see {@link https://remixicon.com/icon/collage-fill Remix Icon Docs}
 */
export const CollageFill = memo(Icon)