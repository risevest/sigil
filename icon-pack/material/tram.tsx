import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M13 5L13.75 3.5H17V2H7V3.5H11.75L11 5C7.87 5.09 5 5.73 5 8.5V17C5 18.5 6.11 19.73 7.55 19.95L6 21.5V22H8L10 20H14L16 22H18V21.5L16.45 19.95C17.89 19.73 19 18.5 19 17V8.5C19 5.73 16.13 5.09 13 5ZM11.03 7H12.97C15.72 7.08 16.59 7.58 16.87 8H7.13C7.41 7.58 8.28 7.08 11.03 7ZM10.85 17.95H7.74C7.3 17.84 7 17.45 7 17V16H10.89C10.65 16.27 10.5 16.61 10.5 17C10.5 17.36 10.63 17.69 10.85 17.95ZM17 17C17 17.45 16.7 17.84 16.26 17.95H13.15C13.37 17.69 13.5 17.36 13.5 17C13.5 16.61 13.35 16.27 13.11 16H17V17ZM17 14H7V10H17V14Z" />
    </Svg>
  )
}

Icon.displayName = 'Tram'

/**
 * Material Icon: Tram
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:tram Material Icon Docs}
 */
export const Tram = memo(Icon)
