import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.5 3H4.5C3.4 3 2.5 3.9 2.5 5V19C2.5 20.1 3.4 21 4.5 21H19.5C20.6 21 21.5 20.1 21.5 19V5C21.5 3.9 20.6 3 19.5 3ZM19.5 5V8H4.5V5H19.5ZM14.5 19H9.5V10H14.5V19ZM4.5 10H7.5V19H4.5V10ZM16.5 19V10H19.5V19H16.5Z" />
    </Svg>
  )
}

Icon.displayName = 'TableChart'

/**
 * Material Icon: Table Chart
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:table_chart Material Icon Docs}
 */
export const TableChart = memo(Icon)
