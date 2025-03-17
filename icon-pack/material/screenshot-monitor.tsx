import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M20 3H4C2.89 3 2 3.89 2 5V17C2 18.1 2.89 19 4 19H8V21H16V19H20C21.1 19 22 18.1 22 17V5C22 3.89 21.1 3 20 3ZM20 17H4V5H20V17Z" />
      <Path d="M6.5 7.5H9V6H5V10H6.5V7.5Z" />
      <Path d="M19 12H17.5V14.5H15V16H19V12Z" />
    </Svg>
  )
}

Icon.displayName = 'ScreenshotMonitor'

/**
 * Material Icon: Screenshot Monitor
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:screenshot_monitor Material Icon Docs}
 */
export const ScreenshotMonitor = memo(Icon)
