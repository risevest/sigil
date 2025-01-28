import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M2 4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H21C21.5523 5 22 5.44772 22 6V12.3604C21.0023 10.9408 19.3542 10 17.5 10C14.8979 10 12.7015 11.853 12.1394 14.2817C10.8512 15.1306 10 16.5894 10 18.25C10 19.2749 10.3246 20.2239 10.8766 21H3C2.44772 21 2 20.5523 2 20V4ZM14.0015 15.6031C12.8465 15.9291 12 16.9907 12 18.25C12 19.7688 13.2312 21 14.75 21H20.25C21.7688 21 23 19.7688 23 18.25C23 16.9907 22.1535 15.9291 20.9985 15.6031C21.0548 13.6578 19.4477 12 17.5 12C15.5523 12 13.9452 13.6578 14.0015 15.6031Z" />
    </Svg>
  )
}

Icon.displayName = 'FolderCloudFill'

/**
 * Remix Icon: Folder Cloud Fill
 * @see {@link https://remixicon.com/icon/folder-cloud-fill Remix Icon Docs}
 */
export const FolderCloudFill = memo(Icon)
