import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MailLine = /* @__PURE__ */ memo(function MailLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m17 4.238-7.928 7.1L4 7.216V19h16zM4.511 5l7.55 6.662L19.502 5z" />
    </Svg>
  )
})
/**
 * Remix Icon: Mail Line
 * @see {@link https://remixicon.com/icon/mail-line Remix Icon Docs}
 */
export { MailLine }
