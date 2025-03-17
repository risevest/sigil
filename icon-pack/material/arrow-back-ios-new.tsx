import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.885 3.77L16.115 2L6.11499 12L16.115 22L17.885 20.23L9.65499 12L17.885 3.77Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowBackIosNew'

/**
 * Material Icon: Arrow Back Ios New
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:arrow_back_ios_new Material Icon Docs}
 */
export const ArrowBackIosNew = memo(Icon)
