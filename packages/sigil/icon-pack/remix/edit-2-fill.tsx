import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M9.243 18.997H21v2H3v-4.243l9.9-9.9 4.242 4.243zm5.07-13.557 2.122-2.121a1 1 0 0 1 1.414 0l2.829 2.828a1 1 0 0 1 0 1.415l-2.122 2.121z" />
    </Svg>
  )
})
Icon.displayName = 'Edit2Fill'
/**
 * Remix Icon: Edit 2 Fill
 * @see {@link https://remixicon.com/icon/edit-2-fill Remix Icon Docs}
 */
export const Edit2Fill = Icon
