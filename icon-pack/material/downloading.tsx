import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M18.345 4.2598C16.865 3.0498 15.035 2.2498 13.025 2.0498V4.0698C14.485 4.2498 15.815 4.8298 16.925 5.6898L18.345 4.2598ZM19.955 10.9998H21.975C21.775 8.9898 20.975 7.1598 19.765 5.6798L18.335 7.0998C19.195 8.20981 19.775 9.5398 19.955 10.9998ZM18.335 16.8998L19.765 18.3298C20.975 16.8498 21.775 15.0098 21.975 13.0098H19.955C19.775 14.4598 19.195 15.7898 18.335 16.8998ZM13.025 19.9298V21.9498C15.035 21.7498 16.865 20.9498 18.345 19.7398L16.915 18.3098C15.815 19.1698 14.485 19.7498 13.025 19.9298ZM15.615 10.5898L13.025 13.1698V6.9998H11.025V13.1698L8.43499 10.5798L7.02499 11.9998L12.025 16.9998L17.025 11.9998L15.615 10.5898ZM11.025 19.9298V21.9498C5.97499 21.4498 2.02499 17.1898 2.02499 11.9998C2.02499 6.8098 5.97499 2.5498 11.025 2.0498V4.0698C7.07499 4.5598 4.02499 7.9198 4.02499 11.9998C4.02499 16.0798 7.07499 19.4398 11.025 19.9298Z" />
    </Svg>
  )
}

Icon.displayName = 'Downloading'

/**
 * Material Icon: Downloading
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:downloading Material Icon Docs}
 */
export const Downloading = memo(Icon)
