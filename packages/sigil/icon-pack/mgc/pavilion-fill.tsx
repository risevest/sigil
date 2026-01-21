import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const PavilionFill = /* @__PURE__ */ memo(function PavilionFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M12.903 2.57a1.01 1.01 0 0 0-1.806 0c-.945 1.884-1.964 3.096-3.209 3.907-1.253.816-2.827 1.287-4.988 1.528a1.01 1.01 0 0 0-.884 1.173c.33 1.95 1.664 2.922 2.804 3.377l.18.069V20H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2h-1v-7.376q.09-.033.18-.07c1.14-.454 2.474-1.427 2.804-3.376a1.01 1.01 0 0 0-.884-1.173c-2.161-.241-3.735-.712-4.989-1.528-1.244-.811-2.264-2.023-3.208-3.907M17 13h-1v7h1zm-3 0h-4v7h4zm-6 0H7v7h1z"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: Pavilion Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { PavilionFill }
