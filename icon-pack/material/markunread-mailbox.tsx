import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 7H10V9H20V21H4V9H6V13H8V5H14V1H6V7H4C2.9 7 2 7.9 2 9V21C2 22.1 2.9 23 4 23H20C21.1 23 22 22.1 22 21V9C22 7.9 21.1 7 20 7Z" />
    </Svg>
  )
}

Icon.displayName = 'MarkunreadMailbox'

/**
 * Material Icon: Markunread Mailbox
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:markunread_mailbox Material Icon Docs}
 */
export const MarkunreadMailbox = memo(Icon)
