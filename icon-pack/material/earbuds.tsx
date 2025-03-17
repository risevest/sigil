import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M16 2.99973C13.24 2.99973 11 5.23973 11 7.99973V15.9997C11 17.6597 9.66 18.9997 8 18.9997C6.34 18.9997 5 17.6597 5 15.9997V8.99973H5.83C7.44 8.99973 8.89 7.81973 9 6.20973C9.12 4.51973 7.84 3.10973 6.2 2.99973C4.44 2.88973 3 4.41973 3 6.18973V15.9997C3 18.7597 5.24 20.9997 8 20.9997C10.76 20.9997 13 18.7597 13 15.9997V7.99973C13 6.33973 14.34 4.99973 16 4.99973C17.66 4.99973 19 6.33973 19 7.99973V14.9997H18.17C16.56 14.9997 15.11 16.1797 15 17.7897C14.88 19.4797 16.16 20.8897 17.8 20.9997C19.56 21.1197 21 19.5797 21 17.8197V7.99973C21 5.23973 18.76 2.99973 16 2.99973ZM5 5.99973C5 5.44973 5.45 4.99973 6 4.99973C6.55 4.99973 7 5.44973 7 5.99973C7 6.54973 6.55 6.99973 6 6.99973H5V5.99973ZM19 17.9997C19 18.5497 18.55 18.9997 18 18.9997C17.45 18.9997 17 18.5497 17 17.9997C17 17.4497 17.45 16.9997 18 16.9997H19V17.9997Z" />
    </Svg>
  )
}

Icon.displayName = 'Earbuds'

/**
 * Material Icon: Earbuds
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:earbuds Material Icon Docs}
 */
export const Earbuds = memo(Icon)
