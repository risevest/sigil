import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M9.5 3.26V5.35C7.17 6.18 5.5 8.39 5.5 11C5.5 12.77 6.28 14.34 7.5 15.44V13H9.5V19H3.5V17H6.23C4.56 15.54 3.5 13.4 3.5 11C3.5 7.27 6.05 4.15 9.5 3.26ZM19.5 3H13.5V9H15.5V6.56C16.72 7.66 17.5 9.23 17.5 11H19.5C19.5 8.6 18.44 6.46 16.77 5H19.5V3ZM19.5 16V15C19.5 13.9 18.6 13 17.5 13C16.4 13 15.5 13.9 15.5 15V16C14.95 16 14.5 16.45 14.5 17V20C14.5 20.55 14.95 21 15.5 21H19.5C20.05 21 20.5 20.55 20.5 20V17C20.5 16.45 20.05 16 19.5 16ZM18.5 16H16.5V15C16.5 14.45 16.95 14 17.5 14C18.05 14 18.5 14.45 18.5 15V16Z" />
    </Svg>
  )
}

Icon.displayName = 'SyncLock'

/**
 * Material Icon: Sync Lock
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:sync_lock Material Icon Docs}
 */
export const SyncLock = memo(Icon)
