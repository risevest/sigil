import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9 9V15H15V9H9Z" />
    </Svg>
  )
}

Icon.displayName = 'StopCircleFill'

/**
 * Remix Icon: Stop Circle Fill
 * @see {@link https://remixicon.com/icon/stop-circle-fill Remix Icon Docs}
 */
export const StopCircleFill = memo(Icon)