import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.88 17.97C20.32 17.27 20.58 16.46 20.58 15.58C20.58 13.09 18.57 11.08 16.08 11.08C13.59 11.08 11.58 13.09 11.58 15.58C11.58 18.07 13.59 20.08 16.07 20.08C16.95 20.08 17.77 19.82 18.46 19.38L21.58 22.5L23 21.08L19.88 17.97ZM16.08 18.08C14.7 18.08 13.58 16.96 13.58 15.58C13.58 14.2 14.7 13.08 16.08 13.08C17.46 13.08 18.58 14.2 18.58 15.58C18.58 16.96 17.46 18.08 16.08 18.08ZM15.72 9.58C14.98 9.6 14.27 9.76 13.62 10.03L13.07 9.2L9.27 15.38L6.26 11.86L2.63 17.67L1 16.5L6 8.5L9 12L13 5.5L15.72 9.58ZM18.31 10.08C17.67 9.8 16.98 9.63 16.26 9.59L21.38 1.5L23 2.68L18.31 10.08Z" />
    </Svg>
  )
}

Icon.displayName = 'QueryStats'

/**
 * Material Icon: Query Stats
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:query_stats Material Icon Docs}
 */
export const QueryStats = memo(Icon)
