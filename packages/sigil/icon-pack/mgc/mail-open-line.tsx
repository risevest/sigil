import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MailOpenLine = /* @__PURE__ */ memo(function MailOpenLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M10.89 2.538a2 2 0 0 1 2.072-.09l.147.09 8 5.333a2 2 0 0 1 .884 1.498l.007.166V19a2 2 0 0 1-1.85 1.995L20 21H4a2 2 0 0 1-1.995-1.85L2 19V9.535a2 2 0 0 1 .756-1.566l.135-.098zm9.11 8.33-7.168 4.78a1.5 1.5 0 0 1-1.664 0L4 10.867V19h16zm-8-6.666L4.803 9 12 13.798 19.197 9z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Mail Open Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { MailOpenLine }
