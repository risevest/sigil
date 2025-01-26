import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20.998 3V5C20.998 14.6274 15.6255 19 8.99805 19L5.24077 18.9999C5.0786 19.912 4.99805 20.907 4.99805 22H2.99805C2.99805 20.6373 3.11376 19.3997 3.34381 18.2682C3.1133 16.9741 2.99805 15.2176 2.99805 13C2.99805 7.47715 7.4752 3 12.998 3C14.998 3 16.998 4 20.998 3ZM12.998 5C8.57977 5 4.99805 8.58172 4.99805 13C4.99805 13.3624 5.00125 13.7111 5.00759 14.0459C6.26198 12.0684 8.09902 10.5048 10.5019 9.13176L11.4942 10.8682C8.6393 12.4996 6.74554 14.3535 5.77329 16.9998L8.99805 17C15.0132 17 18.8692 13.0269 18.9949 5.38766C17.6229 5.52113 16.3481 5.436 14.7754 5.20009C13.6243 5.02742 13.3988 5 12.998 5Z" />
    </Svg>
  )
}

Icon.displayName = 'LeafLine'

/**
 * Remix Icon: Leaf Line
 * @see {@link https://remixicon.com/icon/leaf-line Remix Icon Docs}
 */
export const LeafLine = memo(Icon)
