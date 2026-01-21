import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MailCheckLine = /* @__PURE__ */ memo(function MailCheckLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M22 14h-2V7.238l-7.928 7.1L4 7.216V19h10v2H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1zM4.511 5l7.55 6.662L19.502 5zM19 22l-3.536-3.535 1.415-1.415L19 19.172l3.535-3.536 1.415 1.414z" />
    </Svg>
  )
})
/**
 * Remix Icon: Mail Check Line
 * @see {@link https://remixicon.com/icon/mail-check-line Remix Icon Docs}
 */
export { MailCheckLine }
