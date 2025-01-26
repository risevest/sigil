import { memo } from 'react'
import type { IconProps } from '../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M8.49816 20.0048H15.5018C14.8432 21.5842 13.5794 22.848 12 23.5066C10.4206 22.848 9.15679 21.5842 8.49816 20.0048ZM18 14.8095L20 17.0778V19.0048H4V17.0778L6 14.8095V9.00481C6 5.52156 8.50442 2.55825 12 1.46002C15.4956 2.55825 18 5.52156 18 9.00481V14.8095ZM12 11.0048C13.1046 11.0048 14 10.1094 14 9.00481C14 7.90024 13.1046 7.00481 12 7.00481C10.8954 7.00481 10 7.90024 10 9.00481C10 10.1094 10.8954 11.0048 12 11.0048Z" />
    </Svg>
  )
}

Icon.displayName = 'Rocket2Fill'

/**
 * Remix Icon: Rocket 2 Fill
 * @see {@link https://remixicon.com/icon/rocket-2-fill Remix Icon Docs}
 */
export const Rocket2Fill = memo(Icon)
