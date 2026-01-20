import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const ContactsLine = /* @__PURE__ */ memo(function ContactsLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M15 14a5 5 0 0 1 4.995 4.783L20 19v2a1 1 0 0 1-1.993.117L18 21v-2a3 3 0 0 0-2.824-2.995L15 16H7a3 3 0 0 0-2.995 2.824L4 19v2a1 1 0 0 1-1.993.117L2 21v-2a5 5 0 0 1 4.783-4.995L7 14zm6-1a1 1 0 1 1 0 2h-1a1 1 0 1 1 0-2zM11 2a5 5 0 1 1 0 10 5 5 0 0 1 0-10m10 8a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2zM11 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6m10 3a1 1 0 0 1 .117 1.993L21 9h-3a1 1 0 0 1-.117-1.993L18 7z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Contacts Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { ContactsLine }
