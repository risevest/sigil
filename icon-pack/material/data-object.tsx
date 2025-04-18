import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M4 7V9C4 9.55 3.55 10 3 10H2V14H3C3.55 14 4 14.45 4 15V17C4 18.65 5.35 20 7 20H10V18H7C6.45 18 6 17.55 6 17V15C6 13.7 5.16 12.58 4 12.17V11.83C5.16 11.42 6 10.3 6 9V7C6 6.45 6.45 6 7 6H10V4H7C5.35 4 4 5.35 4 7Z" />
      <Path d="M21 10C20.45 10 20 9.55 20 9V7C20 5.35 18.65 4 17 4H14V6H17C17.55 6 18 6.45 18 7V9C18 10.3 18.84 11.42 20 11.83V12.17C18.84 12.58 18 13.69 18 15V17C18 17.55 17.55 18 17 18H14V20H17C18.65 20 20 18.65 20 17V15C20 14.45 20.45 14 21 14H22V10H21Z" />
    </Svg>
  )
}

Icon.displayName = 'DataObject'

/**
 * Material Icon: Data Object
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:data_object Material Icon Docs}
 */
export const DataObject = memo(Icon)
