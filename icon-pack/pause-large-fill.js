import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 3H8V21H6V3ZM16 3H18V21H16V3Z" />
    </Svg>
  )
}

Icon.displayName = 'PauseLargeFill'

/**
 * Remix Icon: Pause Large Fill
 * @see {@link https://remixicon.com/icon/pause-large-fill Remix Icon Docs}
 */
export const PauseLargeFill = memo(Icon)
