import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17 10.43V2H7V10.43C7 10.78 7.18 11.11 7.49 11.29L11.67 13.8L10.68 16.14L7.27 16.43L9.86 18.67L9.07 22L12 20.23L14.93 22L14.15 18.67L16.74 16.43L13.33 16.14L12.34 13.8L16.52 11.29C16.82 11.11 17 10.79 17 10.43ZM11 11.07L9 9.87V4H11V11.07ZM15 9.87L13 11.07V4H15V9.87Z" />
    </Svg>
  )
}

Icon.displayName = 'MilitaryTech'

/**
 * Material Icon: Military Tech
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:military_tech Material Icon Docs}
 */
export const MilitaryTech = memo(Icon)
