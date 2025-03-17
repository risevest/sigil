import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path
        d="M19.5 2.5H3.5C2.4 2.5 1.5 3.4 1.5 4.5V16.5C1.5 17.6 2.4 18.5 3.5 18.5H12.5V16.5H3.5V6.5L11.5 11.5L19.5 6.5V11.5H21.5V4.5C21.5 3.4 20.6 2.5 19.5 2.5ZM11.5 9.5L3.5 4.5H19.5L11.5 9.5ZM18.5 13.5L22.5 17.5L18.5 21.5V18.5H14.5V16.5H18.5V13.5Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'ForwardToInbox'

/**
 * Material Icon: Forward To Inbox
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:forward_to_inbox Material Icon Docs}
 */
export const ForwardToInbox = memo(Icon)
