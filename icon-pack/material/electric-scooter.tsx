import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M7.82103 16H15.001V15C15.001 12.79 16.791 11 19.001 11H19.741L17.841 2.56C17.631 1.65 16.821 1 15.891 1H12.001V3H15.891L17.291 9.25H17.281C15.121 9.9 13.471 11.73 13.091 14H7.82103C7.34103 12.66 5.96103 11.76 4.40103 12.06C3.22103 12.29 2.27103 13.26 2.05103 14.44C1.70103 16.34 3.16103 18 5.00103 18C6.30103 18 7.40103 17.16 7.82103 16ZM5.00103 16C4.45103 16 4.00103 15.55 4.00103 15C4.00103 14.45 4.45103 14 5.00103 14C5.55103 14 6.00103 14.45 6.00103 15C6.00103 15.55 5.55103 16 5.00103 16Z" />
      <Path d="M19.001 12C17.341 12 16.001 13.34 16.001 15C16.001 16.66 17.341 18 19.001 18C20.661 18 22.001 16.66 22.001 15C22.001 13.34 20.661 12 19.001 12ZM19.001 16C18.451 16 18.001 15.55 18.001 15C18.001 14.45 18.451 14 19.001 14C19.551 14 20.001 14.45 20.001 15C20.001 15.55 19.551 16 19.001 16Z" />
      <Path d="M11.001 20H7.00103L13.001 23V21H17.001L11.001 18V20Z" />
    </Svg>
  )
}

Icon.displayName = 'ElectricScooter'

/**
 * Material Icon: Electric Scooter
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:electric_scooter Material Icon Docs}
 */
export const ElectricScooter = memo(Icon)
