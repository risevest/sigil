import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M22 11H17.83L21.07 7.76L19.66 6.34L15 11H13V9L17.66 4.34L16.24 2.93L13 6.17V2H11V6.17L7.76 2.93L6.34 4.34L11 9V11H9L4.34 6.34L2.93 7.76L6.17 11H2V13H6.17L2.93 16.24L4.34 17.66L9 13H11V15L6.34 19.66L7.76 21.07L11 17.83V22H13V17.83L16.24 21.07L17.66 19.66L13 15V13H15L19.66 17.66L21.07 16.24L17.83 13H22V11Z" />
    </Svg>
  )
}

Icon.displayName = 'AcUnit'

/**
 * Material Icon: Ac Unit
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:ac_unit Material Icon Docs}
 */
export const AcUnit = memo(Icon)
