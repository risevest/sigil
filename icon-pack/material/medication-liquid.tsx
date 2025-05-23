import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M14.5 3H2.5V5H14.5V3Z" />
      <Path d="M1.5 21H15.5V6H1.5V21ZM4.5 12H7V9.5H10V12H12.5V15H10V17.5H7V15H4.5V12Z" />
      <Path d="M19.5 6C17.82 6 16.5 7.76 16.5 10C16.5 11.77 17.33 13.22 18.5 13.76V21H20.5V13.76C21.67 13.22 22.5 11.77 22.5 10C22.5 7.76 21.18 6 19.5 6Z" />
    </Svg>
  )
}

Icon.displayName = 'MedicationLiquid'

/**
 * Material Icon: Medication Liquid
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:medication_liquid Material Icon Docs}
 */
export const MedicationLiquid = memo(Icon)
