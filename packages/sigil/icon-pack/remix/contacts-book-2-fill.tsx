import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ContactsBook2Fill = /* @__PURE__ */ memo(function ContactsBook2Fill(
  _props: IconProps
) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M20 22H6a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1m-1-2v-2H6a1 1 0 1 0 0 2zm-7-10a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-3 4h6a3 3 0 1 0-6 0" />
    </Svg>
  )
})
/**
 * Remix Icon: Contacts Book 2 Fill
 * @see {@link https://remixicon.com/icon/contacts-book-2-fill Remix Icon Docs}
 */
export { ContactsBook2Fill }
