import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13.02 19.9298V21.9498C15.03 21.7498 16.86 20.9498 18.34 19.7398L16.92 18.3098C15.81 19.1698 14.48 19.7498 13.02 19.9298Z" />
      <Path d="M4.03 11.9998C4.03 7.9498 7.06 4.5898 10.98 4.0698V2.0498C5.95 2.5798 2.03 6.8398 2.03 11.9998C2.03 17.1598 5.95 21.4198 10.98 21.9498V19.9298C7.06 19.4098 4.03 16.0498 4.03 11.9998Z" />
      <Path d="M19.95 10.9998H21.97C21.77 8.9898 20.97 7.1598 19.76 5.6798L18.33 7.10981C19.19 8.20981 19.77 9.5398 19.95 10.9998Z" />
      <Path d="M18.34 4.2598C16.86 3.0498 15.02 2.2498 13.02 2.0498V4.0698C14.48 4.2498 15.81 4.8298 16.92 5.6898L18.34 4.2598Z" />
      <Path d="M18.33 16.8998L19.76 18.3198C20.97 16.8398 21.77 15.0098 21.97 12.9998H19.95C19.77 14.4598 19.19 15.7898 18.33 16.8998Z" />
      <Path d="M16 11.0998C16 8.60981 14.1 6.9998 12 6.9998C9.9 6.9998 8 8.60981 8 11.0998C8 12.7598 9.33 14.7298 12 16.9998C14.67 14.7298 16 12.7598 16 11.0998ZM12 11.9998C11.41 11.9998 10.93 11.5198 10.93 10.9298C10.93 10.3398 11.41 9.8598 12 9.8598C12.59 9.8598 13.07 10.3398 13.07 10.9298C13.07 11.5198 12.59 11.9998 12 11.9998Z" />
    </Svg>
  )
}

Icon.displayName = 'ShareLocation'

/**
 * Material Icon: Share Location
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:share_location Material Icon Docs}
 */
export const ShareLocation = memo(Icon)
