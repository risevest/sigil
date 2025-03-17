import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M5 18H19V20H5V18ZM9.6 15.3L5 10.7L7 8.8L9.6 11.4L17 4L19 6L9.6 15.3Z" />
    </Svg>
  )
}

Icon.displayName = 'DownloadDone'

/**
 * Material Icon: Download Done
 * @see {@link https://fonts.google.com/icons?selected=Material+Icons:download_done Material Icon Docs}
 */
export const DownloadDone = memo(Icon)
