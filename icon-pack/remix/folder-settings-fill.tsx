import { memo } from 'react'
import type { IconProps } from '../../types'
import { Svg, Path } from 'react-native-svg'

const Icon = (props: IconProps) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 24 24" fill={color} height={size} width={size} {...otherProps}>
      <Path d="M12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5ZM8.59114 13.8089L7.59998 14.3812L8.59954 16.1124L9.59141 15.5397C9.98434 15.9114 10.4634 16.1929 10.9955 16.3513V17.4956H12.9945V16.3512C13.5266 16.1928 14.0057 15.9113 14.3986 15.5396L15.3905 16.1123L16.39 14.3811L15.3987 13.8088C15.4605 13.5485 15.4932 13.277 15.4932 12.9978C15.4932 12.7186 15.4605 12.447 15.3987 12.1867L16.39 11.6145L15.3904 9.88325L14.3985 10.4559C14.0056 10.0843 13.5265 9.80274 12.9944 9.64438V8.5H10.9954V9.64438C10.4633 9.80275 9.98424 10.0843 9.59133 10.456L8.59949 9.88335L7.59998 11.6146L8.59112 12.1868C8.52933 12.4471 8.49663 12.7186 8.49663 12.9978C8.49663 13.277 8.52934 13.5486 8.59114 13.8089ZM11.9949 14.4971C11.1669 14.4971 10.4957 13.8258 10.4957 12.9978C10.4957 12.1698 11.1669 11.4985 11.9949 11.4985C12.8229 11.4985 13.4942 12.1698 13.4942 12.9978C13.4942 13.8258 12.8229 14.4971 11.9949 14.4971Z" />
    </Svg>
  )
}

Icon.displayName = 'FolderSettingsFill'

/**
 * Remix Icon: Folder Settings Fill
 * @see {@link https://remixicon.com/icon/folder-settings-fill Remix Icon Docs}
 */
export const FolderSettingsFill = memo(Icon)
