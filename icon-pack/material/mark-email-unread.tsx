import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M22 9.98V19C22 20.1 21.1 21 20 21H4C2.9 21 2 20.1 2 19L2.01 7C2.01 5.9 2.9 5 4 5H14.1C14.04 5.32 14 5.66 14 6C14 6.34 14.04 6.68 14.1 7H4L12 12L15.67 9.71C16.14 10.14 16.69 10.47 17.3 10.69L12 14L4 9V19H20V10.9C20.74 10.75 21.42 10.42 22 9.98ZM16 6C16 7.66 17.34 9 19 9C20.66 9 22 7.66 22 6C22 4.34 20.66 3 19 3C17.34 3 16 4.34 16 6Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'MarkEmailUnread'

/**
 * Material Icon: Mark Email Unread
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:mark_email_unread Material Icon Docs}
 */
export const MarkEmailUnread = memo(Icon)
