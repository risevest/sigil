import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11 4V2H13V4H19C19.5523 4 20 4.44772 20 5V10C20 10.5523 19.5523 11 19 11H13V13H17C17.5523 13 18 13.4477 18 14V19C18 19.5523 17.5523 20 17 20H13V22H11V20H7C6.44772 20 6 19.5523 6 19V14C6 13.4477 6.44772 13 7 13H11V11H5C4.44772 11 4 10.5523 4 10V5C4 4.44772 4.44772 4 5 4H11ZM8 15V18H16V15H8ZM6 9H18V6H6V9Z" />
    </Svg>
  )
}

Icon.displayName = 'AlignItemHorizontalCenterLine'

/**
 * Remix Icon: Align Item Horizontal Center Line
 * @see {@link https://remixicon.com/icon/align-item-horizontal-center-line Remix Icon Docs}
 */
export const AlignItemHorizontalCenterLine = memo(Icon)