import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8.79496 15.8749L4.62496 11.7049L3.20496 13.1149L8.79496 18.7049L20.795 6.70492L19.385 5.29492L8.79496 15.8749Z" />
    </Svg>
  )
}

Icon.displayName = 'Check'

/**
 * Material Icon: Check
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:check Material Icon Docs}
 */
export const Check = memo(Icon)
