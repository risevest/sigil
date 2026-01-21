import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const FileZipFill = /* @__PURE__ */ memo(function FileZipFill(_props: IconProps) {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M13.586 2a2 2 0 0 1 1.284.467l.13.119L19.414 7a2 2 0 0 1 .578 1.238l.008.176V20a2 2 0 0 1-1.85 1.995L18 22h-3v-3.5a1.5 1.5 0 0 0-1.356-1.493L13.5 17h-3a1.5 1.5 0 0 0-1.493 1.356L9 18.5V22H6a2 2 0 0 1-1.995-1.85L4 20V4a2 2 0 0 1 1.85-1.995L6 2zM13 19v3h-2v-3zm-2-6h-1a1 1 0 0 0-.117 1.993L10 15h1a1 1 0 0 0 .117-1.993zm3-2h-1a1 1 0 0 0-.117 1.993L13 13h1a1 1 0 0 0 .117-1.993zm-3-2h-1a1 1 0 0 0 0 2h1a1 1 0 1 0 0-2m3-2h-1a1 1 0 1 0 0 2h1a1 1 0 1 0 0-2"
        />
      </G>
    </Svg>
  )
})
/**
 * MingCute Icon: File Zip Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export { FileZipFill }
