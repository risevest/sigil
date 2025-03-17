import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.835 3.86961L16.055 2.09961L6.16504 11.9996L16.065 21.8996L17.835 20.1296L9.70504 11.9996L17.835 3.86961Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowBackIos'

/**
 * Material Icon: Arrow Back Ios
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:arrow_back_ios Material Icon Docs}
 */
export const ArrowBackIos = memo(Icon)
