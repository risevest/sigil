import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M7 2v20H3V2zm2 0h10.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H9zm13 4h2v4h-2zm0 6h2v4h-2zm-7 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4m-3 4h6a3 3 0 1 0-6 0" />
    </Svg>
  )
})
Icon.displayName = 'ContactsBookFill'
/**
 * Remix Icon: Contacts Book Fill
 * @see {@link https://remixicon.com/icon/contacts-book-fill Remix Icon Docs}
 */
export const ContactsBookFill = Icon
