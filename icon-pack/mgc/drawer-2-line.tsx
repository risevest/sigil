import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path
          fill={color}
          d="M18 2a2 2 0 0 1 1.995 1.85L20 4v14a2 2 0 0 1-1.85 1.995L18 20h-1.382l.276.553a1 1 0 0 1-1.73.996l-.058-.102L14.382 20H9.618l-.724 1.447a1 1 0 0 1-1.835-.787l.047-.107.276-.553H6a2 2 0 0 1-1.995-1.85L4 18V4a2 2 0 0 1 1.85-1.995L6 2zm0 10H6v6h12zm-5 2a1 1 0 0 1 .117 1.993L13 16h-2a1 1 0 0 1-.117-1.993L11 14zm5-10H6v6h12zm-5 2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'Drawer2Line'

/**
 * MingCute Icon: Drawer 2 Line
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const Drawer2Line = memo(Icon)
