import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M6 9.5H4V16.5H6V9.5Z" />
      <Path d="M12 9.5H10V16.5H12V9.5Z" />
      <Path d="M21 5.5L11 0.5L1 5.5V7.5H21V5.5ZM5.47 5.5L11 2.74L16.53 5.5H5.47Z" />
      <Path d="M1 18.5V20.5H13.4C13.19 19.86 13.08 19.19 13.04 18.5H1Z" />
      <Path d="M18 11.76V9.5H16V12.76L18 11.76Z" />
      <Path d="M19 13.5L15 15.5V18.05C15 20.57 16.71 22.93 19 23.5C21.29 22.93 23 20.57 23 18.05V15.5L19 13.5ZM18.28 20.5L16.25 18.47L17.31 17.41L18.28 18.38L20.69 16L21.75 17.06L18.28 20.5Z" />
    </Svg>
  )
}

Icon.displayName = 'AssuredWorkload'

/**
 * Material Icon: Assured Workload
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:assured_workload Material Icon Docs}
 */
export const AssuredWorkload = memo(Icon)
