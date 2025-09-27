import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M14 13.5V8a4 4 0 0 0-8 0v5.5a6.5 6.5 0 1 0 13 0V4h2v9.5a8.5 8.5 0 0 1-17 0V8a6 6 0 1 1 12 0v5.5a3.5 3.5 0 1 1-7 0V8h2v5.5a1.5 1.5 0 0 0 3 0" />
    </Svg>
  )
})
Icon.displayName = 'AttachmentLine'
/**
 * Remix Icon: Attachment Line
 * @see {@link https://remixicon.com/icon/attachment-line Remix Icon Docs}
 */
export const AttachmentLine = Icon
