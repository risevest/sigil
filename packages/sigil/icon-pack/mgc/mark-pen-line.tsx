import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const MarkPenLine = /* @__PURE__ */ memo(function MarkPenLine(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2m2.153 13H9.847l-.743 4.46A8 8 0 0 0 12 20c.894 0 1.753-.147 2.556-.417l.34-.123zM12 4a8 8 0 0 0-4.753 14.436l.627-3.765A2 2 0 0 1 9 13.188v-3.182c0-.382.216-.732.558-.903l3.98-1.99A1.01 1.01 0 0 1 15 8.016v5.172a2 2 0 0 1 1.126 1.483l.627 3.765A8 8 0 0 0 12 4m1 5.618-2 1V13h2z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Mark Pen Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { MarkPenLine }
