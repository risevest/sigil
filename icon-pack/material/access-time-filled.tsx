import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM15.29 16.71L11 12.41V7H13V11.59L16.71 15.3L15.29 16.71Z" />
    </Svg>
  )
}

Icon.displayName = 'AccessTimeFilled'

/**
 * Material Icon: Access Time Filled
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:access_time_filled Material Icon Docs}
 */
export const AccessTimeFilled = memo(Icon)
