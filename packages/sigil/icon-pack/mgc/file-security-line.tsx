import { memo } from 'react'
import Svg, { G, Path } from 'react-native-svg'
import type { IconProps } from '../../types'
const Icon = memo((_props: IconProps) => {
  const { color = 'black', size = 24, ...props } = _props
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} {...props}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035q-.016-.005-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427q-.004-.016-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093q.019.005.029-.008l.004-.014-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014-.034.614q.001.018.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M13.586 2A2 2 0 0 1 15 2.586L19.414 7A2 2 0 0 1 20 8.414V13h-2v-3h-4.5A1.5 1.5 0 0 1 12 8.5V4H6v16h6v2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm3.73 12.051 3 1A1 1 0 0 1 21 16v1.671a4.346 4.346 0 0 1-3.866 4.32 1.2 1.2 0 0 1-.268 0A4.346 4.346 0 0 1 13 17.671V16a1 1 0 0 1 .684-.949l3-1a1 1 0 0 1 .632 0M17 16.054l-2 .667v.95c0 1.167.855 2.15 2 2.321 1.145-.17 2-1.154 2-2.32v-.951zm-3-11.64V8h3.586z"
        />
      </G>
    </Svg>
  )
})
Icon.displayName = 'FileSecurityLine'
/**
 * MingCute Icon: File Security Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const FileSecurityLine = Icon
