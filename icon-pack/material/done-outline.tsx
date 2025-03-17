import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.77 4.92961L21.17 6.32961L8.43 19.0696L2.83 13.4696L4.23 12.0696L8.43 16.2696L19.77 4.92961ZM19.77 2.09961L8.43 13.4396L4.23 9.23961L0 13.4696L8.43 21.8996L24 6.32961L19.77 2.09961Z" />
    </Svg>
  )
}

Icon.displayName = 'DoneOutline'

/**
 * Material Icon: Done Outline
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:done_outline Material Icon Docs}
 */
export const DoneOutline = memo(Icon)
