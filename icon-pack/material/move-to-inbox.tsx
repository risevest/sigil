import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 9H13.45V6H10.55V9H8L12 13L16 9ZM19 3H4.99C3.88 3 3 3.9 3 5V19C3 20.1 3.88 21 4.99 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V16H8.56C9.25 17.19 10.53 18 12.01 18C13.49 18 14.76 17.19 15.46 16H19V19ZM19 14H14.01C14.01 15.1 13.11 16 12.01 16C10.91 16 10.01 15.1 10.01 14H5L4.99 5H19V14Z" />
    </Svg>
  )
}

Icon.displayName = 'MoveToInbox'

/**
 * Material Icon: Move To Inbox
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:move_to_inbox Material Icon Docs}
 */
export const MoveToInbox = memo(Icon)
