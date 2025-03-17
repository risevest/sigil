import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M19 15.18V7C19 4.79 17.21 3 15 3C12.79 3 11 4.79 11 7V17C11 18.1 10.1 19 9 19C7.9 19 7 18.1 7 17V8.82C8.16 8.4 9 7.3 9 6C9 4.34 7.66 3 6 3C4.34 3 3 4.34 3 6C3 7.3 3.84 8.4 5 8.82V17C5 19.21 6.79 21 9 21C11.21 21 13 19.21 13 17V7C13 5.9 13.9 5 15 5C16.1 5 17 5.9 17 7V15.18C15.84 15.59 15 16.69 15 18C15 19.66 16.34 21 18 21C19.66 21 21 19.66 21 18C21 16.7 20.16 15.6 19 15.18ZM6 7C5.45 7 5 6.55 5 6C5 5.45 5.45 5 6 5C6.55 5 7 5.45 7 6C7 6.55 6.55 7 6 7ZM18 19C17.45 19 17 18.55 17 18C17 17.45 17.45 17 18 17C18.55 17 19 17.45 19 18C19 18.55 18.55 19 18 19Z" />
    </Svg>
  )
}

Icon.displayName = 'Route'

/**
 * Material Icon: Route
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:route Material Icon Docs}
 */
export const Route = memo(Icon)
