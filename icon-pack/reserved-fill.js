import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 15V19H16V21H8V19H11V15H4C3.44772 15 3 14.5523 3 14V4C3 3.44772 3.44772 3 4 3H20C20.5523 3 21 3.44772 21 4V14C21 14.5523 20.5523 15 20 15H13ZM8 8V10H16V8H8Z" />
    </Svg>
  )
}

Icon.displayName = 'ReservedFill'

/**
 * Remix Icon: Reserved Fill
 * @see {@link https://remixicon.com/icon/reserved-fill Remix Icon Docs}
 */
export const ReservedFill = memo(Icon)