import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19.66 14C19 15.92 17.42 17.54 15.26 18.39L14 18.88V20H10V18.88L8.73 18.38C6.57 17.53 4.99 15.91 4.33 13.99H19.66M12 2C6.48 2 2 6.48 2 12C2 15.69 4.47 18.86 8 20.25V22H16V20.25C19.53 18.86 22 15.69 22 12C22 6.48 17.52 2 12 2ZM10 12V4.26C10.64 4.1 11.31 4 12 4C12.69 4 13.36 4.1 14 4.26V12H10ZM16 12V5.08C18.39 6.47 20 9.04 20 12H16ZM4 12C4 9.05 5.61 6.47 8 5.08V12H4Z" />
    </Svg>
  )
}

Icon.displayName = 'RiceBowl'

/**
 * Material Icon: Rice Bowl
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:rice_bowl Material Icon Docs}
 */
export const RiceBowl = memo(Icon)
