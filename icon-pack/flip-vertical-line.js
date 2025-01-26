import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 11L2 11L2 13L22 13V11ZM18 2C19.1046 2 20 2.89543 20 4V7C20 8.10457 19.1046 9 18 9L6 9C4.89543 9 4 8.10457 4 7L4 4C4 2.89543 4.89543 2 6 2L18 2ZM18 20H6V17L18 17V20ZM20 17C20 15.8954 19.1046 15 18 15L6 15C4.89543 15 4 15.8954 4 17L4 20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V17Z" />
    </Svg>
  )
}

Icon.displayName = 'FlipVerticalLine'

/**
 * Remix Icon: Flip Vertical Line
 * @see {@link https://remixicon.com/icon/flip-vertical-line Remix Icon Docs}
 */
export const FlipVerticalLine = memo(Icon)
