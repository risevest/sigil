import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...otherProps}>
      <Path
        d="M20 18C21.1 18 21.99 17.1 21.99 16L22 6C22 4.89 21.1 4 20 4H4C2.89 4 2 4.89 2 6V16C2 17.1 2.89 18 4 18H0V20H24V18H20ZM4 16V6H20V16.01L4 16ZM13 9.13C9.11 9.67 7.56 12.33 7 15C8.39 13.13 10.22 12.28 13 12.28V14.47L17 10.73L13 7V9.13Z"
        fill={color}
      />
    </Svg>
  )
}

Icon.displayName = 'ScreenShare'

/**
 * Material Icon: Screen Share
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:screen_share Material Icon Docs}
 */
export const ScreenShare = memo(Icon)
