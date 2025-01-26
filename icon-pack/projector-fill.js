import { memo } from 'react'
import { Svg, Path } from 'react-native-svg'

/**
 * @param {import('../types').IconProps} props
 */
const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3 3H21C21.5523 3 22 3.44772 22 4V10H18.874C18.4299 8.27477 16.8638 7 15 7C13.1362 7 11.5701 8.27477 11.126 10H2V4C2 3.44772 2.44772 3 3 3ZM2 12V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V12H18.874C18.4299 13.7252 16.8638 15 15 15C13.1362 15 11.5701 13.7252 11.126 12H2ZM15 9C13.8954 9 13 9.89543 13 11C13 12.1046 13.8954 13 15 13C16.1046 13 17 12.1046 17 11C17 9.89543 16.1046 9 15 9ZM6 15H8V17H6V15Z" />
    </Svg>
  )
}

Icon.displayName = 'ProjectorFill'

/**
 * Remix Icon: Projector Fill
 * @see {@link https://remixicon.com/icon/projector-fill Remix Icon Docs}
 */
export const ProjectorFill = memo(Icon)