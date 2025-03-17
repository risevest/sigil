import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14 4.5H22V6.5H14V4.5ZM14 10H22V12H14V10ZM14 15.5H22V17.5H14V15.5ZM2 11C2 14.58 4.92 17.5 8.5 17.5H9V19.5L12 16.5L9 13.5V15.5H8.5C6.02 15.5 4 13.48 4 11C4 8.52 6.02 6.5 8.5 6.5H12V4.5H8.5C4.92 4.5 2 7.42 2 11Z" />
    </Svg>
  )
}

Icon.displayName = 'LowPriority'

/**
 * Material Icon: Low Priority
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:low_priority Material Icon Docs}
 */
export const LowPriority = memo(Icon)
