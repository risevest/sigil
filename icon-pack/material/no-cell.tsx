import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M17.71 6V14.17L19.71 16.17V3C19.71 1.9 18.81 1.01 17.71 1.01L7.70998 1C6.85998 1 6.12998 1.55 5.83998 2.3L9.53998 6H17.71ZM7.70998 3H17.71V4H7.70998V3ZM21.9 21.19L3.51998 2.81L2.09998 4.22L5.70998 7.83V21C5.70998 22.1 6.60998 23 7.70998 23H17.71C18.56 23 19.29 22.45 19.58 21.7L20.49 22.61L21.9 21.19ZM17.71 21H7.70998V20H17.71V21ZM7.70998 18V9.83L15.88 18H7.70998Z" />
    </Svg>
  )
}

Icon.displayName = 'NoCell'

/**
 * Material Icon: No Cell
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:no_cell Material Icon Docs}
 */
export const NoCell = memo(Icon)
