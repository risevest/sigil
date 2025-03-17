import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 5H4V21C4 22.1 4.9 23 6 23H16V21H6V5Z" />
      <Path d="M18 1H10C8.9 1 8 1.9 8 3V17C8 18.1 8.9 19 10 19H18C19.1 19 20 18.1 20 17V3C20 1.9 19.1 1 18 1ZM18 17H10V16H18V17ZM18 14H10V6H18V14ZM18 4H10V3H18V4Z" />
      <Path d="M12.5 10.25H14.13L13.44 10.94L14.5 12L17 9.5L14.5 7L13.44 8.06L14.13 8.75H12C11.45 8.75 11 9.2 11 9.75V12H12.5V10.25Z" />
    </Svg>
  )
}

Icon.displayName = 'OfflineShare'

/**
 * Material Icon: Offline Share
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:offline_share Material Icon Docs}
 */
export const OfflineShare = memo(Icon)
