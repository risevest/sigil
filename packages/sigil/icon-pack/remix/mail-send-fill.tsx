import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MailSendFill = /* @__PURE__ */ memo(function MailSendFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M2 5.5V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V19h18V7.3l-8 7.2zM0 10h5v2H0zm0 5h8v2H0z" />
    </Svg>
  )
})
/**
 * Remix Icon: Mail Send Fill
 * @see {@link https://remixicon.com/icon/mail-send-fill Remix Icon Docs}
 */
export { MailSendFill }
