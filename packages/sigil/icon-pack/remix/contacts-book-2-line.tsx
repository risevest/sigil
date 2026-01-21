import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ContactsBook2Line = /* @__PURE__ */ memo(function ContactsBook2Line(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 22H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-1-2v-2H6a1 1 0 1 0 0 2zM5 16.17c.313-.11.65-.17 1-.17h13V4H6a1 1 0 0 0-1 1zM12 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4m-3 4a3 3 0 1 1 6 0z" />
    </Svg>
  )
})
/**
 * Remix Icon: Contacts Book 2 Line
 * @see {@link https://remixicon.com/icon/contacts-book-2-line Remix Icon Docs}
 */
export { ContactsBook2Line }
