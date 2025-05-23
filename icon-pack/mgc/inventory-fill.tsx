import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, G, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" height={size} width={size} {...otherProps}>
      <G fill="none" fillRule="evenodd">
        <Path d="M24 0v24H0V0zM12.594 23.258l-.012.002-.071.035-.02.004-.014-.004-.071-.036c-.01-.003-.019 0-.024.006l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.016-.018m.264-.113-.014.002-.184.093-.01.01-.003.011.018.43.005.012.008.008.201.092c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.003-.011.018-.43-.003-.012-.01-.01z" />
        <Path fill={color} d="M9 15v-1h1v1z" fillRule="nonzero" />
        <Path
          fill={color}
          d="M18 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm-7.5 10h-2A1.5 1.5 0 0 0 7 13.5v2A1.5 1.5 0 0 0 8.5 17h2a1.5 1.5 0 0 0 1.5-1.5v-2a1.5 1.5 0 0 0-1.5-1.5m5.5 1.5h-2a1 1 0 0 0-.117 1.993L14 15.5h2a1 1 0 0 0 .117-1.993zm-5.866-6.737L8.72 8.177l-.354-.354a1 1 0 1 0-1.414 1.414l.884.884a1.25 1.25 0 0 0 1.768 0l1.944-1.944a1 1 0 0 0-1.414-1.414M16 8h-2a1 1 0 0 0-.117 1.993L14 10h2a1 1 0 0 0 .117-1.993z"
        />
      </G>
    </Svg>
  )
}

Icon.displayName = 'InventoryFill'

/**
 * MingCute Icon: Inventory Fill
 * @see {@link https://www.mingcute.com MingCute Icon Docs}
 */
export const InventoryFill = memo(Icon)
