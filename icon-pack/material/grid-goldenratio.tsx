import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 11V9H15V2H13V9H11V2H9V9H2V11H9V13H2V15H9V22H11V15H13V22H15V15H22V13H15V11H22ZM13 13H11V11H13V13Z" />
    </Svg>
  )
}

Icon.displayName = 'GridGoldenratio'

/**
 * Material Icon: Grid Goldenratio
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:grid_goldenratio Material Icon Docs}
 */
export const GridGoldenratio = memo(Icon)
