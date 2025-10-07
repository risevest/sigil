import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M21 1.997c-15 0-17 14-18 20h1.998q.999-5 5.002-5.5c4-.5 7-4 8-7l-1.5-1 1-1c1-1 2.004-2.5 3.5-5.5" />
    </Svg>
  )
})
Icon.displayName = 'QuillPenFill'
/**
 * Remix Icon: Quill Pen Fill
 * @see {@link https://remixicon.com/icon/quill-pen-fill Remix Icon Docs}
 */
export const QuillPenFill = Icon
