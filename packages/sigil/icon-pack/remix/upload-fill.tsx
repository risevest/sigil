import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 19h18v2H3zm10-9v8h-2v-8H4l8-8 8 8z" />
    </Svg>
  )
})
Icon.displayName = 'UploadFill'
/**
 * Remix Icon: Upload Fill
 * @see {@link https://remixicon.com/icon/upload-fill Remix Icon Docs}
 */
export const UploadFill = Icon
