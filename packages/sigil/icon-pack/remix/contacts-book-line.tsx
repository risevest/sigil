import { memo } from 'react'
import Svg, { Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg fill={color} viewBox="0 0 24 24" width={size} height={size} {...props}>
      <Path d="M3 2h16.005C20.107 2 21 2.898 21 3.99v16.02c0 1.099-.893 1.99-1.995 1.99H3zm4 2H5v16h2zm2 16h10V4H9zm2-4a3 3 0 1 1 6 0zm3-4a2 2 0 1 1 0-4 2 2 0 0 1 0 4m8-6h2v4h-2zm0 6h2v4h-2z" />
    </Svg>
  )
})
Icon.displayName = 'ContactsBookLine'
/**
 * Remix Icon: Contacts Book Line
 * @see {@link https://remixicon.com/icon/contacts-book-line Remix Icon Docs}
 */
export const ContactsBookLine = Icon
