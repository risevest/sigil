import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8 14L3.5 18.5L5 20L8.5 16.5H10.5L8 14ZM14.5 0.5C13.4 0.5 12.5 1.4 12.5 2.5C12.5 3.6 13.4 4.5 14.5 4.5C15.6 4.5 16.5 3.6 16.5 2.5C16.5 1.4 15.6 0.5 14.5 0.5ZM20.5 20.51L17.5 23.5L14.51 20.49V19L7.41 11.91C7.1 11.96 6.8 11.98 6.5 11.98V9.82C8.16 9.85 10.11 8.95 11.17 7.78L12.57 6.23C12.76 6.02 13 5.85 13.26 5.73C13.55 5.59 13.88 5.5 14.22 5.5H14.25C15.49 5.51 16.5 6.52 16.5 7.76V13.51C16.5 14.35 16.15 15.12 15.58 15.67L12 12.09V9.82C11.37 10.34 10.57 10.84 9.71 11.21L16 17.5H17.5L20.5 20.51Z" />
    </Svg>
  )
}

Icon.displayName = 'Rowing'

/**
 * Material Icon: Rowing
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:rowing Material Icon Docs}
 */
export const Rowing = memo(Icon)
