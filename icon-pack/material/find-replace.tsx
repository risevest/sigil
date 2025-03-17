import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M10.255 5.25488C11.635 5.25488 12.885 5.81488 13.795 6.71488L11.255 9.25488H17.255V3.25488L15.205 5.30488C13.935 4.03488 12.185 3.25488 10.255 3.25488C6.725 3.25488 3.825 5.86488 3.335 9.25488H5.355C5.815 6.97488 7.835 5.25488 10.255 5.25488ZM15.895 14.3949C16.555 13.4949 17.015 12.4249 17.175 11.2549H15.155C14.695 13.5349 12.675 15.2549 10.255 15.2549C8.875 15.2549 7.625 14.6949 6.715 13.7949L9.255 11.2549H3.255V17.2549L5.30501 15.2049C6.57501 16.4749 8.325 17.2549 10.255 17.2549C11.805 17.2549 13.235 16.7449 14.395 15.8949L19.255 20.7449L20.745 19.2549L15.895 14.3949Z" />
    </Svg>
  )
}

Icon.displayName = 'FindReplace'

/**
 * Material Icon: Find Replace
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:find_replace Material Icon Docs}
 */
export const FindReplace = memo(Icon)
