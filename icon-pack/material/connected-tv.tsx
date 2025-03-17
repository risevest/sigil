import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 3H4C2.9 3 2 3.9 2 5V17C2 18.1 2.9 19 4 19H8V21H16V19H20C21.1 19 21.99 18.1 21.99 17L22 5C22 3.9 21.1 3 20 3ZM20 17H4V5H20V17ZM5 14V16H7C7 14.89 6.11 14 5 14ZM5 11V12.43C6.97 12.43 8.57 14.03 8.57 16H10C10 13.24 7.76 11 5 11ZM5 8V9.45C8.61 9.45 11.55 12.38 11.55 16H13C13 11.58 9.41 8 5 8Z" />
    </Svg>
  )
}

Icon.displayName = 'ConnectedTv'

/**
 * Material Icon: Connected Tv
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:connected_tv Material Icon Docs}
 */
export const ConnectedTv = memo(Icon)
