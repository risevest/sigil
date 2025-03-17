import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M3.5 21.5H21.5V15.5H3.5V21.5ZM10.83 19.5V17.5H14.16V19.5H10.83ZM19.5 19.5H16.17V17.5H19.5V19.5ZM5.5 17.5H8.83V19.5H5.5V17.5Z" />
      <Path d="M6.5 10.5L7.92 9.08L6.33 7.5H17.5C18.6 7.5 19.5 8.4 19.5 9.5C19.5 10.6 18.6 11.5 17.5 11.5H3.5V13.5H17.5C19.71 13.5 21.5 11.71 21.5 9.5C21.5 7.29 19.71 5.5 17.5 5.5H6.33L7.92 3.91L6.5 2.5L2.5 6.5L6.5 10.5Z" />
    </Svg>
  )
}

Icon.displayName = 'Repartition'

/**
 * Material Icon: Repartition
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:repartition Material Icon Docs}
 */
export const Repartition = memo(Icon)
