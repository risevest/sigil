import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16.845 14.2549H16.055L15.775 13.9849C16.755 12.8449 17.345 11.3649 17.345 9.75488C17.345 6.16488 14.435 3.25488 10.845 3.25488C7.42504 3.25488 4.62504 5.89488 4.37504 9.25488H6.39504C6.64504 7.00488 8.52504 5.25488 10.845 5.25488C13.335 5.25488 15.345 7.26488 15.345 9.75488C15.345 12.2449 13.335 14.2549 10.845 14.2549C10.675 14.2549 10.515 14.2249 10.345 14.2049V16.2249C10.515 16.2449 10.675 16.2549 10.845 16.2549C12.455 16.2549 13.935 15.6649 15.075 14.6849L15.345 14.9649V15.7549L20.345 20.7449L21.835 19.2549L16.845 14.2549Z" />
      <Path d="M7.81504 11.0749L5.34504 13.5449L2.87504 11.0749L2.16504 11.7849L4.63504 14.2549L2.16504 16.7249L2.87504 17.4349L5.34504 14.9649L7.81504 17.4349L8.52504 16.7249L6.05504 14.2549L8.52504 11.7849L7.81504 11.0749Z" />
    </Svg>
  )
}

Icon.displayName = 'SearchOff'

/**
 * Material Icon: Search Off
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:search_off Material Icon Docs}
 */
export const SearchOff = memo(Icon)
