import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const BookmarksFill = /* @__PURE__ */ memo(function BookmarksFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036q-.016-.004-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092q.019.005.029-.008l.004-.014-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M10 2a3 3 0 0 0-3 3 3 3 0 0 0-3 3v13.018c0 1.226 1.39 1.934 2.382 1.213l4.118-2.995 4.118 2.995c.991.721 2.382.013 2.382-1.213v-2.236l.618.45c.991.72 2.382.012 2.382-1.214V5a3 3 0 0 0-3-3zm7 14.309 1 .727V5a1 1 0 0 0-1-1h-7a1 1 0 0 0-1 1h5a3 3 0 0 1 3 3z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Bookmarks Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { BookmarksFill }
