import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM11 16H9V8H11V16ZM15 16H13V8H15V16Z" />
    </Svg>
  )
}

Icon.displayName = 'PauseCircleFilled'

/**
 * Material Icon: Pause Circle Filled
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:pause_circle_filled Material Icon Docs}
 */
export const PauseCircleFilled = memo(Icon)
