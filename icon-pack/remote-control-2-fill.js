import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18 2C18.5523 2 19 2.44772 19 3V21C19 21.5523 18.5523 22 18 22H6C5.44772 22 5 21.5523 5 21V3C5 2.44772 5.44772 2 6 2H18ZM15 15H13V17H15V15ZM11 15H9V17H11V15ZM13 6H11V8H9V10H10.999L11 12H13L12.999 10H15V8H13V6Z" />
    </Svg>
  )
}

Icon.displayName = 'RemoteControl2Fill'

/**
 * Remix Icon: Remote Control 2 Fill
 * @see {@link https://remixicon.com/icon/remote-control-2-fill Remix Icon Docs}
 */
export const RemoteControl2Fill = memo(Icon)