import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4.50772 2.87597C4.57028 2.37554 4.99568 2 5.5 2H18.5C19.0043 2 19.4297 2.37554 19.4923 2.87597L20.9923 14.876C20.9974 14.9171 21 14.9585 21 15V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V15C3 14.9585 3.00258 14.9171 3.00772 14.876L4.50772 2.87597ZM6.38278 4L5.13278 14H18.8672L17.6172 4H6.38278ZM19 16H5V20H19V16ZM15 17H17V19H15V17ZM13 17H11V19H13V17Z" />
    </Svg>
  )
}

Icon.displayName = 'HardDrive3Line'

/**
 * Remix Icon: Hard Drive 3 Line
 * @see {@link https://remixicon.com/icon/hard-drive-3-line Remix Icon Docs}
 */
export const HardDrive3Line = memo(Icon)