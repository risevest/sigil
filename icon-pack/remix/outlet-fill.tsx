import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM14 10V14H16V10H14ZM8 10V14H10V10H8Z" />
    </Svg>
  )
}

Icon.displayName = 'OutletFill'

/**
 * Remix Icon: Outlet Fill
 * @see {@link https://remixicon.com/icon/outlet-fill Remix Icon Docs}
 */
export const OutletFill = memo(Icon)
